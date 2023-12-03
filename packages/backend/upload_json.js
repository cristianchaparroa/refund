

const axios = require('axios')
async function post_data() {

    url = "https://1322528568-93jrys6t34-use.scf.tencentcs.com"
    
    // send json
    const json = {
      borrower: "mi data personalizada..",
      asset: "DAI",
      amount: 75.0,
      collateral: "ETH",
      collateralAmount: 3.0,
      duration: 15
    }
    
    const json_res = await axios.post(url, json)
    console.log(json_res.data)
}

post_data()

