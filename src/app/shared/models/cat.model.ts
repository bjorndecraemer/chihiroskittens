import {LogEntry} from "./log-entry.model";

export class Cat{

  constructor(
    public name : string,
    public sex : "f" | "m",
    public birthDate : Date,
    public catRace : string,
    public shortBio : string,
    public logEntries : LogEntry[] = []
  ){}

  public isMale() : boolean {
    return this.sex && this.sex == 'm';
  }
  public isFemale() : boolean {
    return this.sex && this.sex == 'f';
  }

}
