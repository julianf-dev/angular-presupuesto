export class Expense{

  id?:number;
  description:string;
  value:number;
  percent?:number;

  constructor(id:number, description: string, value:number, percent: number){
    this.id = id;
    this.description = description;
    this.value = value;
    this.percent = percent;
  }
}
