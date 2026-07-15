import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input() name2?: string | undefined;
}
