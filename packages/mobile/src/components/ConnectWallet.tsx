import { useState, useEffect } from 'react';
import { ethers } from 'ethers'
import WalletService from '../services/wallet';


const ConnectWallet = (props:any) => {
    
    const walletService = new WalletService()
    const [address, setAddress] = useState<string>();
    const [balance, setBalance] = useState<string>();
    const [connect, setConnected] = useState<boolean>();

    const  handleConnectWallet = async () => {
        const signer = await walletService.getSigner();

        console.log("---> signer", signer);
        
        setAddress(await signer.getAddress())
        setBalance(ethers.utils.formatEther(await signer.getBalance())) 

        console.log(address);
        props.setIsConnected(true);
        setConnected(true);
    }

    return (
        <div>       
            <button type="button" className="btn btn-primary w-full" onClick={handleConnectWallet}>{props.label}</button>
            {connect &&
                <div>
                <p>
                    {address}
                </p>
                </div>
            }

        </div>
    );
}


export default ConnectWallet;
