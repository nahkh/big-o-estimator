import { DataFit } from '../models/DataFit.model';
import { DataPoint } from '../models/DataPoint.model';

export function evaluateFitness(data: DataPoint[], func: (_: number) => number, fit: DataFit): number {
  let error = 0;
  data.forEach(point => {
    error += (fit.A * func(point.n) + fit.C - point.time) ** 2;
  });

  return error;
}
