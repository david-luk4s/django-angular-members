import { Component, OnInit } from '@angular/core';
import { ApiService } from '../member-detail/api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member = {};

  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  save = () => {
    this.api.save(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
      },
      error => {
        console.log('Error in api', error.message);
      }
    );
  };
}
