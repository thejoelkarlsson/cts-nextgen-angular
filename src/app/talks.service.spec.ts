import { TestBed } from '@angular/core/testing';

import { TalksService } from './talks.service';
import { Talk } from './talk';

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

describe('TalksService', () => {
  let service: TalksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalksService);
    spyOn(service, 'getTalks').and.returnValue(mockTalks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the correct number of talks', () => {
    expect(service.getTalks().length).toBe(mockTalks.length);
  });
});
