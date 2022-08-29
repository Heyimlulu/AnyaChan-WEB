import HomePage from "../pages/index.vue";
import TermsOfServices from "../pages/Terms-of-Service.vue";
import PageNotFound from "../pages/PageNotFound.vue"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/terms-of-service",
        name: "Terms Of Services",
        component: TermsOfServices,
    },
    {
        path: "/:path(.*)",
        component: PageNotFound,
    }
];

export default routes;