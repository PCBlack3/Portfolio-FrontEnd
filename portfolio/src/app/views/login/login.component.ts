import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string = ''
  password: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({

      })
    })
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  sendLogin(){
    if (this.email =="PabloCabrera@ArgentinaPrograma.com" && this.password == "admin123"){
      this.router.navigate(['/portfolio']);
    }
    
  }

 
}
