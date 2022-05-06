interface IStudent {
  name: string;
  age:number;
}
export function getStudentName(str: IStudent) : string {
  return str.name;
}