import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}
export const CONTRACT_ADDRESS = [];
export const ABI: JSON[] = [];
