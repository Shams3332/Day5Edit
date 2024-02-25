import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IUser } from '../../../models/i-user';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  user:IUser={} as IUser
  formgroup1:FormGroup;

  constructor(private router:Router,private userServ:UserService,private authSer:AuthService
    ,private formBuilder:FormBuilder){
      this.formgroup1=this.formBuilder.group({
        firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
        lastName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{5,}')]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/),
        ]),
        email:new FormControl('',[Validators.required,Validators.email]),
        address:this.formBuilder.array([]),
        phone:this.formBuilder.array([this.newPhone()]),
      })
    }



  
    get firstName(){
      return this.formgroup1.get('firstName')
    }
    get lastName(){
      return this.formgroup1.get('lastName')
    }
    get email(){
      return this.formgroup1.get('email')
    }
    get password(){
      return this.formgroup1.get('password')
    }
    get address(){
      return this.formgroup1.get('address') as FormArray
    }
    get phone(){
      return this.formgroup1.get('phone') as FormArray
    }

// add new address

newAddress():FormGroup{
  return this.formBuilder.group({
    city:'',
    street:'',
    postal:''
  })
}

addAddress(){
  this.address.push(this.newAddress())
}
removeAddressInput(currentIndex:number){
  this.address.removeAt(currentIndex)
}

// add phone

// add phone
newPhone(): FormGroup {
  return this.formBuilder.group({
    phone:'',
  });
}

addPhone() {
  this.phone.push(this.newPhone()); 
}

removePhoneInput(currentIndex: number) {
  this.phone.removeAt(currentIndex); 
}



  // work
  gotosignup(){
  this.router.navigate(['/user/login'])
  }

  addUser(){
    this.userServ.creatUser(this.formgroup1.value).subscribe({
      next:(data)=>{
        console.log(data);
        this.authSer.login('shams@gmail.com','123')
      }
    })
  }

}
