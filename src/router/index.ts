import HomePage from "../pages/index.vue";
import TermsOfServices from "../pages/Terms-of-Service.vue";

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
];

export default routes;