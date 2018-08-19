import { DataFit } from '../models/DataFit.model';
import { DataPoint } from '../models/DataPoint.model';

export function fitFunctionToData(data: DataPoint[], func: (_: number) => number): DataFit {
  const sumX = sumOfX(data, func);
  const sumY = sumOfY(data);
  const sumX2 = sumOfXSquared(data, func);

  return {
    A: sumY / sumX,
    C: 0,
  };
}

function sumOfXSquared(data: DataPoint[], func: (_: number) => number): number {
  let sum = 0;
  data.forEach(point => {
    sum += func(point.n) ** 2;
  });

  return sum;
}

function sumOfX(data: DataPoint[], func: (_: number) => number): number {
  let sum = 0;
  data.forEach(point => {
    sum += func(point.n);
  });

  return sum;
}


function sumOfY(data: DataPoint[]): number {
  let sum = 0;
  data.forEach(point => {
    sum += point.time;
  });

  return sum;
}
