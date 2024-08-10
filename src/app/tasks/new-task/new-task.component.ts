import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tasks } from '../models/tasks.model';
import { TaskService } from '../services/task.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit{

  newTaskElement:Tasks = {} as Tasks;

  tasks:Tasks[] = [];

  lastId:string = '';
  constructor(private _TaskService:TaskService , private router: Router){}


  ngOnInit(){
    this._TaskService.getTasks().subscribe({
      next:(data) => {this.tasks = data; }
    });
  }

  form = new FormGroup({
    id:new FormControl(''),
    date:new FormControl(''),
    task:new FormControl(''),
    taskTitle:new FormControl(''),
  })


  addNewTask(){
    this.newTaskElement.id = this.form.controls.id.value,
    this.newTaskElement.date = this.form.controls.date.value,
    this.newTaskElement.task = this.form.controls.task.value,
    this.newTaskElement.taskTitle = this.form.controls.taskTitle.value

    this._TaskService.addTask(this.newTaskElement).subscribe(data => {console.log(data);
    });

    this.router.navigate(['/Home']);
  }

}

