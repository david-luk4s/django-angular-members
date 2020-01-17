import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  constructor( private api: ApiService){
    this.getMembers();
  }

  members = [];
  select_member = [];

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
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.select_member = data;
      },
      error => {
        console.log('Error na api', error.message);
      }
    );
  };
}
