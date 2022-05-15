import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "PublicKeyBase58Check": "BC1YLheA3NepQ8Zohcf5ApY6sYQee9aPJCPY6m3u6XxCL57Asix5peY",
  "NumHeaders": 1,
  "HeaderVersion": 1
};
 const response = await deso.miner.getBlockTemplate(request);