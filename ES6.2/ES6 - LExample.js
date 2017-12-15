class Bootcamper {
    constructor(name, profession, age) {
      this.name = name;
      this.profession = profession;
      this.age = age;
    }
    get professsion(){
      return 'Profession is' + this._profession;
  }
    set profession(profession){
      return this._profession = profession;
    }
  }

var Matthew = new Bootcamper ('Matthew','Coder',30);
