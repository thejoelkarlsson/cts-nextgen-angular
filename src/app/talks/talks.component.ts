import { Component, OnInit } from '@angular/core';

import { Talk } from '../talk';
import { Speaker } from './../speaker';
import { TalksService } from '../talks.service';

@Component({
  selector: 'talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
})
export class TalksComponent implements OnInit {
  talks: Talk[];
  speakerImagePath: string = '';

  getImageClass(images: Speaker[]): string {
    return images.length === 1 ? 'w-full' : 'w-1/2';
  }

  constructor(private talksService: TalksService) {}

  ngOnInit(): void {
    this.talks = this.talksService.getTalks();
  }
}
