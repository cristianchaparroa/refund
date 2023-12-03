import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import { Project, getProject } from '../data/projects';
import { getStatus, getStatusColor } from '../data/constants';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewProject.css';

function ViewProject() {
  const [project, setProject] = useState<Project>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const pjt = getProject(parseInt(params.id, 10));
    setProject(pjt);
  });

  return (
    <IonPage id="view-project-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Projects" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {project ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {project.title}
                  <span className="date">
                    <IonNote style={{ color: getStatusColor(project.status) }}>{getStatus(project.status)}</IonNote>
                  </span>
                </h2>
                {/* <h3>
                  To: <IonNote>Me</IonNote>
                </h3> */}
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              {/* <h1>{project.subject}</h1> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : (
          <div>project not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewProject;
