import { SpeakerNamesPipe } from './speaker-names.pipe';

describe('SpeakerNamesPipe', () => {
  let pipe: SpeakerNamesPipe;
  const speakers: { [key: string]: string }[] = [
    { name: 'Speaker 1', image: 'speaker1.jpg' },
    { name: 'Speaker 2', image: 'speaker2.jpg' },
  ];

  beforeEach(() => {
    pipe = new SpeakerNamesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('successfully shows speaker name', () => {
    expect(pipe.transform([speakers[0]])).toBe('Speaker 1');
  });

  it('successfully joins multiple speakers', () => {
    expect(pipe.transform(speakers)).toBe('Speaker 1 & Speaker 2');
  });
});
