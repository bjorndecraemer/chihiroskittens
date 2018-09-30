export class LogEntry{

  constructor(public images : string[] = [], public logMessage : string, public logDate : Date){}

  public hasImages(){
    return this.images && this.images.length > 0;
  }
}
