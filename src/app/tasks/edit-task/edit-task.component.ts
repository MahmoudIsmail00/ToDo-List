import { Component, inject, OnInit } from '@angular/core';
import { Tasks } from '../models/tasks.model';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  taskId:number = 0;

  TaskElement:Tasks = {} as Tasks;

  UpdatedElement:Tasks = {} as Tasks ;
  // tasks:Tasks[] = [];

  tasksServ = inject(TaskService);


  constructor( private route: ActivatedRoute, private router: Router){}


  ngOnInit(){

    this.taskId = +this.route.snapshot.paramMap.get('id')!;

    console.log(this.taskId);

    this.tasksServ.getTask(this.taskId).subscribe({
      next:(data) => this.TaskElement = data
    });
  }


  ngAfterViewChecked():void{
    console.log(this.TaskElement);
  }



  EditTask(){
    this.UpdatedElement.id =  this.TaskElement.id
    this.UpdatedElement.date = this.TaskElement.date,
    this.UpdatedElement.task = this.TaskElement.task,
    this.UpdatedElement.taskTitle = this.TaskElement.taskTitle

    if(this.TaskElement == null){
      alert("task not found");
      this.router.navigate(['/Home']);
    }else{
      this.tasksServ.UpdateTask(this.UpdatedElement , this.taskId).subscribe(data => {console.log(data);
      });

      this.router.navigate(['/Home']);
    }

  }
}
