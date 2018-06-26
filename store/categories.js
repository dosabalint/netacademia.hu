import { ERROR_ACTION } from "./index";
import { CATEGORY_ULTIMATE_NAME, CategoryModel } from "../models/CategoryModel";
export const CATEGORIES_LOAD_ALL_REQ_ACTION = "LOAD_ALL_REQ";

export const CATEGORIES_LOAD_ALL_REQ_MUTATION = "LOAD_ALL_REQ_MUTATION";
export const CATEGORIES_LOAD_ALL_SUCCESS_MUTATION = "LOAD_ALL_SUCCESS_MUTATION";
export const CATEGORIES_LOAD_ALL_ERROR_MUTATION = "LOAD_ALL_ERROR_MUTATION";

export const state = () => ({
  initiated: false,
  loading: false,
  collection: []
});

export const actions = {
  [CATEGORIES_LOAD_ALL_REQ_ACTION](ctx) {
    ctx.commit(CATEGORIES_LOAD_ALL_REQ_MUTATION);
    return this.$axios
      .$get(ctx.rootState.url.categories)
      .then(categories => ctx.commit(CATEGORIES_LOAD_ALL_SUCCESS_MUTATION, categories))
      .catch(err => {
        ctx.commit(CATEGORIES_LOAD_ALL_ERROR_MUTATION);
        ctx.dispatch(ERROR_ACTION, err, { root: true });
      });
  }
};

export const mutations = {
  [CATEGORIES_LOAD_ALL_REQ_MUTATION](state) {
    state.loading = true;
  },
  [CATEGORIES_LOAD_ALL_SUCCESS_MUTATION](state, categories) {
    state.loading = false;
    state.collection = categories.map(c => new CategoryModel(c));
    state.collection.unshift({ text: CATEGORY_ULTIMATE_NAME, value: "" });
    state.initiated = true;
  },
  [CATEGORIES_LOAD_ALL_ERROR_MUTATION](state) {
    state.loading = false;
  }
};
