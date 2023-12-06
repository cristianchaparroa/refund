import MessageListItem from '../components/MessageListItem';
import ProjectListItem from '../components/ProjectListItem';
import { useState, useEffect } from 'react';
import { Message, getMessages } from '../data/messages';
import { Project, getProjects } from '../data/projects';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFooter
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './Home.css';
import { useParams } from 'react-router';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home: React.FC = () => {

   return (
    <IonPage id="home-page">
      <IonContent className="ion-padding">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
      </IonContent>

       <IonFooter>
        <IonToolbar className="connect-outer">
            <div className="connect-inner">
                <ConnectButton/>
            </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
