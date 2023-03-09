// Interfaces - Similar to types, more like a class (this is a broad reach)

// Context - creating a new user, starting a trial account and providing a discount code

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //Method that returns a string
  // long syntax
  // startTrial: () => string;
  //short syntax
  startTrial(): string;
  //method with string parameter that returns a number
  getCoupon(couponname: string, value: number): number
}

const bobbie: User = {
  dbId: 111,
  email: "1@2.com",
  userId: 123,
  startTrial: () => {
    return "Trial started";
  },
  //Actual names of parameters don't have to match as long as types match (ie: couponname vs name, value vs off)
  getCoupon: (name: "Dollarz", off: 1) => {
    return 10
  }
};

bobbie.email = "2@3.com";

// not allowed, dbId is readonly
// bobbie.dbId = 33
