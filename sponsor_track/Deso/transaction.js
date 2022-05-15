import Deso from 'deso-protocol';
const deso = new Deso();
const request = "4354315e08ce066e0487ef85d2476579bfe6a8c0c8d3979374085dcae753b04d";
 const response = await deso.transaction.getTransaction(request);