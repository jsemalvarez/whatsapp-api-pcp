import whatsappService from './whatsappService.js';
import config from '../config/env.js';

class MessageHandler {
  async handleIncomingMessage(message) {
    if (message?.type === 'text') {
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      const incommingMessage = message.text.body.toLowerCase().trim();

      if(this.isGreeting(incommingMessage)){
        await this.sendWelcomeMessage(DESTINATION_PHONE, message.id)
      }else{
        const response = `Echo: ${message.text.body}`;
        await whatsappService.sendMessage(DESTINATION_PHONE, response, message.id);
      }

      await whatsappService.markAsRead(message.id);
    }
  }

  isGreeting(message){
    const greetings = ['hola', 'buenas'];
    return greetings.includes(message)
  }

  async sendWelcomeMessage(to, messageId){
    const welcomeMessage = 'Hola. Soy el asistene virtual de PCP. ¿En qué puedo ayudarte?';
    await whatsappService.sendMessage(to, welcomeMessage, messageId)
  }
}

export default new MessageHandler();