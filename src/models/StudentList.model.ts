import {Student} from "./Student.model";

export class StudentList {
  list: Student[];

  min: Student;
  max: Student;
  avg: Student;

  constructor() {
    this.min = new Student(-1, 'Min');
    this.max = new Student(-2, 'Max');
    this.avg = new Student(-3, 'Avg');

    this.list = [];

    this.add();
    this.add();
  }

  add() {
    const index = this.list.length ? this.list[this.list.length - 1].id + 1: 0;
    this.list.push(new Student(index, `Student ${index}`));
  }

  calculate() {
    this.min = new Student(-1, 'Min');
    this.max = new Student(-2, 'Max');
    this.avg = new Student(-3, 'Avg');
    const subjects = ['english', 'maths', 'social', 'science'];
    this.list.forEach((student) => {
      subjects.forEach((subject) => {
        if (this.min[subject] > student[subject]) {
          this.min[subject] = student[subject];
        }

        if (this.max[subject] < student[subject]) {
          this.max[subject] = student[subject];
        }

        this.avg[subject] += student[subject];
      });
    });

    subjects.forEach((subject) => {
      this.avg[subject] /= this.list.length;
    });
  }

  delete(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
