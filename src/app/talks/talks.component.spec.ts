import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    component.talks = mockTalks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show all the talks', () => {
    const talkElements = fixture.debugElement.queryAll(By.css('.talk'));
    expect(talkElements.length).toBe(mockTalks.length);
  });

  it('should show the titles', () => {
    const talkElements = fixture.debugElement.queryAll(By.css('.talk'));
    talkElements.forEach((talkElement: DebugElement, index) => {
      expect(talkElement.nativeElement.innerHTML).toContain(
        mockTalks[index].title
      );
    });
  });
});
