import { Component, Input } from '@angular/core';
import { Tasks } from '../models/tasks.model';
import { TaskService } from '../services/task.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!:Tasks;

  constructor(private _TaskService:TaskService, private router: Router) {}

    deleteTask(taskId: string|null) {
      // const dialogRef = this.dialog.open(ConfirmationDialogComponent);

      const dialogRef = confirm("Do you want to delete this task?");

        if (dialogRef) {
          this._TaskService.DeleteTask(Number(taskId)).subscribe((data) => console.log(data));
        }

      this.router.navigate(['/Home']);
    }
}
