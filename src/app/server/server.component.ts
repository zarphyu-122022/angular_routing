import { Router } from '@angular/router';
import { ServerServiceService } from './../share/service/server-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 server:any =[]
  constructor(private serverService:ServerServiceService,private router: Router) { }

  ngOnInit(): void {
    this.server =this.serverService.server
  }
  serverOne(id:any){
    this.router.navigate(['/server',id],{queryParams:{allowEdit: id==1 ? 1: 0},fragment:'sec3'})


  }

}
