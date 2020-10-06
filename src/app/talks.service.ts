import { Injectable } from '@angular/core';

import talksJSON from '../assets/data/talks.json';
import { Talk } from './talk';

@Injectable({
  providedIn: 'root',
})
export class TalksService {
  constructor() {}

  getTalks(): Talk[] {
    return talksJSON;
  }

  getTalk(id): Talk {
    return talksJSON[id];
  }
}
