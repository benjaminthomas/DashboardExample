import Incoming from "../components/dashboard/screens/isuzu/incoming";
import Outgoing from "../components/dashboard/screens/isuzu/outgoing";
import Metrics from "../components/dashboard/screens/metrics";
import Volkswagen from "../components/dashboard/screens/volkswagen";

const coreRoutes = [
  {
    path: "dashboard/metrics",
    title: "Metrics",
    component: Metrics,
  },
  {
    path: "dashboard/volkswagen",
    title: "Volkswagen",
    component: Volkswagen,
  },
  {
    path: "dashboard/isuzu/incoming",
    title: "Isuzu",
    component: Incoming,
  },
  {
    path: "dashboard/isuzu/outgoing",
    title: "Isuzu",
    component: Outgoing,
  },
];

const routes = [...coreRoutes];
export default routes;
