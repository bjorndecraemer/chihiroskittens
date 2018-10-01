import {LogEntry} from "./log-entry.model";

export class Cat{

  constructor(
    public uniqueId : number,
    public name : string,
    public sex : "f" | "m",
    public birthDate : Date,
    public catRace : string,
    public shortBio : string,
    public logEntries : LogEntry[] = [],
    public nickNames? :string[],
    public profilePic? : string,
  ){}

   public isMale() : boolean {
     return this.sex && this.sex == 'm';
   }
   public isFemale() : boolean {
     return this.sex && this.sex == 'f';
   }
   public getNicknameString() : string{
    if(this.nickNames){
      let composedString = "";
      let i = 0;
      for(let nickname of this.nickNames){
        if(i != 0){
          composedString += " ,"+nickname;
        }
        else{
          composedString += nickname;
        }
        i++;
      }
      return composedString;
    }
    else{
      return "Unknown";
    }
   }
}
