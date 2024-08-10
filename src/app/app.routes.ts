import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

export const routes: Routes = [

  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:TasksComponent},
  {path:'NewTask',component:NewTaskComponent},
  {path: 'EditTask/:id',component:EditTaskComponent},
];
