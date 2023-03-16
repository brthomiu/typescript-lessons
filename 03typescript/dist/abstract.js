"use strict";
//----Abstract classes----
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getTime() {
        //calculations
        return 5;
    }
}
//----Cannot create an object from an abstract class, this will return an error----
// const pictures = new TakePhoto2("test1", "test2")
class PicApp2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
//----You CAN create an object from a class that extends an abstract class----
//---Abstract classes can be used as "blueprints" due to this----
const pictures = new PicApp2("test1", "test2", 1);
// Method from the abstract class that was extended can be called from the new object
pictures.getTime;
