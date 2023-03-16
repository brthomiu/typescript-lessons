//----Abstract classes----
abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}
    // You can add an abstract method without immediately implementing it
    // it will require anything extending the abstract class to implement a getSepia method that returns void
  abstract getSepia(): void
  getTime(): number{
    //calculations
    return 5
  }
}

//----Cannot create an object from an abstract class, this will return an error----
// const pictures = new TakePhoto2("test1", "test2")

class PicApp2 extends TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

//----You CAN create an object from a class that extends an abstract class----
//---Abstract classes can be used as "blueprints" due to this----
const pictures = new PicApp2("test1","test2", 1)

// Method from the abstract class that was extended can be called from the new object
pictures.getTime