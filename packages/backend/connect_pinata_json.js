const pinataSDK = require('@pinata/sdk');


const test_json_send = async () => {

    const JWT = ""

    const pinata = new pinataSDK({ pinataJWTKey: JWT });

    const json = {
      borrower: "Oxdef789..",
      asset: "DAI",
      amount: 75.0,
      collateral: "ETH",
      collateralAmount: 3.0,
      duration: 15
    }

    const res = await pinata.pinJSONToIPFS(json);
    console.log(res);
}
test_json_send()
