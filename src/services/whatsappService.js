import axios from 'axios';
import config from '../config/env.js';

class WhatsAppService {
  async sendMessage(to, body, messageId) {
    try {
      await axios({
        method: 'POST',
        url: `https://graph.facebook.com/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`,
        headers: {
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
        data: {
          messaging_product: 'whatsapp',
          to,
          text: { body },
          // context: {
          //   message_id: messageId,
          // },
        },
      });
    } catch (error) {
      console.error('<<<<<<<<<<<<-----------Error sending message-------------->>>>>>>>>>>>>>>>>>>>>>>>>');
      console.error(error);
    }
  }

  async markAsRead(messageId) {
    try {
      await axios({
        method: 'POST',
        url: `https://graph.facebook.com/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`,
        headers: {
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
        data: {
          messaging_product: 'whatsapp',
          status: 'read',
          message_id: messageId,
        },
      });
    } catch (error) {
      console.error('<<<<<<<<<<<<-----------Error marking message as read-------------->>>>>>>>>>>>>>>>>>>>>>>>>');
      console.error(error);
    }
  }

  async sendInteractiveButtons(to, textBody, buttons){
    try {
      await axios({
        method: 'POST',
        url: `https://graph.facebook.com/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`,
        headers: {
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
        data: {
          messaging_product: 'whatsapp',
          to,
          type: 'interactive',
          interactive: {
            type: 'button',
            body : { text : textBody },
            action: {
              buttons: buttons
            }
          }
        },
      });      
    } catch (error) {
      console.error('Error sending interactive buttons');
      console.error(error);
    }
  }

  async sendLocationMessage(to, location) {    
    try {
      const {name, address, position} = location;

      await axios({
        method: 'POST',
        url: `https://graph.facebook.com/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`,
        headers: {
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
        data: {
          messaging_product: 'whatsapp',
          to,
          type: 'location',
          location: {
            latitude: position.lat,
            longitude: position.lng,
            name: name,
            address: address
          }
        },
      });
    } catch (error) {
      console.error('<<<<<<<<<<<<-----------Error sending location-------------->>>>>>>>>>>>>>>>>>>>>>>>>');
      console.error(error);
    }
  }
}

export default new WhatsAppService();