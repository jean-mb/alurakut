import { SiteClient } from 'datocms-client';

export default async function receiveRequests(request, response) {
  if(request.method === 'POST') {
    const TOKEN = '53081be425b0df220f2c71c9949439';
    const client = new SiteClient(TOKEN);
  
    const registerCreated = await client.items.create({
      itemType: "968409",
      ...request.body,   
    })
  
    response.json({
      data:'xxx',
      receiveRequests: registerCreated,
    })
  }
}