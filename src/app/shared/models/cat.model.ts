export class Cat{

  constructor(public name : string, public sex : "f" | "m"){}

  public isMale() : boolean {
    return this.sex && this.sex == 'm';
  }
  public isFemale() : boolean {
    return this.sex && this.sex == 'f';
  }

}
