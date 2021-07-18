import { SiteClient } from 'datocms-client';

export default async function receiveRequests(request, response) {
  if(request.method === 'POST') {
    const TOKEN = '166b4d0e244233d09bfee6c628ddb6';
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
