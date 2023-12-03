import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, 
    IonLabel, IonDatetime, IonTextarea, IonAlert } from '@ionic/react';
import  WalletService  from '../services/wallet';
import ProjectsService from '../services/projects';

const ProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [country, setCountry] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [integrants, setIntegrants] = useState([]);
  const [overview, setOverview] = useState('');
  const [impactPlan, setImpactPlan] = useState('');
  const [profitPlan, setProfitPlan] = useState('');
  const [logoCID, setLogoCID] = useState('');
  const [projectCategory, setProjectCategory] = useState([]);
  const [fundingGoals, setFundingGoals] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [status, setStatus] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState('');

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

    const tx= await projectsService.createProject(signer, projectName);
    setHash(tx.hash);
    setIsOpen(true);
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
          {/*
          <IonInput value={organizationName} onIonChange={e => setOrganizationName(e.detail.value!)}></IonInput>
           <IonLabel>Organization Name:</IonLabel>

           <IonLabel>Country:</IonLabel>
           <IonInput value={country} onIonChange={e => setCountry(e.detail.value!)}></IonInput>
          <IonLabel>Team Name:</IonLabel>
          <IonInput value={teamName} onIonChange={e => setTeamName(e.detail.value!)}></IonInput>
          <IonLabel>Project Start Date:</IonLabel>
          <IonLabel>Overview:</IonLabel>
          <IonTextarea value={overview} onIonChange={e => setOverview(e.detail.value!)}></IonTextarea>
          <IonLabel>Impact Plan:</IonLabel>
          <IonTextarea value={impactPlan} onIonChange={e => setImpactPlan(e.detail.value!)}></IonTextarea>
          <IonLabel>Profit Plan:</IonLabel>
          <IonTextarea value={profitPlan} onIonChange={e => setProfitPlan(e.detail.value!)}></IonTextarea>
          <IonLabel>Logo CID:</IonLabel>
          <IonInput value={logoCID} onIonChange={e => setLogoCID(e.detail.value!)}></IonInput>
          <IonLabel>Funding Goals:</IonLabel>
          <IonTextarea value={fundingGoals} onIonChange={e => setFundingGoals(e.detail.value!)}></IonTextarea>
          <IonLabel>Full Description:</IonLabel>
          <IonTextarea value={fullDescription} onIonChange={e => setFullDescription(e.detail.value!)}></IonTextarea>
          <IonLabel>Status:</IonLabel>
          <IonInput value={status} onIonChange={e => setStatus(Number(e.detail.value!))}></IonInput>
         
          */}
          <IonButton expand="full" type="submit">Submit</IonButton>
        </form>


        <IonAlert
            isOpen={isOpen}
            header="Project created succussfully"
            message={`The transaction hash:${hash}`}
            buttons={['close']}
            onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default ProjectForm;
