//1)
const parent = {
  detail() {
    console.log(
      `My name is ${this.name} and i am from ${this.location} and my age is ${this.age}`
    );
  },
};
const firstChild = Object.create(parent);
firstChild.name = "EA19";
firstChild.location = "Bangalore";
firstChild.age = "23";

const firstSecond = Object.create(parent);
firstSecond.name = "Manoj";
firstSecond.location = "KA";
firstSecond.age = "23";

firstChild.detail();
firstSecond.detail();
