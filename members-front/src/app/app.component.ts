import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  constructor( private api: ApiService, private router: Router){
    this.getMembers();
  }

  members = [{id: '', name: '', surname: '', phone: ''}];
  select_member = {id: '', name: '', surname: '', email: '', address: '', phone: '', photo: ''};

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log('Error na aplication', error.message);
      }
    );
  };

  clickedMember = (member) => {
    this.router.navigate(['member-detail', member.id]);
  };

  clickNewMember = () => {
    this.router.navigate(['new-member']);
  }
}
