import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{
    counterItoA : number = 0;
    counterAtoI : number = 0;
    
    countServiceItoA(){
        this.counterItoA += 1;
        console.log("Activate service occurs for " + this.counterItoA + " times.");
    }

    countServiceAtoI(){
        this.counterAtoI += 1;
        console.log("Deactivate service occurs for " + this.counterAtoI + " times.");
    }
}