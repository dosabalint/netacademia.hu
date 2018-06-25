export const LANDING_FIRST = "LANDING_FIRST";
export const ERROR_ACTION = "ERROR";

export const state = () => ({
  cookieOK: false,
  isLandingFirstShow: true,
  url: {
    base: process.env.baseUrl,
    backend: process.env.backendUrl,
    newBackend: 'https://pedellus2.azurewebsites.net',
    user: "/api/Profile/1.0.0/profile",
    login: "/Account/Logon",
    logout: "/Account/LogOffAjax",
    courses: "/api/Courses/1.0.0/CourseCards",
    commingSoonCourses: "/api/Course/GetInProgressComingSoon",
    courseCardPicture: '/Picture/CourseCard',
    categories: "/api/Courses/1.0.0/PublicCategories"
  }
});

export const actions = {
  [ERROR_ACTION]: ({ commit, dispatch }, err) => {
    console.warn(err);
  }
};

export const mutations = {
  [LANDING_FIRST](state) {
    state.isLandingFirstShow = false;
  },
};
