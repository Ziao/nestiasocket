export interface ICalculator {
  add(a: number, b: number): number;
}

export interface IListener {
  on(event: string): void;
}

export class Calculator implements ICalculator {
  public add(a: number, b: number): number {
    return a + b;
  }
}
