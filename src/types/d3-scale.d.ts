declare module 'd3-scale' {
  export interface ScaleQuantize<Range> {
    (value: number): Range;
    domain(): [number, number];
    domain(domain: [number, number]): this;
    range(): Range[];
    range(range: Range[]): this;
    invertExtent(value: Range): [number, number];
    ticks(count?: number): number[];
    tickFormat(count?: number, specifier?: string): (d: number) => string;
    nice(count?: number): this;
    copy(): ScaleQuantize<Range>;
  }

  export function scaleQuantize<Range = number>(): ScaleQuantize<Range>;
} 