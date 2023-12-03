import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonMenu, IonHeader, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuToggle, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';
import ViewProject from './pages/ViewProject';
import ViewNewProject from './pages/ViewNewProject';
import { personCircle, search } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  
  <IonApp>
    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Choose your role</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            {/* <IonButton>Click to close the menu</IonButton> */}
            <IonButton expand="full" fill='clear' routerLink={`/home/proponent`}>Proponent</IonButton>
            <IonButton expand="full" fill='clear' routerLink={`/home/inversionist`}>Inversionist</IonButton>
            <IonButton expand="full" fill='clear' routerLink={`/home/validator`}>Validator</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/" exact={true}>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact={true}>
                <Home />
              </Route>
              <Route path="/home/:rol" exact={true}>
                <Home />
              </Route>
              <Route path="/message/:id">
                <ViewMessage />
              </Route>
              <Route path="/project/:id">
                <ViewProject />
              </Route>
              <Route path="/project-form">
                <ViewNewProject />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonContent>
      </IonPage>
  </IonApp>
);

export default App;
