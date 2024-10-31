import RouterBuilder from "./router-builder.js";
import { exampleAction } from "./controllers/example.js";
import { Score_return } from "./controllers/score-endpoint.js";     
const router = new RouterBuilder();

router.addGetEndpoint('/example', exampleAction);


router.addGetEndpoint("/return_score_getpoint",Score_return)
export default router.router;
