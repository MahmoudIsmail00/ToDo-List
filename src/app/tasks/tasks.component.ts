import { Component, inject, OnInit, } from '@angular/core';
import { TaskService } from './services/task.service';
import { TaskComponent } from "./task/task.component";
import { Tasks } from './models/tasks.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{


  tasks:Tasks[] = [];

  tasksServ = inject(TaskService);

  ngOnInit(): void {
    this.tasksServ.getTasks().subscribe({
      next:(data) => this.tasks = data
    });


  }
  ngAfterViewChecked():void{
    this.tasksServ.getTasks().subscribe({
      next:(data) => this.tasks = data
    });
  }
}
