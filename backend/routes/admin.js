import { Router } from "express";
import createAdmin from "../controllers/createAdmin.js";
import login from "../controllers/login.admin.js";
import logout from "../controllers/logout.js"
const routes = Router()

routes.route("/admin")
      .post(createAdmin)

routes.route("/login")
      .post(login)

routes.route("/logout")
      .post(logout)      
export default routes;