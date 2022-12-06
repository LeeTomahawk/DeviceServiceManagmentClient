import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './template/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskInfoComponent } from './tasks-list/task-info/task-info.component';
import { TaskUpdateComponent } from './tasks-list/task-update/task-update.component';
import { TaskDeleteComponent } from './tasks-list/task-delete/task-delete.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { WorkplaceListComponent } from './workplace-list/workplace-list.component';
import { WorkplaceDeleteComponent } from './workplace-list/workplace-delete/workplace-delete.component';
import { WorkplaceUpdateComponent } from './workplace-list/workplace-update/workplace-update.component';
import { WorkplaceAddComponent } from './workplace-list/workplace-add/workplace-add.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentDeleteComponent } from './equipment-list/equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './equipment-list/equipment-update/equipment-update.component';
import { EquipmentAddComponent } from './equipment-list/equipment-add/equipment-add.component';
import { TaskAddComponent } from './tasks-list/task-add/task-add.component';
import { EmployeeAddComponent } from './employee-list/employee-add/employee-add.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { TaskUserTaskComponent } from './tasks-list/task-user-task/task-user-task.component';
import { TaskAvailableTaskComponent } from './tasks-list/task-available-task/task-available-task.component';
import { TaskAssignComponent } from './tasks-list/task-available-task/task-assign/task-assign.component';
import { TaskApprovalComponent } from './tasks-list/task-approval/task-approval.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientInfoComponent } from './client-list/client-info/client-info.component';
import { ClientUpdateComponent } from './client-list/client-update/client-update.component';
import { ClientTasksComponent } from './client-list/client-tasks/client-tasks.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { WorkplaceDetailsComponent } from './workplace-list/workplace-details/workplace-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkplaceAddEquipmentComponent } from './workplace-list/workplace-details/workplace-add-equipment/workplace-add-equipment.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { ClientAddComponent } from './client-list/client-add/client-add.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WorklplaceAddEmployeeComponent } from './workplace-list/workplace-details/worklplace-add-employee/worklplace-add-employee.component';
import { ManagerAddComponent } from './manager-list/manager-add/manager-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EmployeeListComponent,
    TasksListComponent,
    LoginComponent,
    TaskInfoComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    WorkplaceListComponent,
    WorkplaceDeleteComponent,
    WorkplaceUpdateComponent,
    WorkplaceAddComponent,
    EquipmentListComponent,
    EquipmentDeleteComponent,
    EquipmentUpdateComponent,
    EquipmentAddComponent,
    TaskAddComponent,
    EmployeeAddComponent,
    WorkplaceAddEquipmentComponent,
    TaskUserTaskComponent,
    TaskAvailableTaskComponent,
    TaskAssignComponent,
    TaskApprovalComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientUpdateComponent,
    ClientTasksComponent,
    ManagerListComponent,
    WorkplaceDetailsComponent,
    NotFoundComponent,
    ForbidenComponent,
    HeaderComponent,
    FooterComponent,
    ClientAddComponent,
    WorklplaceAddEmployeeComponent,
    ManagerAddComponent,
  ],
  imports: [
    MatTooltipModule,
    MatExpansionModule,
    MatSortModule,
    MatMenuModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
