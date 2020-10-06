import { Component, OnInit } from '@angular/core';

import { Talk } from '../talk';
import { TalksService } from '../talks.service';

@Component({
  selector: 'talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
})
export class TalksComponent implements OnInit {
  talks: Talk[];
  speakerImagePath: string = '';

  constructor(private talksService: TalksService) {}

  getSpeakerImagePath(talkId): string {
    return `assets/${this.talks[talkId].speakers[0].image}`;
  }

  ngOnInit(): void {
    this.talks = this.talksService.getTalks();
    console.log(this.talks[0].speakers[0].image);
  }
}
