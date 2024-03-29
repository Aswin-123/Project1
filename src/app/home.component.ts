import {Component} from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from './Security/security.service';
import { SecurityModel } from './Security/securityModel';


@Component ({
    selector :"app-home",
    templateUrl :"./home.component.html",
    styleUrls :["./home.component.css"]
})

export class HomeComponent {
    securityModel: SecurityModel ;
    constructor (private activatedRoute: ActivatedRoute ,private securityService: SecurityService){
        this.securityModel = securityService.securityModel;
        console.log(
            `From snapshot ${activatedRoute.snapshot.paramMap.get("name")}`
        );
        activatedRoute.paramMap.subscribe((item) =>{
            console.log(`From ParamMap ${item.get("name")} `);
        });
    }
    logout(){
        this.securityService.logout();
    }
}
