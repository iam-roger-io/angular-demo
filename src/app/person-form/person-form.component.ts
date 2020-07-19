import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Person } from '../model/person';
import { Country } from '../model/country';

@Component({
  selector: 'app-user-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class UserFormComponent implements OnInit { 

  person: Person;
  countrys: Country[] = [
  
    {id: 'BR', name: 'Brazil'},
    {id: 'USA', name: 'United States'}

  ];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.save(this.person).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
