import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ContextListComponent } from './features/contexts/context-list/context-list.component';
import { ContextDashboardComponent } from './features/contexts/context-dashboard/context-dashboard.component';
import { ContextSearchComponent } from './features/contexts/context-search/context-search.component';
import { ContextMenuComponent } from './features/contexts/context-menu/context-menu.component';
import { ContextFormComponent } from './features/contexts/context-form/context-form.component';
import { EnvironmentListComponent } from './features/environments/environment-list/environment-list.component';
import { EnvironmentDashboardComponent } from './features/environments/environment-dashboard/environment-dashboard.component';
import { EnvironmentSearchComponent } from './features/environments/environment-search/environment-search.component';
import { EnvironmentMenuComponent } from './features/environments/environment-menu/environment-menu.component';
import { EnvironmentFormComponent } from './features/environments/environment-form/environment-form.component';
import { FeatureListComponent } from './features/features/feature-list/feature-list.component';
import { FeatureDashboardComponent } from './features/features/feature-dashboard/feature-dashboard.component';
import { FeatureSearchComponent } from './features/features/feature-search/feature-search.component';
import { FeatureMenuComponent } from './features/features/feature-menu/feature-menu.component';
import { FeatureFormComponent } from './features/features/feature-form/feature-form.component';
import { NumberListComponent } from './features/numbers/number-list/number-list.component';
import { NumberDashboardComponent } from './features/numbers/number-dashboard/number-dashboard.component';
import { NumberSearchComponent } from './features/numbers/number-search/number-search.component';
import { NumberMenuComponent } from './features/numbers/number-menu/number-menu.component';
import { NumberFormComponent } from './features/numbers/number-form/number-form.component';
import { ParameterListComponent } from './features/parameters/parameter-list/parameter-list.component';
import { ParameterDashboardComponent } from './features/parameters/parameter-dashboard/parameter-dashboard.component';
import { ParameterSearchComponent } from './features/parameters/parameter-search/parameter-search.component';
import { ParameterMenuComponent } from './features/parameters/parameter-menu/parameter-menu.component';
import { ParameterFormComponent } from './features/parameters/parameter-form/parameter-form.component';
import { ScenarioListComponent } from './features/scenarios/scenario-list/scenario-list.component';
import { ScenarioDashboardComponent } from './features/scenarios/scenario-dashboard/scenario-dashboard.component';
import { ScenarioSearchComponent } from './features/scenarios/scenario-search/scenario-search.component';
import { ScenarioMenuComponent } from './features/scenarios/scenario-menu/scenario-menu.component';
import { ScenarioFormComponent } from './features/scenarios/scenario-form/scenario-form.component';
import { StepListComponent } from './features/steps/step-list/step-list.component';
import { StepDashboardComponent } from './features/steps/step-dashboard/step-dashboard.component';
import { StepSearchComponent } from './features/steps/step-search/step-search.component';
import { StepMenuComponent } from './features/steps/step-menu/step-menu.component';
import { StepFormComponent } from './features/steps/step-form/step-form.component';
import { TestCaseListComponent } from './features/test-cases/test-case-list/test-case-list.component';
import { TestCaseDashboardComponent } from './features/test-cases/test-case-dashboard/test-case-dashboard.component';
import { TestCaseSearchComponent } from './features/test-cases/test-case-search/test-case-search.component';
import { TestCaseMenuComponent } from './features/test-cases/test-case-menu/test-case-menu.component';
import { TestCaseFormComponent } from './features/test-cases/test-case-form/test-case-form.component';
import { RunListComponent } from './features/runs/run-list/run-list.component';
import { RunDashboardComponent } from './features/runs/run-dashboard/run-dashboard.component';
import { RunSearchComponent } from './features/runs/run-search/run-search.component';
import { RunMenuComponent } from './features/runs/run-menu/run-menu.component';
import { RunSingleFormComponent } from './features/runs/run-single-form/run-single-form.component';
import { RunFormComponent } from './features/runs/run-form/run-form.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { UserDashboardComponent } from './features/users/user-dashboard/user-dashboard.component';
import { UserSearchComponent } from './features/users/user-search/user-search.component';
import { UserMenuComponent } from './features/users/user-menu/user-menu.component';
import { UserFormComponent } from './features/users/user-form/user-form.component';
import { ScheduleListComponent } from './features/schedules/schedule-list/schedule-list.component';
import { ScheduleDashboardComponent } from './features/schedules/schedule-dashboard/schedule-dashboard.component';
import { ScheduleSearchComponent } from './features/schedules/schedule-search/schedule-search.component';
import { ScheduleMenuComponent } from './features/schedules/schedule-menu/schedule-menu.component';
import { ScheduleFormComponent } from './features/schedules/schedule-form/schedule-form.component';
import { Sidenav } from './sidenav/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialExampleModule } from '../material.module';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ScheduleListComponent,
    ScheduleDashboardComponent,
    ScheduleSearchComponent,
    ScheduleMenuComponent,
    ScheduleFormComponent,
    ContextListComponent,
    ContextDashboardComponent,
    ContextSearchComponent,
    ContextMenuComponent,
    ContextFormComponent,
    EnvironmentListComponent,
    EnvironmentDashboardComponent,
    EnvironmentSearchComponent,
    EnvironmentMenuComponent,
    EnvironmentFormComponent,    
    FeatureListComponent,
    FeatureDashboardComponent,
    FeatureSearchComponent,
    FeatureMenuComponent,
    FeatureFormComponent,
    NumberListComponent,
    NumberDashboardComponent,
    NumberSearchComponent,
    NumberMenuComponent,
    NumberFormComponent,
    ParameterListComponent,
    ParameterDashboardComponent,
    ParameterSearchComponent,
    ParameterMenuComponent,
    ParameterFormComponent,
    ScenarioListComponent,
    ScenarioDashboardComponent,
    ScenarioSearchComponent,
    ScenarioMenuComponent,
    ScenarioFormComponent,
    StepListComponent,
    StepDashboardComponent,
    StepSearchComponent,
    StepMenuComponent,
    StepFormComponent,
    TestCaseListComponent,
    TestCaseDashboardComponent,
    TestCaseSearchComponent,
    TestCaseMenuComponent,
    TestCaseFormComponent,
    RunListComponent,
    RunDashboardComponent,
    RunSearchComponent,
    RunMenuComponent,
    RunFormComponent,
    RunSingleFormComponent,
    UserListComponent,
    UserDashboardComponent,
    UserSearchComponent,
    UserMenuComponent,
    UserFormComponent,
    Sidenav  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
