import { Component, ViewChild } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 

  @ViewChild("sideNav") sideNav;
  
  constructor(private _router: Router) { 
    this._router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        if(this.sideNav && this.sideNav._isOpened) {
          this.sideNav.close();
        }
      }
      });
    }  
}
