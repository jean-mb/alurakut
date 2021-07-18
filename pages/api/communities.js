import { SiteClient } from 'datocms-client'

export default async function receiveRequests(request, response) {
<<<<<<< HEAD
  if (request.method === 'POST') {
    const TOKEN = 'b651593414a5cf13a74f5e6847d094'
    const client = new SiteClient(TOKEN)

=======
  if(request.method === 'POST') {
    const TOKEN = 'b651593414a5cf13a74f5e6847d094';
    const client = new SiteClient(TOKEN);
  
>>>>>>> 4d3ff1db0e7860a9865af39d45d032eb23c1bccf
    const registerCreated = await client.items.create({
      itemType: '968409',
      ...request.body
    })

    response.json({
      data: 'xxx',
      receiveRequests: registerCreated
    })
  }
}
