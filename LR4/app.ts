// 1

//#region solution

type item = {
    id: number;
    name: string;
    group: number;
}

//#endregion


const array : Array<item> = [
    {id: 1, name: 'Vasya', group: 10} as item, 
    {id: 2, name: 'Ivan', group: 11} as item,
    {id: 3, name: 'Masha', group: 12} as item,
    {id: 4, name: 'Petya', group: 10} as item,
    {id: 5, name: 'Kira', group: 11} as item,
]


// 2 

//#region solution

type CarsType = {
    manufacturer? : string;
    model? : string;
}

//#endregion



let car : CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';


// 3

//#region solution

type ArrayCarsType = {
    cars : Array<CarsType>;
}

//#endregion


const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];


// 4

//#region solution

type DoneType = boolean;

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;



const group: GroupType = {
    students: [],
    mark: 5,
    group: 1,
    studentsFilter: (group: number) => {
        return this.students.filter((student) => student.group == group);
    },
    marksFilter: (mark: number) => {
        return this.students.filter((student) => student.mark == mark);
    },
    deleteStudent: (id: number) => {
        this.students = this.students.filter((student) => student.id != id);
    }
}

//#endregion

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}

type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students: Array<StudentType>,// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

