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
    logout: "/api/v1/Account/LogOut",
    courses: "/api/Courses/1.0.0/CourseCards",
    commingSoonCourses: "/api/Courses/1.0.0/GetInProgressComingSoon",
    courseCardPicture: '/Picture/CourseCard',
    categories: "/api/Courses/1.0.0/PublicCategories",
    videos: "/api/v1/Videos",
    videosPopup: "/api/v1/Videos/Player",
    vimeoPlayer: "https://player.vimeo.com/video"
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
