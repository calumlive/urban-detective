import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { MissionSelection } from './screens/mission-selection/mission-selection';
import { MissionOverview } from './screens/mission-overview/mission-overview';
import { DeploymentZone } from './screens/deployment-zone/deployment-zone';
import { ClueZone } from './screens/clue-zone/clue-zone';
import { SuspectElimination } from './screens/suspect-elimination/suspect-elimination';
import { FinalReveal } from './screens/final-reveal/final-reveal';
import { Success } from './screens/success/success';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'missions', component: MissionSelection },
    { path: 'overview', component: MissionOverview },
    { path: 'deployment', component: DeploymentZone },
    { path: 'clue', component: ClueZone },
    { path: 'elimination', component: SuspectElimination },
    { path: 'reveal', component: FinalReveal },
    { path: 'success', component: Success },
];
