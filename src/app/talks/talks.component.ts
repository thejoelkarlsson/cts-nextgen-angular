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

  ngOnInit(): void {
    this.talks = this.talksService.getTalks();
  }
}
