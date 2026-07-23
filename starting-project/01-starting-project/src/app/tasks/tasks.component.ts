import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { dummyTasks } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Input() name2?: string | undefined;

  tasks = dummyTasks;

  get selectedUserTasks(){
    console.log(this.tasks);
    return this.tasks.filter((task: any) => task.userId === this.userId);
  }
}
