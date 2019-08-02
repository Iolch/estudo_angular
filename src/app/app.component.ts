import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("Preparing to allow Toogle");
  }
  ServerName: String = "Apollo";
  ServerPID = 11;
  ServerStatus = "offline";
  statusFlag = false;
  allowToogle = false;

  constructor(){
    //              passando uma função
    //         -------------^--------------
    setTimeout(()=>{this.allowToogle = true}, 5000);
    
  }

  toggleServerStatus():void {
    
    this.statusFlag = !this.statusFlag;
    if(this.statusFlag) this.ServerStatus = "online";
    else this.ServerStatus = "offline";
  }

  
  
}
