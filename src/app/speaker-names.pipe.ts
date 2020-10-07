import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakerNames',
})
export class SpeakerNamesPipe implements PipeTransform {
  transform(value: { [key: string]: string }[]): string {
    return value.map((speaker) => speaker.name).join(' & ');
  }
}
