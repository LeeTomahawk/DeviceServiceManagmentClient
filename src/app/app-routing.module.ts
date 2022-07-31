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
import { AuthGuard } from './auth/auth.guard';
import { ForbidenComponent } from './forbiden/forbiden.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'tasks-list',
    component: TasksListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN', 'EMPLOYEE'] },
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN', 'EMPLOYEE'] },
  },
  {
    path: 'workplace-list',
    component: WorkplaceListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'workplace-details/:id',
    component: WorkplaceDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'equipment-list',
    component: EquipmentListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'equipment-add',
    component: EquipmentAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'workplace-add',
    component: WorkplaceAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'task-add',
    component: TaskAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN', 'EMPLOYEE'] },
  },
  {
    path: 'tasks-user',
    component: TaskUserTaskComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN', 'EMPLOYEE'] },
  },
  {
    path: 'tasks-available',
    component: TaskAvailableTaskComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'tasks-approval',
    component: TaskApprovalComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  {
    path: 'client-list',
    component: ClientListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLOYEE', 'MANAGER', 'ADMIN'] },
  },
  {
    path: 'manager-list',
    component: ManagerListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['MANAGER', 'ADMIN'] },
  },
  { path: 'forbidden', component: ForbidenComponent },

  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
