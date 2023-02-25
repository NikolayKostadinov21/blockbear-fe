import { Button } from "@mui/material";
import "../authentication/connectWallet.scss";

const ConnectWallet = () => {
    return (
        <div>
            <div className="connect-to-wallet-container">
                <div className="connect-to-wallet-button">
                    <Button variant="contained">Connect with MetaMask</Button>
                </div>
            </div>
        </div>
    );
}

export default ConnectWallet;