import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerServiceService {
  server = [
    { id: 1, name: 'Develpoment Server', status: 'Offline' },
    { id: 2, name: 'Test Server', status: 'Online' },
    { id: 3, name: 'Production Server', status: 'Offline' },
  ];

  constructor() {}

  findById(id: number) {
    return this.server.find((server) => server.id == id);
  }
  update({id,newName,status}:{id:any| undefined,newName:any,status:any}) {
    let server:any=this.findById(id);
    server.id=id
    server.name=newName;
    server.status=status
 

}
}
