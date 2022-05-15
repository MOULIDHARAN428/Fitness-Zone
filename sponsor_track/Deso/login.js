import Deso from 'deso-protocol';
const deso = new Deso();
const request = 3;
 const response = await deso.identity.login(request);