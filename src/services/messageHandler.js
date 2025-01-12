import whatsappService from './whatsappService.js';
import config from '../config/env.js';
import { places, PLACES_CATEGORIES } from './places.js';

class MessageHandler {
  async handleIncomingMessage(message, senderInfo) {
    if (message?.type === 'text') {
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      const incommingMessage = message.text.body.toLowerCase().trim();

      if(this.isGreeting(incommingMessage)){
        await this.sendWelcomeMessage(DESTINATION_PHONE, message.id, senderInfo)
        await this.sendWelcomeMenu(DESTINATION_PHONE);
      }else if(!isNaN(incommingMessage)){
        const place = this.getPlacebyId(incommingMessage);
        const response = place 
          ? this.formattedPlace(place)
          : `No se puedo encontrar datos sobre la opción ${incommingMessage}`

        await whatsappService.sendMessage(DESTINATION_PHONE, response, message.id)
        if(place){
          const location = {
            name:place.name,
            address: place.address,
            position: place.position,
          }
          await whatsappService.sendLocationMessage(DESTINATION_PHONE, location );
        }
        
      }else if(this.isWelcomeMenuRequest(incommingMessage)){
        await this.sendWelcomeMenu(DESTINATION_PHONE);
      }
      else{
        const response = `El mensaje *${message.text.body}* no es una opcion valida para poder darte una respuesta. Para ver el menu principal, envia la palabra *menu*`;
        await whatsappService.sendMessage(DESTINATION_PHONE, response, message.id);
      }

      await whatsappService.markAsRead(message.id);
    }else if(message?.type === 'interactive'){
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      // const option = message?.interactive?.button_reply?.title.toLowerCase().trim();
      const option = message?.interactive?.button_reply?.id;
      await this.handleMenuOptions(DESTINATION_PHONE, option);
      await whatsappService.markAsRead(message.id);
    }else{
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      const response= `Perdon, pero no estoy programado para responder el mesaje que enviaste. Recauerda que solo soy un asistente que puede responder a las opciones por las cuales te voy guiando.\nPara ver el menú principal envia *menu*`
      await whatsappService.sendMessage(DESTINATION_PHONE, response);
    }

  }

  isGreeting(message){
    const greetings = ['hola','hola ','hola,','hola.', 'buenas'];
    return greetings.includes(message)
  }

  isWelcomeMenuRequest(message) {
    const menuKeywords = ['menú', 'menu', 'menu.', 'menu,', 'menu!'];
    return menuKeywords.some(keyword => message.includes(keyword));
  }

  getSenderName(senderInfo){
    const name = senderInfo.profile?.name || senderInfo.wa_id || '';
    const firstName = name.split(' ')[0];
    return firstName
  }

  async sendWelcomeMessage(to, messageId, senderInfo){
    const name = this.getSenderName(senderInfo);
    const welcomeMessage = `Hola ${name}. te saluda el asistene virtual de PCP. ¿En qué puedo ayudarte?`;
    await whatsappService.sendMessage(to, welcomeMessage, messageId)
  }

