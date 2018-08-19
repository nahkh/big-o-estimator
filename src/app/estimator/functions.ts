import {CandidateFunction} from '../models/CandidateFunction.model';

export const candidates: CandidateFunction[] = [
  {
      name: 'O(1)',
      calculate: (_: number) => 1,
  },
  {
      name: 'O(n)',
      calculate: (n: number) => n,
  },
  {
      name: 'O(n log n)',
      calculate: (n: number) => n * Math.log(n),
  },
  {
      name: 'O(n ^ 2)',
      calculate: (n: number) => n * n,
  },
  {
      name: 'O(n ^ 2 log n)',
      calculate: (n: number) => n * n * Math.log(n),
  },
  {
      name: 'O(n ^ 3)',
      calculate: (n: number) => n * n * n,
  },
  {
      name: 'O(2 ^ n)',
      calculate: (n: number) => Math.pow(2, n),
  },
  /*{
      name: 'O(n!)',
      calculate: factorial,
  },*/
]

function factorial(n) {
  if (n <= 1) {
    return n
  }
  else return n * factorial(n - 1);
}
