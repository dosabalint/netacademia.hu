import {
  COURSES_LOAD_ALL_REQ_ACTION,
} from "./courses";
import {
  CATEGORIES_LOAD_ALL_REQ_ACTION,
} from "./categories";

export const ERROR_ACTION = "ERROR";

export const state = () => ({
  cookieOK: false,
  url: {
    base: process.env.baseUrl,
    backend: process.env.backendUrl,
    user: "/api/Profile/1.0.0/profile",
    login: "/Account/Logon",
    logout: "/Account/LogOffAjax",
    courses: "/api/Courses/v2/CourseCard",
    categories: "/api/Courses/v2/Categories",
    courseFull: "/api/Courses/v2/Course",
    courseCardPicture: "/Picture/CourseCard",
    newBackend: "https://pedellus2.azurewebsites.net",
    commingSoonCourses: "/api/Course/GetInProgressComingSoon"
  }
});

export const actions = {
  [ERROR_ACTION]: ({ commit, dispatch }, err) => {
    console.warn(err);
  },
  // nuxtServerInit(vuexCtx, ctx) {
  //   // erre most mar nincs szuksegunk,
  //   // mert atkerult minden a nuxtClientInit-be
  // },
  async nuxtClientInit(vuexCtx) {
    await vuexCtx.dispatch(`courses/${COURSES_LOAD_ALL_REQ_ACTION}`);
    await vuexCtx.dispatch(`categories/${CATEGORIES_LOAD_ALL_REQ_ACTION}`);
  }
};
