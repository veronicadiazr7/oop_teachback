//Create Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BendingArts = /** @class */ (function () {
    function BendingArts(nation, jing, teacher, numberOfAvatar, bendingTechnique, subBendingTechnique) {
        (this.nation = nation),
            (this.jing = jing),
            (this.teacher = teacher),
            (this.numberOfAvatar = numberOfAvatar),
            this.bendingTechnique();
        this.subBendingTechnique();
        // / this.subBendingTechnique () = subBendingTechnique, gives me error
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
        configurable: true
    });
    return BendingArts;
}());
//Inheritance
var FireBender = /** @class */ (function (_super) {
    __extends(FireBender, _super);
    function FireBender(nation, jing, teacher, numberOfAvatar, bendingTechnique, subBendingTechnique) {
        return _super.call(this, nation, jing, teacher, numberOfAvatar, bendingTechnique, subBendingTechnique) || this;
    }
    return FireBender;
}(BendingArts));
//super avoids the repetitive use  "this."" keyword calling the attributes of the parent class
// the constructor must have the same number of attributes as the parent class.
//alternative to give values
// const FireBender = new BendingArts(
//   "Fire Nation",
//   "positive jing",
//   "dragons",
//   2,
// Fire Bending,
//["Light Bending", "Combustion", "Redirection"]
// );
// console.log(FireBender.nation); che ck if it was saved
// change number of avatars - encapsulation of keeping info safe
// FireBender. numberOfAvatarBender = 5;
//Abrastraction- Only have the attributes required to perform the methods
//Encapsulation - Determines what can be accessed: public, private
// atributes of an objects should be only be accessed inside of the class
