import { ActivatedRoute, Router } from '@angular/router';
import { ServerServiceService } from './../../share/service/server-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-one',
  templateUrl: './server-one.component.html',
  styleUrls: ['./server-one.component.css']
})
export class ServerOneComponent implements OnInit {
  serverI:any;
 
  constructor(private serverService:ServerServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.serverI = this.serverService.findById(params['id'])
    })
  }
  edit(){
    // this.router.navigate(['/server',this.serverI.id,'edit'])
  this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'},)

  }

}
