import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { error } from 'protractor';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  select_member = [];
  select_id;
  constructor(
      private route: ActivatedRoute,
      private api: ApiService,
      private router: Router,
      private appComponent: AppComponent) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.select_id = id;
      this.loadMember(id);
    });
  }

  loadMember = (id) => {
    this.api.getMember(id).subscribe(
      data => {
        this.select_member = data;
      },
      error => {
        console.log('Error in api', error.message);
      }
    );
  };

  updateMember = () => {
    this.api.update(this.select_member).subscribe(
      data => {
        this.select_member = data;
      },
      error => {
        console.log('Error in api', error.message);
      }
    );
  };

  deleteMember = () => {
    this.api.deleteMember(this.select_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((el, i) => {
          if(el.id == this.select_id)
            index = i;
        });
        this.appComponent.members.splice(index, 1);
        this.router.navigate(['member-detail']);
      },
      error => {
        console.log('Not deleter user', error.message);
      }
    );
  };

  newMember = () => {
      this.router.navigate(['new-member']);
  };

}
