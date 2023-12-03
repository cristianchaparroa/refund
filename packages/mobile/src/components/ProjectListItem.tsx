import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Project } from '../data/projects';
import './ProjectListItem.css';
import { getStatus, getStatusColor } from '../data/constants';

interface ProjectListItemProps {
  project: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  return (
    <IonItem routerLink={`/project/${project.id}`} detail={false}>
      <div slot="start" className="dot"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {project.title}
          <span className="date">
            <IonNote style={{ color: getStatusColor(project.status) }}>{getStatus(project.status)}</IonNote>
          </span>
        </h2>
        {/* <h3>{project.subject}</h3> */}
        <p>{project.description}</p>
      </IonLabel>
    </IonItem>
  );
};

export default ProjectListItem;
