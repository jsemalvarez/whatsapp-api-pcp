import whatsappService from './whatsappService.js';
import config from '../config/env.js';

class MessageHandler {
  async handleIncomingMessage(message) {
    if (message?.type === 'text') {
      const response = `Echo: ${message.text.body}`;
      const DESTINATION_PHONE = (config.NODE_ENV === 'PROD')? message.from : config.DEV_PHONE;
      await whatsappService.sendMessage(DESTINATION_PHONE, response, message.id);
      await whatsappService.markAsRead(message.id);
    }
  }
}

export default new MessageHandler();