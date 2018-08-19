import { CandidateFunction } from '../models/CandidateFunction.model';
import { DataFit } from '../models/DataFit.model';
import { DataPoint } from '../models/DataPoint.model';
import { evaluateFitness } from './evaluate';
import { fitFunctionToData } from './fit';
import { candidates } from './functions';

export function bestFit(data: DataPoint[]): CandidateFunction {
  let bestFit = null;
  let bestFitness = 0;

  candidates.forEach(candidate => {
    const dataFit = fitFunctionToData(data, candidate.calculate);
    const fitness = evaluateFitness(data, candidate.calculate, dataFit);

    if (bestFit == null || fitness < bestFitness) {
      bestFit = candidate;
      bestFitness = fitness;
    }
  });

  return bestFit;
}
