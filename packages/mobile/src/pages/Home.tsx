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
      <IonContent fullscreen>
        Home   
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
