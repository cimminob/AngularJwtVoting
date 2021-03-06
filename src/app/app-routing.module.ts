import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

import { ViewElectionsComponent } from './election/view-elections/view-elections.component';
import { CreateElectionComponent } from './election/create-election/create-election.component';
import { AddCandidateComponent } from './candidate/add-candidate/add-candidate.component';
import { VoteComponent } from './election/vote/vote.component';
import { ResultsComponent } from './election/results/results.component';
import { ViewCandidatesComponent } from './candidate/view-candidates/view-candidates.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'elections/view',
        component: ViewElectionsComponent
    },
    {
        path: 'elections/add',
        component: CreateElectionComponent
    },
    {
        path: 'candidates/add',
        component: AddCandidateComponent
    },
    {
        path: 'vote',
        component: VoteComponent
    },
    {
        path: 'results',
        component: ResultsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'candidates/view',
        component: ViewCandidatesComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
    