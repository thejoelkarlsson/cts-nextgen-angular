import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Talk } from '../talk';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css'],
})
export class TalkComponent implements OnInit {
  talk: Talk;

  constructor(
    private talksService: TalksService,
    private route: ActivatedRoute
  ) {}

  getTalk(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.talk = this.talksService.getTalk(id);
  }

  ngOnInit(): void {
    this.getTalk();
  }
}
