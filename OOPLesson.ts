/* ---------------------ABSTRACTION: -------------------------
Related to giving the properties of a object, to only have whats necessary and will be used eventually.
The purpose of of abstraction is to only expose what we’re interested and whats relevant and hide any irrelevant attributes or methods. 
 */

/* ---------------------ENCAPSULATION: -------------------------
Allows the control of who can SEE and USE the attributes and method given to certain class.
This is possible trough access modifiers:  public, private, protected and  default (no keyword). */
class BendingArts {
  public nation: string;
  public jing: string;
  public teacher: string;
  private numberOfAvatar: number;
  public typeOfBending: string;

  public bendingTechnique(): string {
    return "Demonstration of bending art";
  }
  private subBendingTechnique(): string {
    return "Access to secret bending Technique";
  }
  constructor(
    nation: string,
    jing: string,
    teacher: string,
    numberOfAvatar: number
  ) {
    this.nation = nation;
    this.jing = jing;
    this.teacher = teacher;
    this.numberOfAvatar = numberOfAvatar;
    this.typeOfBending = this.typeOfBending;
  }

  get numberOfAvatarBender() {
    return this.numberOfAvatar;
  }
  set numberOfAvatarBender(numberOfAvatar: number) {
    this.numberOfAvatar = numberOfAvatar;
  }
  // public getBendingArt(): string {
  //   return this.typeOfBending;
  // }
}

/*------------------ GET and SET methods-----------------
Necessary for accessing and modifying private data
 */

/*---------------------INHERITANCE: -------------------------
 Describes the relationship between the parent class and its child classes.
  Just like in genetics, in the parent passes attributes and methods to their child, and the child can possess additional unique ones. 
Helps reuse, customize and enhance existing code*/

class FireBender extends BendingArts {
  constructor(
    nation: string,
    jing: string,
    teacher: string,
    numberOfAvatar: number
  ) {
    super(nation, jing, teacher, numberOfAvatar);
  }
  showFireBending(): string {
    return "Person is fire bending";
    //Adding a new method to the child class
  }
  // public getBendingArt(): string {
  //   return `this.typeOfBending show ${fir}`;
  // }
}

const fireBender = new FireBender("Fire Nation", "positive jing", "dragons", 2);
console.log(fireBender);

console.log(fireBender.bendingTechnique());
console.log(fireBender.showFireBending());

class WaterBender extends BendingArts {
  constructor(
    nation: string,
    jing: string,
    teacher: string,
    numberOfAvatar: number
  ) {
    super(nation, jing, teacher, numberOfAvatar);
  }
  showBloodBending(): string {
    return "Person is blood bending";
  }
}
const waterBender = new WaterBender(
  "North and South Pole",
  "Negative jing",
  "The Moon",
  2
);

let benders: BendingArts[] = [
  new FireBender("Fire Nation", "positive jing", "dragons", 2),
  new WaterBender("North and South Pole", "negative jing", "The Moon", 2),
  // new EarthBender("Earth Kingdom", "neutral", "earth", 4),
  // new AirBender("Air Nomads", "positive", "sky bison", 0),
];

for (let bender of benders) {
  console.log(bender.bendingTechnique());
}

/*---------------------POLYMORPHISM: -------------------------
Polymorphism means a child class can define its own unique behavior and still share the same methods or behavior of its parent class.
 Polymorphism allows for class specific behavior and more reusable code. A single function can operate on multiple types of data. 
*/
