import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "TransactionHex": "018575e7540be9c4b833b78408aa06e7d386411ce28169e3b267fce3049d6a36b7000103037fe7f8102d08e0d1e007786d958aaee319b2f38f1e05c5057320a5c1373ffbe0bb02053a0000297b22426f6479223a22436865636b696e67206f75742074686520646576656c6f70657220687562227de807d4618083db88ebcee4ee16002103037fe7f8102d08e0d1e007786d958aaee319b2f38f1e05c5057320a5c1373ffb0000",
  "ExtraData": {
    "extra_data_that_was_added_afterwards": "DeZo_Dog is the best dog"
  }
};
 const response = await deso.transaction.getTransaction(request);