  async sendWelcomeMenu(to){
    const menuMessage = 'Elige una opcion\n*puedens volver a este menú escribiendo *menu*';
    const buttons = [
      { type: 'reply', reply: { id: 'welcomeMenuLugares', title: 'Lugares'} },
      { type: 'url', url: 'https://paseosconpequesmdp.web.app/#custom-map', title: 'Eventos' },
      { type: 'reply', reply: { id: 'welcomeMenuPDF', title: 'Guia de lugares PDF'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  async sendBackButton(to, menuId, menuName){
    const menuMessage = '*Volver a:*';
    const buttons = [
      { type: 'reply', reply: { id: menuId, title: menuName} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  async sendPlacesMenu(to){
    const menuMessage = '*Lugares:*';
    const buttons = [
      { type: 'reply', reply: { id: 'placesMenuTematicos', title: 'Tematicos'} },
      { type: 'reply', reply: { id: 'placesMenuGastronomia', title: 'Con Gastronomia'} },
      { type: 'reply', reply: { id: 'placesMenuPasarElDia', title: 'Para pasar el dia'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  async sendTematiciosPlacesMenu(to){
    const menuMessage = '*Lugares Tematicos:*';
    const buttons = [
      { type: 'reply', reply: { id: 'tematiciosPlacesMenuShows', title: 'Shows'} },
      { type: 'reply', reply: { id: 'tematiciosPlacesMenuPaseos', title: 'Paseos'} },
      { type: 'reply', reply: { id: 'tematiciosPlacesMenuInterectivos', title: 'Interactivos'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  async sendFoodPlacesMenu(to){
    const menuMessage = '*Lugares con gastronomia:*';
    const buttons = [
      { type: 'reply', reply: { id: 'foodPlacesMenuCafe', title: 'Cafes'} },
      { type: 'reply', reply: { id: 'foodPlacesMenuRestaurante', title: 'Restaurantes'} },
      { type: 'reply', reply: { id: 'foodPlacesMenuFastFood', title: 'Fastfood/Foodtrucks'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  async sendEventsMenu(to){
    const menuMessage = '*Eventos:*';
    const buttons = [
      { type: 'reply', reply: { id: 'eventsMenuFree', title: 'Entrada Libre'} },
      { type: 'reply', reply: { id: 'eventsMenuGorra', title: 'A la gorra'} },
      { type: 'reply', reply: { id: 'eventsMenuTicket', title: 'Con ticket'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

  filterPlacesByCategory(category){
    return places.filter(place => place.categories.includes(category))
  }

  formattedPlaces(places){
    let mensaje = "Aquí tienes una lista de lugares que podrían interesarte:\n\n";
    places.forEach((lugar) => {
      mensaje += `*${lugar.id} - ${lugar.name}*\n`;
      mensaje += `   📍 Dirección: ${lugar.address}\n`;
      // mensaje += `   Instagram: ${lugar.link || '---'}\n`;
      // mensaje += `   🍴 Destacado: ${lugar.destacado}\n`;
      mensaje += '\n';
    });
    mensaje += "¿Quieres más información sobre alguno de estos lugares? Escríbeme el número de la opción. 😊 \n\n";
    return mensaje;
  }

  getPlacebyId(id){
    const place = places.find( place => place.id == id) 
    return place;
  }

  formattedPlace(place){
    let message = ''
    message += `*${place.id} - ${place.name}*\n`
    message += `  📍 ${place.address}\n`
    message += `  📱 ${place.phone || '---'}\n`
    message += `  🕐 ${place.schedules || '---'}\n`
    message += `  🌐 ${place.link || '---'}\n`
    message += `${place.description}\n`
    message += `\n`
    return message
  }

  async sendLocation(to) {
    const latitude = 6.2071694;
    const longitude = -75.574607;
    const name = 'Platzi Medellín';
    const address = 'Cra. 43A #5A - 113, El Poblado, Medellín, Antioquia.'

    await whatsappService.sendLocationMessage(to, latitude, longitude, name, address);
  }

  async handleMenuOptions(to, option){
    let response = null;
    switch(option){
      case 'welcomeMenu':
        await this.sendWelcomeMenu(to)
        break;
      case 'welcomeMenuLugares':
        await this.sendPlacesMenu(to);
        break;
      case 'welcomeMenuEventos':
        // await this.sendEventsMenu(to);
        response = 'puedes ver el calendario de eventos en nuestro sitio web https://paseosconpequesmdp.web.app'
        break;
      case 'welcomeMenuPDF':
        response = 'puedes descargar nuestra guia de lugares en PDF en el siguiente link: https://drive.google.com/drive/folders/1tIgrbBYre1A8gKQjQtbNeeeAd_qoHaDV'
        break;
      case 'placesMenuTematicos':
        await this.sendTematiciosPlacesMenu(to);
        break;
      case 'placesMenuGastronomia':
        await this.sendFoodPlacesMenu(to);
        break;
      case 'placesMenuPasarElDia':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.ALL_DAY))
        break;

      case 'tematiciosPlacesMenuShows':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.SHOWS))
        break;
      case 'tematiciosPlacesMenuPaseos':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.PASEOS))
        break;
      case 'tematiciosPlacesMenuInterectivos':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.INTERECTIVOS))
        break;

      case 'foodPlacesMenuCafe':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.CAFE))
        break;
      case 'foodPlacesMenuRestaurante':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.RESTAURANTE))
        break;
      case 'foodPlacesMenuFastFood':
        response = this.formattedPlaces(this.filterPlacesByCategory(PLACES_CATEGORIES.FASTFOOD))
        break;
      case 'eventsMenuFree':
        response = 'Eventos con entrada libre'
        break;
      case 'eventsMenuGorra':
        response = 'Eventos a la gorra'
        break;
      case 'eventsMenuTicket':
        response = 'Eventos con ticket'
        break;
      default:
        response= 'Lo siento, debes seleccionar una de las opciones del menú.'
    }

    if(response !== null ){
      await whatsappService.sendMessage(to, response);
    }
  }

}

export default new MessageHandler();