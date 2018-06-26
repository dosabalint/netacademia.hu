import { CATEGORY_ULTIMATE_STRING } from "./CategoryModel";

export const COURSE_PROMOTED_STRING = "#kiemelt#";
export const COURSE_PROMOTED_PROP = "isPromoted";
export const COURSE_COMINGSOON_PROP = "isComingSoon";
export const COURSE_RUNNING_PROP = "isRunning";
export const COURSE_PRELIMINARY_PROP = "isPreliminary";
export const COURSE_INDEX_PROP = "index";

export class CourseModel {
  constructor(data) {
    Object.assign(this, data);

    this._fixLastUpdate();
    this._fixCategories();
    this._generatePromoted();
    this._generateComingSoon();
    this._generateIsRunning();
    this._generateTrainerNamesAndIndex();
  }

  _fixLastUpdate() {
    if (!this.lastUpdate) {
      this.lastUpdate = new Date(this.endDate);
    } else {
      this.lastUpdate = new Date(this.lastUpdate);
    }
  }

  _fixCategories() {
    if (
      this.allCategories.length === 0 ||
      this.mainCategoryTitle === CATEGORY_ULTIMATE_STRING
    ) {
      this.allCategories.push(this.mainCategoryTitle);
    }
  }

  _generatePromoted() {
    this[COURSE_PROMOTED_PROP] =
      this.labels4Search &&
      this.labels4Search.indexOf(COURSE_PROMOTED_STRING) !== -1;
  }

  _generateComingSoon() {
    this[COURSE_COMINGSOON_PROP] =
      Date.now() <= new Date(this.startDate) && !this.isPreliminary;
  }

  _generateIsRunning() {
    const now = Date.now();
    this[COURSE_RUNNING_PROP] =
      new Date(this.startDate) <= now && now <= new Date(this.endDate);
  }

  _generateTrainerNamesAndIndex() {
    this.trainerNames = this.trainerNames.join(", ");
    this[COURSE_INDEX_PROP] = [
      "title",
      "subTitle",
      "description",
      "labels4Search",
      "trainerNames",
      "userFriendlyUrl"
    ].reduce((a, currProp) => {
      return a.concat(this[currProp]).toLowerCase();
    }, "");
  }
}
