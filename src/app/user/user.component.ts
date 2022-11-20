import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users =[{id:1,name:'Sandar'},{id:2,name:'Bun Nie'},{id:3,name:'Zar Phyu'}]

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  backtoHome(){
    this.router.navigate(['/home'])

  }

}
