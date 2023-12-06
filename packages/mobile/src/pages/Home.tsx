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
  IonCardContent,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './Home.css';
import { useParams } from 'react-router';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const backgroundImg = "/regen-fund-bg.jpeg";

const Home: React.FC = () => {

   return (
    <IonPage id="home-page">
      <IonContent className="ion-padding">
          <img src={backgroundImg}/>
          <IonCardContent>
          Simplificamos la financiación sostenible. Unificamos crowdfunding, créditos sociales y liquid staking en un solo espacio, eliminando la necesidad de saltar entre múltiples plataformas.
          </IonCardContent>

          <div className="connect-outer">
            <div className="connect-inner">
                <ConnectButton />
            </div>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
