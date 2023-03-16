// Implementing interfaces into classes

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
    createStory(): string
}

// You must use all the properties of an interface you implement
// in this example the the TakePhoto interface is implemented and the properties from the interface are invoked by the constructor of the PicApp class
class PicApp implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    console.log(`Camera: ${cameraMode}, Filter:${filter}, Burst:${burst}`);
  }
}

// in this example the Story interface is also implemented, requiring a createStory method that returns a string
class VidApp implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public length: 0
  ) {
    console.log(
      `Camera: ${cameraMode}, Filter:${filter}, Burst:${burst}, Length:${length}`
    );
  }

  createStory(): string {
      console.log("Story");
      return "Story URL"
  }
}
