export class Income{

  id?:number;
  description:string;
  value:number;

  constructor(id:number, description: string, value:number, percent: number){
    this.id = id;
    this.description = description;
    this.value = value;
  }
}
