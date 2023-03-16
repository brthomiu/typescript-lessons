// Class declaraton with types, public, and private

// Long syntax
// class User {
//   public email: string;
//   private name: string;
//   city: string = ""
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// Nice syntax, produces the same code
class User {
    // protected class is like private, but it can be accessed by child classes
  protected _courseCount = 1;

  city: string = "";
  constructor(public email: string, private name: string) {}

  // methods can also be private
  private deleteToken() {
    console.log("Token deleted");
  }

  // getter functions
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // setter function (cannot return any type, not even void)
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1.");
    }
    this._courseCount = courseNum;
  }
}

// getters and setters can be used to access private methods and variables outside of the class
// getters don't have to have setters, a getter can be used just to expose a property

// Inheritance - "extends" instantiates the child class with all the properties of the parent class
// EXCEPT for private properties, use a protected property if it needs to be accessed by children

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const buddy = new User("mail@mail.com", "Johmmy");

buddy.city = "Town";
