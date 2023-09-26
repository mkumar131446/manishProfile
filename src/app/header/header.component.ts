import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTab: string = 'aboutme';

  constructor(private router: Router) { }

  ngOnInit() {
    this.setActiveTab(this.router.url);
  }

  setActiveTab(route: string) {
    this.router.navigate([route]);
    if (route.endsWith('skills')) {
      this.activeTab = 'skills';
    } else if (route.endsWith('experience')) {
      this.activeTab = 'experience';
    }else if (route.endsWith('projects')) {
      this.activeTab = 'projects';
    } else {
      this.activeTab = 'aboutme';
    }
  }

}
