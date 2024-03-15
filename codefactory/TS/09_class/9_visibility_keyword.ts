/**
 * Visibility Keyword
 * public, protected, private
 * TS에만 존재하는 개념.
 * 최근 JS에는 #이 존재하긴 함.
 */

class PropertyTestParent {
  public publicProperty = "public property";
  protected protectedProperty = "protected property";
  private privateProperty = "private property";
  #jsPrivateProperty = "js private property";

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty;
  }
}

class PropertyTestChild extends PropertyTestParent {
  test() {
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty;
    // this.#jsPrivateProperty
  }
}

const instance = new PropertyTestChild();

instance.publicProperty;
// instance.
