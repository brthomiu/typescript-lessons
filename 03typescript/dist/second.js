"use strict";
// Implementing interfaces into classes
// You must use all the properties of an interface you implement
// in this example the the TakePhoto interface is implemented and the properties from the interface are invoked by the constructor of the PicApp class
class PicApp {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        console.log(`Camera: ${cameraMode}, Filter:${filter}, Burst:${burst}`);
    }
}
// in this example the Story interface is also implemented, requiring a createStory method that returns a string
class VidApp {
    constructor(cameraMode, filter, burst, length) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.length = length;
        console.log(`Camera: ${cameraMode}, Filter:${filter}, Burst:${burst}, Length:${length}`);
    }
    createStory() {
        console.log("Story");
        return "Story URL";
    }
}
