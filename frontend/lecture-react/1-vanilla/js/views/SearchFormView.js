import {on, qs} from "../helpers.js";
import View from "./View";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible
      ? "block"
      : "none";
  }

  bindEvents() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    on(this.element, "submit", event => this.handleSubmit(event));
    on(this.resetElement, "click", () => this.handleReset());
  }

  handleKeyup() {
    console.log(tag, "handleKeyup", this.inputElement.value);
    const {value} = this.inputElement;
    this.showResetButton(value.length > 0);

    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, "handleSubmit");
    const {value} = this.inputElement;
    this.emit("@submit", {value});
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.emit("@reset");
  }
}