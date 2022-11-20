import { ComponentcanDeActive } from './../../share/guard/deactive.service';
import { ServerServiceService } from './../../share/service/server-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, ComponentcanDeActive {
  serverEditname: any;
  serverEditstatus: any;
  currentServer: any;
  noedittem = false;
  id:any

  constructor(
    private route: ActivatedRoute,
    private serverService: ServerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentServer = this.serverService.findById(params['id']);
      this.id=this.currentServer.id;
      this.serverEditname = this.currentServer.name;
      this.serverEditstatus = this.currentServer.status;
    });
    this.route.queryParams.subscribe((params) => {
      this.noedittem = params['allowEdit'] == 1;
    });
  }

  canDeActive(): boolean | Promise<boolean> | Observable<boolean> {
    if(this.currentServer.name !== this.serverEditname || this.currentServer.status !== this.serverEditstatus)
      return confirm(' Are you sure to discard');
    return true;
  }
  update() {
    this.serverService.update({id:this.id,newName:this.serverEditname,status:this.serverEditstatus})
    // this.router.navigate(['/server',this.serverEdit.id])
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
