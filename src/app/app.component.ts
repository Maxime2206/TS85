import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        <li *ngFor="let user of users">{{ user.name }} ({{ user.age }} ans)</li>
      </ul>
      <button (click)="addUser()">Ajouter un utilisateur</button>
    </div>
  `,
  styles: []
})
export class AppComponent {
  users: User[] = [];

  // Liste de prénoms et de noms de famille pour générer des noms aléatoires
  firstNames: string[] = ['Alice', 'John', 'Bob', 'Charlie', 'Diana', 'Eve'];
  lastNames: string[] = ['Cooper', 'Smith', 'Johnson', 'Williams', 'Brown', 'Taylor'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  // Fonction pour générer un nom aléatoire
  generateRandomName(): string {
    const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
    return `${firstName} ${lastName}`;
  }

  addUser() {
    // Générer un nom aléatoire et un âge aléatoire entre 18 et 60
    const newUser: User = {
      name: this.generateRandomName(),
      age: Math.floor(Math.random() * (60 - 18 + 1)) + 18 // âge aléatoire entre 18 et 60
    };
    this.userService.addUser(newUser);
    this.users = this.userService.getUsers();
  }
}
