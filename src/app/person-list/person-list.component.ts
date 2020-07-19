import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class UserListComponent implements OnInit {

  people: Person[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.people = data;
    });
  }
}
