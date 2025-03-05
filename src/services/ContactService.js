import errorMiddleware from '../middlewares/errorMiddleware.js';
import Service from './service.js';

const contactService = new Service();

contactService.post('contact', handleContact);

async function handleContact(context, tokens, query, body) {
  console.log("Received body:", body);

  if (!body.name || !body.email || !body.message) {
    throw new errorMiddleware('Missing required fields');
  }

  const result = await context.storage.add('contacts', body);
  return { success: true, id: result._id };
}

// Увери се, че services.api е правилно зададен
const services = {
  api: (req, res) => contactService.parseRequest(req, res)
};

console.log("Registered services:", Object.keys(services)); // Debugging

export default services;
