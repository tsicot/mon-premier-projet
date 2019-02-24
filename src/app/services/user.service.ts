import {User} from '../Models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  userSubject = new Subject<User[]>();
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.smith@test.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder',
        'dégustation de café'
      ]
    }
  ];

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
