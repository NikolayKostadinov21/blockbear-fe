const ethers = require("ethers");
import { useState } from "react";
import { ABI, CONTRACT_ADDRESS }  from "../../data/constants";

export default function ConnectToWallet() {

    //const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const [isConnected, setIsConnected] = useState(false);
    const [hasMetaMask, setHasMetaMask] = useState(false);
    const [signer, setSigner] = useState(undefined);

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                setIsConnected(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setSigner(provider.getSigner());
            } catch (error) {
                console.log(error);
            }
        } else {
            setIsConnected(false);
        }
    }
}
