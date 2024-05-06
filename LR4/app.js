// 1
var _this = this;
//#endregion
var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
//#endregion
var car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
//#endregion
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var group = {
    students: [],
    mark: 5,
    group: 1,
    studentsFilter: function (group) {
        return _this.students.filter(function (student) { return student.group == group; });
    },
    marksFilter: function (mark) {
        return _this.students.filter(function (student) { return student.mark == mark; });
    },
    deleteStudent: function (id) {
        _this.students = _this.students.filter(function (student) { return student.id != id; });
    }
};
