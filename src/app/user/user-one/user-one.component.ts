import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.css']
})
export class UserOneComponent implements OnInit {
  id:number | undefined;
  name:string | undefined;
  age:number | undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // this.name=this.route.snapshot.params['name']
    this.route.params.subscribe(params =>{
      this.id = params['id'],
      this.name = params['name']
      
    })
    // this.route.queryParams.subscribe(params =>{
    //   this.age= params['age'];
    // })
     this.age =this.route.snapshot.queryParams['age']

    }
      
      
  }


