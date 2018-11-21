import { Printable } from './printable';

class Thing implements Printable {
  private name: string;
  private completed: boolean;

  constructor(name: string, completed: boolean) {
    this.name = name;
    this.completed = completed;
  }

  public getName(): string {
    return this.name;
  }
  printAllFields(): void {
    console.log(`${this.name}, ${this.completed}`);
  }
}

export { Thing };
