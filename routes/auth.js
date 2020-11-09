import { signUp, signIn } from "../controllers/users";
import verifyRegistration from "../middleware/verifyRegistration";

export default app => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/signup", [verifyRegistration], signUp);
  app.post("/signin", signIn);
};