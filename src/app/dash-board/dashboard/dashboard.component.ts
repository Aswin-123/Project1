import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabChangeEvent, NgbTabContent, NgbTabset } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import { SecurityService } from 'src/app/Security/security.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit {
@ViewChild('tabs')tabs:NgbNav;
  userDetails: any[];
  aaaa: string;


  constructor(private route: ActivatedRoute , private securityService:SecurityService) { }

  ngOnInit(): void {
  
    this.onchangeName('1');
    this.securityService.getUserDetails().subscribe(item=> this.userDetails = item)
  }

  ngAfterViewInit(){
    this.aaaa = this.tabs.activeId;
  }

  onTabChange() {
    this.aaaa =this.tabs.activeId;
}
  activeTab(){
    return 'ngb-tab-0';
  }

  onchangeName( I : string) {
    if( I == '0')
    {
      this.aaaa = 'All';
    }
    else if( I == '2')
    {
      this.aaaa =  'Completed';
    }
    else if( I == '1')
    {
      this.aaaa =  'Upcoming';
    }
  }
  

}
