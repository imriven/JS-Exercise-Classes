class Lambdasian {
    constructor(obj) {
      this.name = obj.name;
      this.age = obj.age;
      this.location = obj.location;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  }

  let L = {name:"Nina", age:6, location:"Boston"}
  
  /*
    TASK 4
      - Write an Instructor class extending Lambdasian.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
          + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
          + `catchPhrase`: i.e. `Don't forget the homies`.
      - The constructor calls the parent constructor passing it what it needs.
      - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
      - Instructor instances have the following methods:
          + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
          + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
  */
  class Instructor extends Lambdasian {
    constructor (objteach) {
      super(objteach)
      this.specialty = objteach.specialty;
      this.favLanguage = objteach.favLanguage;
      this.catchPhrase = objteach.catchPhrase;
    } 
    demo(subject) {
      return `Today we are learning about ${subject}`
    }
    grade(studentObj, subject) {
      return `${studentObj.name} receives a perfect score on ${subject}`
    }
    gradeStudent(studentObj){
      studentObj.grade = Math.floor(Math.random() * 100)
    }
  } 
  
  
  /*
    TASK 5
      - Write a Student class extending Lambdasian.
      - Its constructor takes a single argument -  an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `previousBackground` i.e. what the Student used to do before Lambda School
          + `className` i.e. CS132
          + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
      - The constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
      - Student instances have the following methods:
          + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
          + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
          + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
  */
  class Student extends Lambdasian{
    constructor(objStudent) {
      super(objStudent) 
      this.previousBackground = objStudent.previousBackground;
      this.className = objStudent.className;
      this.favSubjects = objStudent.favSubjects;
      this.grade = 89;
    }
    listSubjects() {
      return `Loving ${this.favSubjects.join()}`
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
      if (this.grade > 70) {
        return true
      }
      return false;
    }
  }
  
  
  
  /*
    TASK 6
      - Write a ProjectManager class extending Instructor.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Instructor.
          + `gradClassName`: i.e. CS1
          + `favInstructor`: i.e. Sean
      - Its constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
      - ProjectManager instances have the following methods:
          + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
          + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
  */
  class ProjectManager extends Instructor{
    constructor(pmObj) {
      super(pmObj)
      this.gradClassName = pmObj.gradClassName;
      this.favInstructor = pmObj.favInstructor;
    }
    standUp(channel) {
     return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(studentObj, subject) {
      return `${this.name} debugs ${studentObj.name}'s code on ${subject}`
    }
  }




  const newStudent = new Student({
      name:"Nina", 
      age:6, 
      location:"Boston",
      previousBackground: "Blah blah",
      favSubjects:["a", "b", "c"],
      className:"Web29"
    })

    const newInstructor = new Instructor({
    name:"Britt", 
      age:26, 
      location:"Texas",
      specialty: "CSS",
      favLanguage:"French",
      catchPhrase:"Catch you later"
    })

let P = {
    name:"Britt", 
      age:26, 
      location:"Texas",
      specialty: "CSS",
      favLanguage:"French",
      catchPhrase:"Catch you later",
      gradClassName:"BLah",
      favInstructor:"Mr.BLah"
    }

    const newPM = new ProjectManager(P)

    console.log(newStudent.grade);
    console.log(newStudent.graduate());
    newPM.gradeStudent(newStudent);
    console.log(newStudent.grade);
    console.log(newStudent.graduate());