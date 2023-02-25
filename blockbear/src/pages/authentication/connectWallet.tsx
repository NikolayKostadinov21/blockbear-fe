import { Button } from "@mui/material";
import { ethers } from "ethers";
import { useState } from "react";
import "../authentication/connectWallet.scss";

const ConnectWallet = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [hasMetaMask, setHasMetaMask] = useState(false);
    const [signer, setSigner] = useState(undefined);
    const [currentAccount, setCurrentAccount] = useState();

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const { ethereum } = window;
                console.log(window.ethereum);
                setIsConnected(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum as any);
                setSigner(provider.getSigner() as any);
                console.log(provider.getSigner()._address);
                if (ethereum) {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
                    accounts ? setCurrentAccount(accounts as any) : console.log('error');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setIsConnected(false);
        }
    }

    return (
        <div>
            <div className="connect-to-wallet-container">
                <div className="connect-to-wallet-button">
                    <Button variant="contained" onClick={connect}>Connect with MetaMask</Button>
                </div>
            </div>
        </div>
    );
}

export default ConnectWallet;