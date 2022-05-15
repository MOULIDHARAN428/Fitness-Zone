import Deso from 'deso-protocol';
const deso = new Deso();
const request = {
  "publicKey": null,
  "transactionSpendingLimitResponse": {
    "GlobalDESOLimit": 100000000000,
    "TransactionCountLimitMap": {
      "SUBMIT_POST": 120948,
      "FOLLOW": 82943
    },
    "CreatorCoinOperationLimitMap": {
      "": {
        "any": 2183
      },
      "BC1YLhtBTFXAsKZgoaoYNW8mWAJWdfQjycheAeYjaX46azVrnZfJ94s": {
        "buy": 123,
        "sell": 4123,
        "transfer": 9198
      }
    },
    "DAOCoinOperationLimitMap": {
      "": {
        "mint": 1
      }
    },
    "NFTOperationLimitMap": {
      "01855d9ca9c54d797e53df0954204ae7d744c98fe853bc846f5663459ac9cb7b": {
        "0": {
          "update": 10,
          "nft_bid": 501
        }
      }
    },
    "DAOCoinLimitOrderLimitMap": {
      "DESO": {
        "BC1YLhtBTFXAsKZgoaoYNW8mWAJWdfQjycheAeYjaX46azVrnZfJ94s": 10
      },
      "BC1YLhtBTFXAsKZgoaoYNW8mWAJWdfQjycheAeYjaX46azVrnZfJ94s": {
        "DESO": 5
      },
      "BC1YLjMYu2ahUtWgSX34cNLeM9BM9y37cqXzxAjbvPfbxppDh16Jwog": {
        "BC1YLhtBTFXAsKZgoaoYNW8mWAJWdfQjycheAeYjaX46azVrnZfJ94s": 1092
      }
    }
  }
};
 const response = await deso.identity.derive(request);