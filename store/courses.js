import { ERROR_ACTION } from "./index";
import { CourseModel } from "../models/CourseModel";

export const COURSES_LOAD_ALL_REQ_ACTION = "LOAD_ALL_REQ";

export const COURSES_LOAD_ALL_REQ_MUTATION = "LOAD_ALL_REQ_MUTATION";
export const COURSES_LOAD_ALL_SUCCESS_MUTATION = "LOAD_ALL_SUCCESS_MUTATION";
export const COURSES_LOAD_ALL_ERROR_MUTATION = "LOAD_ALL_ERROR_MUTATION";

export const state = () => ({
  initiated: false,
  loading: false,
  collection: []
});

export const actions = {
  [COURSES_LOAD_ALL_REQ_ACTION](ctx) {
    ctx.commit(COURSES_LOAD_ALL_REQ_MUTATION);
    return this.$axios
      .$get(ctx.rootState.url.courses)
      .then(courses => ctx.commit(COURSES_LOAD_ALL_SUCCESS_MUTATION, courses))
      .catch(err => {
        ctx.commit(COURSES_LOAD_ALL_ERROR_MUTATION);
        ctx.dispatch(ERROR_ACTION, err, { root: true });
      });
  }
};

export const mutations = {
  [COURSES_LOAD_ALL_REQ_MUTATION](state) {
    state.loading = true;
  },
  [COURSES_LOAD_ALL_SUCCESS_MUTATION](state, courses) {
    state.loading = false;
    state.collection = courses
      .filter(c => c.userFriendlyUrl && c.userFriendlyUrl !== "2018fed-fed") //TODO: torolni, ha jo az adat
      .map(c => new CourseModel(c));
    state.initiated = true;
  },
  [COURSES_LOAD_ALL_ERROR_MUTATION](state) {
    state.loading = false;
  }
};

export const getters = {
  getByUrl: (state) => (url) => state.collection.find(c => c.userFriendlyUrl === url)
};
