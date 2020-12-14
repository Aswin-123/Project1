import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home.component';
import { TaskMasterComponent } from './task-master/task-master.component';
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { NotFoundComponent } from './not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountModule } from './account/account.module';
import { HttpAuthInterceptor } from './Interseptor/http-auth.interceptor';
import { AuthGuard } from './Security/auth.guard';
import { DatePipe } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component : LoginComponent,
  },
  {
    path: 'Register',
    component : RegisterComponent,
  },
  {
    path: 'Home',
    component : HomeComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        data: {routeAccess: 'canAccessDashboard'},
        loadChildren: () =>
        import('./dash-board/dash-board.module').then(
          (u) => u.DashBoardModule
          ),
      },
      {
        path: 'todo',
        canActivateChild: [AuthGuard],
        data: {routeAccess: 'canAccessTODO'},
        loadChildren: () =>
        import('./todo/todo.module').then(
          (u) => u.TodoModule
          ),
      },

      {
        path: 'task-entry',
        canActivateChild: [AuthGuard],
        data: {routeAccess: 'canAccessTODO'},
        loadChildren: () =>
        import('./task-entry/task-entry.module').then(
          (u) => u.TaskEntryModule
          ),
      },
    ]
  },
  {
    path: '**',
    component : NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskMasterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    AccountModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthInterceptor,
    multi: true
  },
  DatePipe,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
