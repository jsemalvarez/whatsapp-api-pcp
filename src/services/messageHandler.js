import whatsappService from './whatsappService.js';
import config from '../config/env.js';

class MessageHandler {
  async handleIncomingMessage(message, senderInfo) {
    if (message?.type === 'text') {
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      const incommingMessage = message.text.body.toLowerCase().trim();

      if(this.isGreeting(incommingMessage)){
        await this.sendWelcomeMessage(DESTINATION_PHONE, message.id, senderInfo)
        await this.sendWelcomeMenu(DESTINATION_PHONE);
      }else{
        const response = `Echo: ${message.text.body}`;
        await whatsappService.sendMessage(DESTINATION_PHONE, response, message.id);
      }

      await whatsappService.markAsRead(message.id);
    }
  }

  isGreeting(message){
    const greetings = ['hola','hola ','hola,','hola.', 'buenas'];
    return greetings.includes(message)
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
    const menuMessage = 'Elige una opcion';
    const buttons = [
      { type: 'reply', reply: { id: 'welcomeMenu1', title: 'Lugares'} },
      { type: 'reply', reply: { id: 'welcomeMenu2', title: 'Eventos'} },
      { type: 'reply', reply: { id: 'welcomeMenu3', title: 'Sitio Web'} },
    ];

    await whatsappService.sendInteractiveButtons(to, menuMessage, buttons)
  }

}

export default new MessageHandler();