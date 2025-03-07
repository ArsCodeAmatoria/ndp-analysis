declare module 'regression' {
  export interface RegressionResult {
    equation: number[];
    points: number[][];
    string: string;
    r2: number;
    predict: (x: number) => number[];
  }

  export default {
    linear: (data: number[][], options?: any) => RegressionResult,
    exponential: (data: number[][], options?: any) => RegressionResult,
    logarithmic: (data: number[][], options?: any) => RegressionResult,
    power: (data: number[][], options?: any) => RegressionResult,
    polynomial: (data: number[][], options?: any) => RegressionResult,
  };
} 