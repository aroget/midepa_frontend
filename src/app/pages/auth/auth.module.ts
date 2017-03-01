import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule, ReactiveFormsModule ],
  providers: [ AuthService ],
})
export class AuthModule {}
