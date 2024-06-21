import { Router } from "express";
import createAdmin from "../controllers/createAdmin.js";
import login from "../controllers/login.admin.js";
import logout from "../controllers/logout.js"
import authenticate from "../middleware/auth.js";
import createEmploye from "../controllers/createEmploye.js";
import empDetails from "../controllers/empDetails.js";
const routes = Router()

routes.route("/admin")
      .post(createAdmin)

routes.route("/createemploye")
      .post(authenticate,createEmploye) 
      
routes.route("/getemp")
       .get(authenticate,empDetails)      
routes.route("/login")
      .post(login)

routes.route("/logout")
      .post(authenticate,logout)      
export default routes;