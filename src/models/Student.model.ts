export class Student {
  id: number;
  name: string;

  english: number;
  maths: number;
  science: number;
  social: number;

  constructor(id: number, name: string) {
    this.id = id;

    this.name = name;
    this.english = 0;
    this.maths = 0;
    this.science = 0;
    this.social = 0;
  }

  get total() {
    return this.english + this.maths + this.science + this.social;
  }

  setName(name) {
    this.name = name;
  }

  updateMarks(subject, value) {
      const marks = new Number(value);
      if(!isNaN(marks.valueOf())) {
        this[subject] = marks.valueOf();
      } else {
        alert("Invalid value");
      }

  }
}
