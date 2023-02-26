import { ethers } from "ethers";
import { useState } from "react";
import "../authentication/connectWallet.scss";
import { CONTRACT_ADDRESS, ABI } from "../../data/constants";
import MetaMaskLogo from "../../assets/metamask_logo.png";
import "../../assets/styles.scss";

const ConnectWallet = () => {

    const [isConnected, setIsConnected] = useState(false);
    const [hasMetaMask, setHasMetaMask] = useState(false);
    const [signer, setSigner] = useState(undefined);
    const [currentAccount, setCurrentAccount] = useState();

    const getAccountManagerContract = () => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum as any);
        const contractSigner = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, contractSigner);
        return contract;
    }

    async function connectWithMetaMask() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const { ethereum } = window;
                setIsConnected(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum as any);
                setSigner(provider.getSigner() as any);
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

    async function signUp(name: string) {
        await getAccountManagerContract().SignUp(name);
    }

    async function getAllAccounts() {
        await getAccountManagerContract().GetAccounts();
    }

    async function execute() {
        console.log(getAccountManagerContract());
        const result = await getAccountManagerContract().AddNumbers(10, 290);
        console.log(result);
        const signup = await getAccountManagerContract().GetAccounts();
        console.log(signup);
    }

    return (
        <div>
            <div className="connect-to-wallet-container">
                <div className="wrapper">
                    <div className="metamask-logo-container">
                        <img className="metamask-logo-image" src={MetaMaskLogo}/>
                    </div>
                    <div>
                        <button className="connect-to-wallet-button" onClick={connectWithMetaMask}>Connect with MetaMask</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectWallet;