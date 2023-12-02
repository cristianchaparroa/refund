// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

contract Notifier {

    using Strings for address;
    using Strings for uint;

    // The following is the Push protcol Address for the Push comm interface 
    // EPNS COMM ADDRESS ON ETHEREUM KOVAN, CHECK THIS: https://docs.epns.io/developers/developer-tooling/epns-smart-contracts/epns-contract-addresses
    address public EPNS_COMM_ADDRESS = 0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa; 

    /*
     * @notice the followimg is an empty contract 
     */ 
    constructor() {

    }

    function Notify(string message) override public returns (bool success) {

        //"0+3+Hooray! ", msg.sender, " sent ", token amount, " PUSH to you!"
        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            0x28400aa592483d6DC6776B82B25dD2E517863050, // from channel
            to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.push.org/developers/developer-guides/sending-notifications/notification-payload-types/notification-standard-advanced/notification-identity
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.push.org/developers/developer-guides/sending-notifications/notification-payload-types/notification-standard-advanced/notification-identity
                        "+", // segregator
                        "3", // this is payload type: https://docs.push.org/developers/developer-guides/sending-notifications/notification-payload-types/notification-standard-advanced/notification-payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        "Tranfer Alert", // this is notificaiton title
                        "+", // segregator
                        "Hooray! ", // notification body
                        owner.toHexString(), // notification body
                        " sent ", // notification body
                        (amount / (10 ** uint(decimals()))).toString(), // notification body
                        " PUSH to you!" // notification body
                    )
                )
            )
        );
        
        return true;
    }

}
