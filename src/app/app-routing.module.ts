import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkplaceListComponent } from './workplace-list/workplace-list.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentAddComponent } from './equipment-list/equipment-add/equipment-add.component';
import { WorkplaceAddComponent } from './workplace-list/workplace-add/workplace-add.component';
import { EmployeeAddComponent } from './employee-list/employee-add/employee-add.component';
import { TaskAddComponent } from './tasks-list/task-add/task-add.component';
import { TaskUserTaskComponent } from './tasks-list/task-user-task/task-user-task.component';
import { TaskAvailableTaskComponent } from './tasks-list/task-available-task/task-available-task.component';
import { TaskApprovalComponent } from './tasks-list/task-approval/task-approval.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { WorkplaceDetailsComponent } from './workplace-list/workplace-details/workplace-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'tasks-list', component: TasksListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'workplace-list', component: WorkplaceListComponent },
  { path: 'workplace-details/:id', component: WorkplaceDetailsComponent },
  { path: 'equipment-list', component: EquipmentListComponent },
  { path: 'equipment-add', component: EquipmentAddComponent },
  { path: 'workplace-add', component: WorkplaceAddComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'task-add', component: TaskAddComponent },
  { path: 'tasks-user', component: TaskUserTaskComponent },
  { path: 'tasks-available', component: TaskAvailableTaskComponent },
  { path: 'tasks-approval', component: TaskApprovalComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'manager-list', component: ManagerListComponent },

  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
