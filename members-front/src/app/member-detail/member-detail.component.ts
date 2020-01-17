import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { error } from 'protractor';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  select_member = [];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.loadMember();
  }

  loadMember = () => {
    this.api.getMember(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.select_member = data;
      },
      error => {
        console.log('Error in api', error.message);
      }
    );
  }

}
