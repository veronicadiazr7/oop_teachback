/* ---------------------ABSTRACTION: -------------------------
Related to giving the properties of a object, to only have whats necessary and will be used eventually.
The purpose of of abstraction is to only expose what we’re interested and whats relevant and hide any irrelevant attributes or methods.
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
/* ---------------------ENCAPSULATION: -------------------------
Allows the control of who can SEE and USE the attributes and method given to certain class.
This is possible trough access modifiers:  public, private, protected and  default (no keyword). */
var BendingArts = /** @class */ (function () {
  function BendingArts(nation, jing, teacher, numberOfAvatar) {
    this.nation = nation;
    this.jing = jing;
    this.teacher = teacher;
    this.numberOfAvatar = numberOfAvatar;
    this.typeOfBending = this.typeOfBending;
  }
  BendingArts.prototype.bendingTechnique = function () {
    return "Demonstration of bending art";
  };
  BendingArts.prototype.subBendingTechnique = function () {
    return "Access to secret bending Technique";
  };
  Object.defineProperty(BendingArts.prototype, "numberOfAvatarBender", {
    get: function () {
      return this.numberOfAvatar;
    },
    set: function (numberOfAvatar) {
      this.numberOfAvatar = numberOfAvatar;
    },
    enumerable: false,
    configurable: true,
  });
  return BendingArts;
})();
/*------------------ GET and SET methods-----------------
Necessary for accessing and modifying private data
 */
/*---------------------INHERITANCE: -------------------------
 Describes the relationship between the parent class and its child classes.
  Just like in genetics, in the parent passes attributes and methods to their child, and the child can possess additional unique ones.
Helps reuse, customize and enhance existing code*/
var FireBender = /** @class */ (function (_super) {
  __extends(FireBender, _super);
  function FireBender(nation, jing, teacher, numberOfAvatar) {
    return _super.call(this, nation, jing, teacher, numberOfAvatar) || this;
  }
  FireBender.prototype.showFireBending = function () {
    return "Person is fire bending";
    //Adding a new method to the child class
  };
  return FireBender;
})(BendingArts);
var fireBender = new FireBender("Fire Nation", "positive jing", "dragons", 2);
// console.log(fireBender);
// console.log(fireBender.bendingTechnique());
// console.log(fireBender.showFireBending());
var WaterBender = /** @class */ (function (_super) {
  __extends(WaterBender, _super);
  function WaterBender(nation, jing, teacher, numberOfAvatar) {
    return _super.call(this, nation, jing, teacher, numberOfAvatar) || this;
  }
  WaterBender.prototype.showBloodBending = function () {
    return "Person is blood bending";
  };
  return WaterBender;
})(BendingArts);
var waterBender = new WaterBender(
  "North and South Pole",
  "Negative jing",
  "The Moon",
  2
);
/*---------------------POLYMORPHISM: -------------------------
Polymorphism means a child class can define its own unique behavior and still share the same methods or behavior of its parent class.
 Polymorphism allows for class specific behavior and more reusable code. A single function can operate on multiple types of data.
*/
var benders = [fireBender, waterBender];
for (var _i = 0, benders_1 = benders; _i < benders_1.length; _i++) {
  var bender = benders_1[_i];
  console.log(bender.bendingTechnique());
  if (bender instanceof FireBender) {
    console.log(bender.showFireBending());
  } else if (bender instanceof WaterBender) {
    console.log(bender.showBloodBending());
  }
  // console.log(bender); And for each iteration of the loop, you would see the string "Demonstration of bending art" along with it's corresponding bending technique
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
