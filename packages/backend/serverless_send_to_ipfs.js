'use strict';

const pinataSDK = require('@pinata/sdk');

exports.main_handler = async (event, context) => {
    const JWT = ""
    const pinata = new pinataSDK({ pinataJWTKey: JWT });
    const res = await pinata.pinJSONToIPFS(event);
    // console.log(res);
    return res
};