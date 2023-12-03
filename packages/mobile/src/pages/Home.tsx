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
  IonButton
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

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
;
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Projects
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton routerLink={`/project-form`}>New Project</IonButton>
        {/* <IonButton expand="block">Block</IonButton> */}
        {/* */}

        <IonList>
          {/* {messages.map(m => <MessageListItem key={m.id} message={m} />)} */}
          {projects.map(p => <ProjectListItem key={p.id} project={p} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
