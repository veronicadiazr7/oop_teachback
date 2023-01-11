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
  FireBender.prototype.showBending = function () {
    return "Fire bending";
  };
  return FireBender;
})(BendingArts);
var fireBender = new FireBender("Fire Nation", "positive jing", "dragons", 2);
console.log(fireBender);
console.log(fireBender.bendingTechnique());
console.log(fireBender.showBending());
// const WaterBender = new BendingArts(
//   "North and South Pole",
//   "negative",
//   "The Moon",
//   2
// );
/* giving unique attributes
class FireBender extends BendingArts {
  constructor(agniKai: string) {
    super();
    this.agniKai = agniKai;
  }
  private agniKai: string;
  public fireBending(): string {
    return "Demonstration of fire bending";
  }
}

 */
/*---------------------POLYMORPHISM: -------------------------
Polymorphism means a child class can define its own unique behavior and still share the same methods or behavior of its parent class.
 Polymorphism allows for class specific behavior and more reusable code. A single function can operate on multiple types of data.
*/
