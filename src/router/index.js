import Vue from "vue";
import VueRouter from "vue-router";
import RecipeList from "../views/RecipeList.vue";
import RecipeCreate from "../views/RecipeCreate.vue";
import RecipeShow from "../views/RecipeShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "recipe-list",
    component: RecipeList
  },
  {
    path: "/recipe/create",
    name: "recipe-create",
    component: RecipeCreate
  },
  {
    path: "/recipe/:id",
    name: "recipe-show",
    component: RecipeShow,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
