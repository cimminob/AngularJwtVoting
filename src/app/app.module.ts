import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { CreateElectionComponent } from './election/create-election/create-election.component';
import { ViewElectionsComponent } from './election/view-elections/view-elections.component';
import { MessageComponent } from './message/message.component';
import { AddCandidateComponent } from './candidate/add-candidate/add-candidate.component';
import { ViewCandidatesComponent } from './candidate/view-candidates/view-candidates.component';
import { VoteComponent } from './election/vote/vote.component';
import { VoteSelectedElectionComponent } from './election/vote-selected-election/vote-selected-election.component';
import { VoteChildComponent } from './election/vote-child/vote-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,

    CreateElectionComponent,
    ViewElectionsComponent,
    MessageComponent,
    AddCandidateComponent,
    ViewCandidatesComponent,
    VoteComponent,
    VoteSelectedElectionComponent,
    VoteChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
