import MessageListItem from '../components/MessageListItem';
import ProjectListItem from '../components/ProjectListItem';
import { useState } from 'react';
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
  useIonViewWillEnter,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './Home.css';
import { useParams } from 'react-router';


import ConnectWallet from '../components/ConnectWallet';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [isConnected, setIsConnected] = useState<string>();
  const connectProps = {
        label:'Connect Wallet',
        setIsConnected:setIsConnected ,
        isConnected: isConnected,
  }

  const params = useParams<{ rol: string }>();

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);

    const pjts = getProjects();
    setProjects(pjts);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects {params.rol}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Projects {params.rol}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <ConnectWallet {...connectProps}/> */}
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton routerLink={`/project-form`}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonList>
          {/* {messages.map(m => <MessageListItem key={m.id} message={m} />)} */}
          {/* {params.rol == "proponent"? <> {projects.map(p => <ProjectListItem key={p.id} project={p} />) }</> : null }
          {params.rol == "inversionist"? <> {projects.map(p => <ProjectListItem key={p.id} project={p} />) }</> : null*/ }
          {params.rol == "validator"? <> {messages.map(m => <MessageListItem key={m.id} message={m} />) }</> : projects.map(p => <ProjectListItem key={p.id} project={p} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
