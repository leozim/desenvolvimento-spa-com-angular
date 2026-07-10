import { Component, Input, input /*, computed, signal*/ } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  avatar = input();
  name = input();

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(user: any): void {
    console.log('User selected:', user);
  }
//  selectedUser = signal(DUMMY_USERS[randomIndex]);
//  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

//  get imagePath(): string {
//     return `assets/users/${this.selectedUser.avatar}`;
    
//  }

//  onSelectUser(user: any): void {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);

//     console.log('User selected:', user);
//  }
//  onSelectUser(user: any): void {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//     console.log('User selected:', user);
//  }
}
