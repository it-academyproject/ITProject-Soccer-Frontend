import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './views/landing-view/sign-up/sign-up.component';

const routes: Routes = [{ path: 'sign-up', component: SignUpComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  //[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
