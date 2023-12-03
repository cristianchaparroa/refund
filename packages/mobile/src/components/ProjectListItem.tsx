import {
  IonItem,
  IonLabel,
  IonNote,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
  } from '@ionic/react';
import { Project } from '../data/projects';
import './ProjectListItem.css';
import { getStatus, getStatusColor } from '../data/constants';

interface ProjectListItemProps {
  project: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  return (
    <IonCard routerLink={`/project/${project.id}`} style={{ padding: '10px' }}>
      <img alt="Silhouette of mountains" src={`https://source.unsplash.com/random/10×5/?${project.Country}`} style={{ padding: '20px' }}/>
      <IonCardHeader>
        <IonCardTitle>{project.Country}, {project.ProjectName}</IonCardTitle>
        <IonCardSubtitle style={{ color: getStatusColor(project.status) }}>{getStatus(project.status)}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{project.FullDescription}</IonCardContent>
    </IonCard>
  );
};

export default ProjectListItem;
