import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { arbitrum, celo, celoAlfajores, mainnet } from "viem/chains";
import './Navbar.css'

const projectId = "7094e47005c270463e66e639f5cfc841";
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, celo, celoAlfajores];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });
createWeb3Modal({ wagmiConfig, projectId, chains });

const Navbar = () => {
  return (
    <div>
      <li className="navbar">
        <w3m-button />
      </li>
    </div>
  );
};

export default Navbar;