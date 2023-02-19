export class Bills{

  id?:number;
  description:string;
  value:number;

  constructor(id:number, description: string, value:number){
    this.id = id;
    this.description = description;
    this.value = value;
  }
}
