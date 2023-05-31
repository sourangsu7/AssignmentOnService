import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CounterService{
    flippedToActive:number=0;
    flippedToInactive:number=0;

    UpdateCounter(status:string){
        if(status == 'Active'){
            this.flippedToActive += 1;
            debugger;
            console.log('activationCount :'+ this.flippedToActive + ' & inactivationCount :' + this.flippedToInactive);
            return {'activationCount':this.flippedToActive,'inactivationCount': this.flippedToInactive}

        }
        else{
            this.flippedToInactive += 1;
            debugger;
            console.log('activationCount :'+ this.flippedToActive + ' & inactivationCount :' + this.flippedToInactive);
            return {'activationCount':this.flippedToActive,'inactivationCount': this.flippedToInactive}
        }
    }
}