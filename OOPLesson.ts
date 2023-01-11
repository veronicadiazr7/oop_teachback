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
}

const fireBender = new FireBender("Fire Nation", "positive jing", "dragons", 2);
// console.log(fireBender);

// console.log(fireBender.bendingTechnique());
// console.log(fireBender.showFireBending());

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

/*---------------------POLYMORPHISM: -------------------------
Polymorphism means a child class can define its own unique behavior and still share the same methods or behavior of its parent class.
 Polymorphism allows for class specific behavior and more reusable code. A single function can operate on multiple types of data. 
*/
let benders: BendingArts[] = [fireBender, waterBender];

for (let bender of benders) {
  console.log(bender.bendingTechnique());
  if (bender instanceof FireBender) {
    console.log(bender.showFireBending());
  } else if (bender instanceof WaterBender) {
    console.log(bender.showBloodBending());
  }
  // When running the loop for each iteration of the loop, you would see the string "Demonstration of bending art" along with it's corresponding bending technique
}

/*In this example, the benders variable is declared as an array of BendingArts objects, and it is assigned two instances of FireBender and WaterBender. 
The for...of loop iterates through the array, and it treats each object as an instance of the BendingArts class. 
In the loop, it calls the bendingTechnique() method of each object, which is a method inherited from the BendingArts class. 
Then we are checking with the help of instanceof keyword, whether the current bender is of FireBender class or WaterBender class 
and calling the respective class specific method, showFireBending() and showBloodBending().

This example demonstrates polymorphism because it allows objects of different classes to be treated as objects of a common superclass, 
in this case, the BendingArts class. Even though FireBender and WaterBender have different methods, they can both be treated as BendingArts 
objects because they have the same properties and methods as that class.


 */
