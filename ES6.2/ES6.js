class Person{
  constructor(firstName, lastName, age, careerAsp, skills){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.careerAsp = careerAsp;
  this.skills = skills;
}
    //getter
    // get age(){return "You are " + this.age + " years old."}

    //getter
    get fullName(){return this.firstName + " " + this.lastName}

    // setter
    set fullName(fullName){
      const names = fullName.split(" ");
      this.firstName = names[0]
      this.lastName = names[1]
    }
}
var bootcamper1  = new Person("Matthew", "England", 30, "Developer", "JavaScript");
