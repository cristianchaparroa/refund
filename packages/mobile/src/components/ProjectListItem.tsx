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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default ProjectListItem;
