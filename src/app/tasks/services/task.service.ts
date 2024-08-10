import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  apiUrl:string = 'http://localhost:3000/tasks/';

  getTask(id:number):Observable<Tasks>{
    return this.httpClient.get<Tasks>(this.apiUrl +id);
  }
  getTasks():Observable<Tasks[]>{
    return this.httpClient.get<Tasks[]>(this.apiUrl);
  }

  addTask(data:Tasks):Observable<Tasks>{
    return this.httpClient.post<Tasks>(this.apiUrl,data);
  }

  UpdateTask(data:Tasks, id:number):Observable<Tasks>{
    return this.httpClient.put<Tasks>(this.apiUrl +id, data);
  }

  DeleteTask(id:number):Observable<Tasks>{
    return this.httpClient.delete<Tasks>(this.apiUrl+id);
  }
}
