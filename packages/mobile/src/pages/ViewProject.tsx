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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList
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
            <IonCard style={{ padding: '10px' }}>
              <IonCardHeader>
                <IonCardTitle>{project.ProjectName}</IonCardTitle>
                <IonCardSubtitle style={{ color: getStatusColor(project.status) }}>{getStatus(project.status)}</IonCardSubtitle>
              </IonCardHeader>
              
              <img alt="Silhouette of mountains" src={`https://source.unsplash.com/random/10×5/?${project.Country}`} style={{ padding: '20px' }}/>

              <IonCardHeader>
                <IonCardSubtitle> {project.FullDescription} </IonCardSubtitle>
                <IonCardTitle>OrganizationName</IonCardTitle>
                <IonCardSubtitle>{project.OrganizationName}</IonCardSubtitle>
                <IonCardTitle>ProjectStartDate</IonCardTitle>
                <IonCardSubtitle>{project.ProjectStartDate}</IonCardSubtitle>
                {/* <IonCardTitle>Team: {project.Team.TeamName}</IonCardTitle>
                <IonCardContent>
                  <IonItem>
                    <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
                    <IonLabel className="ion-text-wrap">
                    <h3>
                      {project.ProjectName}
                    </h3>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
                    <IonLabel className="ion-text-wrap">
                    <h3>
                      {project.ProjectName}
                    </h3>
                    </IonLabel>
                  </IonItem>
                </IonCardContent> */}
                <IonCardTitle>FullDescription</IonCardTitle>
                <IonCardSubtitle> {project.FullDescription} </IonCardSubtitle>
                <IonCardTitle>Overview</IonCardTitle>
                <IonCardSubtitle>{project.Overview}</IonCardSubtitle>
                <IonCardTitle>ImpactPlan</IonCardTitle>
                <IonCardSubtitle>{project.ImpactPlan}</IonCardSubtitle>
                <IonCardTitle>ProfitPlan</IonCardTitle>
                <IonCardSubtitle>{project.ProfitPlan}</IonCardSubtitle>
                <IonCardTitle>LogoCID</IonCardTitle>
                <IonCardSubtitle>{project.LogoCID}</IonCardSubtitle>
                <IonCardTitle>ProjectCategory</IonCardTitle>
                <IonCardSubtitle>{project.ProjectCategory}</IonCardSubtitle>
                <IonCardTitle>FundingGoals</IonCardTitle>
                <IonCardSubtitle>{project.FundingGoals}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>

            {/* <div className="ion-padding">
              <img alt="Silhouette of mountains" src={`https://source.unsplash.com/random/10×5/?${project.Country}`} style={{ padding: '20px' }}/>
              <h3>{project.ProjectCategory}</h3>
              <p>{project.FullDescription}</p>
            </div> */}
          </>
        ) : (
          <div>project not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewProject;
