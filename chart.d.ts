export interface ChartData {
  raku: NoteData[];
  easy: NoteData[];
  normal: NoteData[];
  hard: NoteData[];
  extra: NoteData[];
  info: ChartInfo;
}

export interface ChartInfo {
  version?: number;
  bpm: number;
  beat: number;
  offset: number;
}

export interface NoteData {
  type: number;
  measure: number;
  lane: 1 | 2 | 3 | 4 | 5 | -1;
  position: number;
  split: number;
  option: NoteOptionData[];
  end: NoteData[];
}

export type NoteOptionData = number | string;
