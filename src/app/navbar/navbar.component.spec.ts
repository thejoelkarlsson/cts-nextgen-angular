import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo with correct alt text', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const logo = fixture.debugElement.query(By.css('#navbar img'));
    expect(logo.nativeElement.getAttribute('alt')).toEqual(
      'Cygni Tech Summit 2020'
    );
  });

  it('should display all navigation links', () => {
    const navItems = ['Home', 'Schedule', 'Speakers', 'News'];
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const navLinks = fixture.debugElement.query(By.css('#nav-links'));
    expect(navLinks.nativeElement.textContent).toEqual(navItems.join(''));
  });
});
