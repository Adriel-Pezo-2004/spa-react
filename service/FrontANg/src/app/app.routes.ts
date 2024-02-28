import { Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { IssueComponent } from './issue/issue.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  { path: 'date', component: DateComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'service', component: ServiceComponent },
];
