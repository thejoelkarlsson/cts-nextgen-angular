import { Injectable } from '@angular/core';

import { Talk } from './talk';

@Injectable({
  providedIn: 'root',
})
export class TalksService {
  constructor() {}

  getTalks(): Talk[] {
    return [];
  }
}
