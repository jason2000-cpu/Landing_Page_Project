import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      username:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }

  signup(){
    this.http.post<any> ("http://localhost:3000/users", this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful");
      this.signupForm.reset();
      this.router.navigate(['/home']);
    }, err=>{
      alert("An error occured!!!")
    })

      // const pool = mysql.createPool({
      //     host: 'localhost',
      //     user: 'root',
      //     password : '@Jack2000',
      //     database: 'customers'
      // }).promise()
      //   const [username, email, phonNo, password]  = [this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.phoneNo, this.signupForm.value.password]
      //  const insert =  await pool.query(`INSERT INTO customer_tbl (username, email, phoneNo, password) VALUES ( ${username}, ${email}, ${phonNo}, ${password}`);
      // const  result =   await pool.query("SELECT * FROM billing_tracker");
      // console.log(result[0]);

  }

}
