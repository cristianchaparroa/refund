import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Web3Modal - WalletConnect */
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'
import {
  celo,
  celoAlfajores
} from "wagmi/chains";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Navbar from './components/Navbar';

setupIonicReact();

const projectId = '7094e47005c270463e66e639f5cfc841'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, celo, celoAlfajores]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({ wagmiConfig, projectId, chains })

const App: React.FC = () => (
  <WagmiConfig config={wagmiConfig}>
  <IonApp>
    <IonReactRouter>
    
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/message/:id">
           <ViewMessage />
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
    <Navbar />

  </IonApp>
  </WagmiConfig>
);

export default App;
