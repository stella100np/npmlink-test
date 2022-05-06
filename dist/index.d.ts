interface IStudent {
    name: string;
    age: number;
}
declare function getStudentName(str: IStudent): string;

export { getStudentName };
