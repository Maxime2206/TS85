// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 }
  ];

  // Retourner tous les utilisateurs
  getUsers(): User[] {
    return this.users;
  }

  // Ajouter un utilisateur
  addUser(user: User): void {
    this.users.push(user);
  }
}
