import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "SenderPublicKeyBase58Check": null,
  "ReceiverPublicKeyBase58Check": "BC1YLjMYu2ahUtWgSX34cNLeM9BM9y37cqXzxAjbvPfbxppDh16Jwog",
  "NFTPostHashHex": "be84338d248394f9ef194c01054039a51667420a7fb91fb838c2445f786432b6",
  "SerialNumber": 1,
  "MinFeeRateNanosPerKB": 1000
};
 const response = await deso.nft.transferNft(request);