import { Comparable } from './comparator';

class Thing implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string, completed: boolean) {
    this.name = name;
    this.completed = completed;
  }

  public getName(): string {
    return this.name;
  }
  compareTo(other: Thing): number {
    if (this.completed === other.completed) {
      return 0;
    } else if (this.completed > other.completed) {
      return -1;
    } else {
      return 1;
    }
  }
}

export { Thing };
