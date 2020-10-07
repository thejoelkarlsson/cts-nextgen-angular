import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  styles: { [key: string]: string } = {
    link:
      'block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-400 mr-4',
  };

  constructor() {}

  ngOnInit(): void {}
}
