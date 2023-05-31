import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  switchedToActive:number=0;
  switchedToInactive:number=0;

  constructor(private counterService: CounterService){}
  users = [
    {
      id: 1,
      name: 'Max',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Anna',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Chris',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Manu',
      status: 'Inactive',
    },
  ];
  updateStatus(id: number, newStatus: string) {
    var userToUpdate = this.users.find(x=>x.id == id);
    if(userToUpdate != undefined){
        userToUpdate.status=newStatus;
    }
    var counterStatus = this.counterService.UpdateCounter(newStatus);
    this.switchedToActive = counterStatus.activationCount;
    this.switchedToInactive = counterStatus.inactivationCount;

  }
  getActiveUsers(){
    return this.users.filter(x=>x.status=='Active');
  }
  getInactiveUsers(){
    return this.users.filter(x=>x.status=='Inactive');
  }
}
