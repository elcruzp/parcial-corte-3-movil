import {
  Redirect,
  Route,
  useLocation
} from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Login from "./pages/start/login";

/* Ionic Core CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";
import Registro from "./pages/start/registro";

setupIonicReact();

const pointsRoutes: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* Rutas sin Tabs */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Registro} />
      <Route exact path="/PointsListView" component={pointsListView} />
      <Route exact path="/PointDetailView" component={ointDetailView} />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      </IonReactRouter>
    </IonApp>
  );
};



export default pointsRoutes;
