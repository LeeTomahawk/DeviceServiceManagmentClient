import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import { WorkplaceInfoComponent } from './workplace-list/workplace-info/workplace-info.component';
import { WorkplaceUpdateComponent } from './workplace-list/workplace-update/workplace-update.component';
import { WorkplaceAddComponent } from './workplace-list/workplace-add/workplace-add.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentDeleteComponent } from './equipment-list/equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './equipment-list/equipment-update/equipment-update.component';
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
    WorkplaceInfoComponent,
    WorkplaceUpdateComponent,
    WorkplaceAddComponent,
    EquipmentListComponent,
    EquipmentDeleteComponent,
    EquipmentUpdateComponent,
  ],
  imports: [
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'tasks-list', component: TasksListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'workplace-list', component: WorkplaceListComponent },
      { path: 'equipment-list', component: EquipmentListComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
