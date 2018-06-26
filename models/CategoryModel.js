export const CATEGORY_ULTIMATE_NAME = "Ultimate";
export const CATEGORY_ULTIMATE_STRING = "NetAcademia Ultimate";

export class CategoryModel {
  constructor(options) {
    this.text = options.title;
    this.value = options.name;
  }
}
