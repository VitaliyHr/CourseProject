import emailjs from 'emailjs';
import config from 'config';

import log4js from '../middleware/log4js';

const logger = log4js.getLogger('error');

const user = config.get('MailOptions.user');
const pass = config.get('MailOptions.pass');

const server = emailjs.server.connect({
  user,
  password: pass,
  ssl: true,
  host: 'smtp.gmail.com',
});


export default async function SendEmail(to, order, pizza) {
  const MailOptions = {
    text: 'Hey!!',
    from: user,
    to,
    cc: ' ',
    subject: 'Ваща піцца!!!',
    attachment: [
      {
        data: `<h1>Шановний клієнте</h1>
        <h5>Ваша піцца прибуде через: 40хв</h5>
        <h5>Ваша адреса: ${order.address}</h5>
        <h5>Kількість: ${order.count}</h5>
        <h5>Назва піцци: ${pizza}</h5>
        <h5>Ви зробили заказ о: ${order.createdAt}</h5>
        <h3>Cума: ${order.price}</h3>
        `,
        alternative: true,
      },
    ],
  };

  server.send(MailOptions, (err) => {
    if (err) {
      logger.error(err);
    }
  });
}