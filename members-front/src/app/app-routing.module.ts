import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { NewMemberComponent } from './new-member/new-member.component';


const routes: Routes = [
  {path: 'member-detail/:id', component: MemberDetailComponent},
  {path: 'new-member', component: NewMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingMemberDetail = [MemberDetailComponent, NewMemberComponent]
