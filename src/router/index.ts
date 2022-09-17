import HomePage from "../pages/index.vue";
import TermsOfServices from "../pages/Terms-of-Service.vue";
import Policies from "../pages/Policies.vue";
import PageNotFound from "../pages/PageNotFound.vue"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/terms-of-service",
        name: "Terms Of Service",
        component: TermsOfServices,
    },
    {
        path: "/privacy-policy",
        name: "Privacy Policy",
        component: Policies,
    },
    {
        path: "/:path(.*)",
        component: PageNotFound,
    }
];

export default routes;