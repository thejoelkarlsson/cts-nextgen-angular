import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { TalksService } from '../talks.service';
import { TalkComponent } from './talk.component';
import { Talk } from '../talk';

const mockTalk: Talk = {
  id: 0,
  speakers: [{ name: 'Speaker 1', image: 'speaker1.jpg' }],
  title: 'Title 1',
  description: 'desc 1',
  feedbackUrl: 'http://localhost:4200/?feedback1',
  presentationUrl: 'http://localhost:4200/?presUrl1',
  tracks: ['track1-1', 'track1-2'],
  level: 1,
};

describe('TalkComponent', () => {
  let component: TalkComponent;
  let talksService: TalksService;
  let fixture: ComponentFixture<TalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalkComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '0' }) } },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkComponent);
    component = fixture.componentInstance;
    talksService = TestBed.get(TalksService);
    spyOn(talksService, 'getTalk').and.returnValue(mockTalk);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct title', () => {
    const titleElements = fixture.debugElement.queryAll(By.css('p.title'));
    expect(titleElements.length).toBeGreaterThan(0);
    titleElements.forEach((titleElement: DebugElement, index) => {
      expect(titleElement.nativeElement.innerHTML).toContain(mockTalk.title);
    });
  });

  it('should render the speaker image', () => {
    const imageElements = fixture.debugElement.queryAll(By.css('img'));
    expect(imageElements.length).toBeGreaterThan(0);
    imageElements.forEach((imageElement: DebugElement, index) => {
      expect(imageElement.nativeElement.src).toMatch(
        new RegExp(`${mockTalk.speakers[0].image}$`)
      );
    });
  });
});
