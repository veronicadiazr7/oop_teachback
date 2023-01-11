//Create Class

class BendingArts {
  public nation: string;
  public jing: string;
  public teacher: string;
  private numberOfAvatar: number;
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
    numberOfAvatar: number,
    bendingTechnique: string,
    subBendingTechnique: string
  ) {
    (this.nation = nation),
      (this.jing = jing),
      (this.teacher = teacher),
      (this.numberOfAvatar = numberOfAvatar),
      this.bendingTechnique();
    this.subBendingTechnique();
    // / this.subBendingTechnique () = subBendingTechnique, gives me error
  }
  get numberOfAvatarBender() {
    return this.numberOfAvatar;
  }
  set numberOfAvatarBender(numberOfAvatar: number) {
    this.numberOfAvatar = numberOfAvatar;
  }
}

//Inheritance
class FireBender extends BendingArts {
  constructor(
    nation: string,
    jing: string,
    teacher: string,
    numberOfAvatar: number,
    bendingTechnique: string,
    subBendingTechnique: string
  ) {
    super(
      nation,
      jing,
      teacher,
      numberOfAvatar,
      bendingTechnique,
      subBendingTechnique
    );
  }
}

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
