import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonDatetime, IonTextarea } from '@ionic/react';
import  WalletService  from '../services/wallet';
import ProjectsService from '../services/projects';

const ProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [country, setCountry] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [integrants, setIntegrants] = useState([]);
  const [projectStartDate, setProjectStartDate] = useState('');
  const [overview, setOverview] = useState('');
  const [impactPlan, setImpactPlan] = useState('');
  const [profitPlan, setProfitPlan] = useState('');
  const [logoCID, setLogoCID] = useState('');
  const [projectCategory, setProjectCategory] = useState([]);
  const [fundingGoals, setFundingGoals] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [status, setStatus] = useState(0);

  const walletService = new WalletService();
  const projectsService = new ProjectsService();

  const handleSubmit = async (event: any) => {
    event.preventDefault();


    const formData = {
      ProjectName: projectName,
      Country: country,
      OrganizationName: organizationName,
      Team: {
        TeamName: teamName,
        Integrants: integrants
      },
      ProjectStartDate: projectStartDate,
      Overview: overview,
      ImpactPlan: impactPlan,
      ProfitPlan: profitPlan,
      LogoCID: logoCID,
      ProjectCategory: projectCategory,
      FundingGoals: fundingGoals,
      FullDescription: fullDescription,
      status: status,
      id: 0
    };
    console.log(formData);
    const signer = await walletService.getSigner();
    console.log(signer);

    await projectsService.createProject(signer);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Project Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonLabel>Project Name:</IonLabel>
          <IonInput value={projectName} onIonChange={e => setProjectName(e.detail.value!)}></IonInput>
          {/* Add more fields here */}
          <IonLabel>Country:</IonLabel>
          <IonInput value={country} onIonChange={e => setCountry(e.detail.value!)}></IonInput>
          <IonLabel>Organization Name:</IonLabel>
          <IonInput value={organizationName} onIonChange={e => setOrganizationName(e.detail.value!)}></IonInput>
          <IonLabel>Team Name:</IonLabel>
          <IonInput value={teamName} onIonChange={e => setTeamName(e.detail.value!)}></IonInput>
          {/* You would need to create a separate form or modal for adding team members */}
          <IonLabel>Project Start Date:</IonLabel>
          <IonDatetime value={projectStartDate} onIonChange={e => setProjectStartDate(e.detail.value!.toString())}></IonDatetime>
          <IonLabel>Overview:</IonLabel>
          <IonTextarea value={overview} onIonChange={e => setOverview(e.detail.value!)}></IonTextarea>
          <IonLabel>Impact Plan:</IonLabel>
          <IonTextarea value={impactPlan} onIonChange={e => setImpactPlan(e.detail.value!)}></IonTextarea>
          <IonLabel>Profit Plan:</IonLabel>
          <IonTextarea value={profitPlan} onIonChange={e => setProfitPlan(e.detail.value!)}></IonTextarea>
          <IonLabel>Logo CID:</IonLabel>
          <IonInput value={logoCID} onIonChange={e => setLogoCID(e.detail.value!)}></IonInput>
          {/* You would need to create a separate form or modal for adding project categories */}
          <IonLabel>Funding Goals:</IonLabel>
          <IonTextarea value={fundingGoals} onIonChange={e => setFundingGoals(e.detail.value!)}></IonTextarea>
          <IonLabel>Full Description:</IonLabel>
          <IonTextarea value={fullDescription} onIonChange={e => setFullDescription(e.detail.value!)}></IonTextarea>
          <IonLabel>Status:</IonLabel>
          <IonInput value={status} onIonChange={e => setStatus(Number(e.detail.value!))}></IonInput>
          <IonButton expand="full" type="submit">Submit</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default ProjectForm;
