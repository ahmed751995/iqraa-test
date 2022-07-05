import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggle_nav: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.toggle_nav = !this.toggle_nav;
  }

  hasRoute(route: string): boolean {
    return route !== this.router.url;
  }
}
