export interface TombolaSchema {
  name: string;
  cost: number;
  awards: IAwards[];
}

interface IAwards {
  award: string
  percentage: number
}