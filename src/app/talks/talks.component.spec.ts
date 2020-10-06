import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { TalksService } from '../talks.service';
import { TalksComponent } from './talks.component';
import { Talk } from '../talk';

const mockTalks: Talk[] = [
  {
    id: 0,
    speakers: [{ name: 'Speaker 1', image: 'speaker1.jpg' }],
    title: 'Title 1',
    description: 'desc 1',
    feedbackUrl: 'http://localhost:4200/?feedback1',
    presentationUrl: 'http://localhost:4200/?presUrl1',
    tracks: ['track1-1', 'track1-2'],
    level: 1,
  },
  {
    id: 1,
    speakers: [{ name: 'Speaker 2', image: 'speaker2.jpg' }],
    title: 'Title 2',
    description: 'desc 2',
    feedbackUrl: 'http://localhost:4200/?feedback2',
    presentationUrl: 'http://localhost:4200/?presUrl2',
    tracks: ['track2-1', 'track2-2'],
    level: 2,
  },
];

describe('TalksComponent', () => {
  let component: TalksComponent;
  let talksService: TalksService;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    talksService = TestBed.get(TalksService);
    spyOn(talksService, 'getTalks').and.returnValue(mockTalks);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the correct number of talks', () => {
    const talkElements = fixture.debugElement.queryAll(By.css('.talk'));
    expect(talkElements.length).toBe(mockTalks.length);
  });

  describe('Content verification', () => {
    it('should show the correct title', () => {
      const titleElements = fixture.debugElement.queryAll(
        By.css('.talk > p.title')
      );
      expect(titleElements.length).toBeGreaterThan(0);
      titleElements.forEach((titleElement: DebugElement, index) => {
        expect(titleElement.nativeElement.innerHTML).toContain(
          mockTalks[index].title
        );
      });
    });

    it('should render the speaker image', () => {
      const imageElements = fixture.debugElement.queryAll(
        By.css('.talk > img')
      );
      expect(imageElements.length).toBeGreaterThan(0);
      imageElements.forEach((imageElement: DebugElement, index) => {
        expect(imageElement.nativeElement.src).toMatch(
          new RegExp(`${mockTalks[index].speakers[0].image}$`)
        );
      });
    });
  });
});
