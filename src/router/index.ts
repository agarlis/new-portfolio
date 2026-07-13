import Home from "@/pages/home/Home.vue";
import Projects from "@/pages/projects/projects.vue";
import ProjectDetail from "@/pages/projects/ProjectDetail.vue";
import About from "@/pages/about/about.vue";
import Contact from "@/pages/contact/contact.vue";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
history: createWebHashHistory(import.meta.env.BASE_URL),

routes: [
{
path: "/",
name: "home",
component: Home,
},
{
path: "/projects",
name: "projects",
component: Projects,
},
{
path: "/projects/:slug",
name: "project-detail",
component: ProjectDetail,
},
{
path: "/about",
name: "about",
component: About,
},
{
path: "/contact",
name: "contact",
component: Contact,
},
{
path: "/:pathMatch(.*)*",
redirect: "/",
},
],
});
