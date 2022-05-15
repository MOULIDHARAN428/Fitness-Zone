import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "UpdaterPublicKeyBase58Check": null,
  "NFTPostHashHex": "be84338d248394f9ef194c01054039a51667420a7fb91fb838c2445f786432b6",
  "SerialNumber": 1,
  "IsForSale": true,
  "MinBidAmountNanos": 100,
  "MinFeeRateNanosPerKB": 1000
};
 const response = await deso.nft.updateNft(request);