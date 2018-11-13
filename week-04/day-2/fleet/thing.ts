class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  public getIsCompleted(): boolean {
    return this.completed;
  }
  public getName(): string {
    return this.name;
  }
}

export { Thing };
