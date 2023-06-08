const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/session");
const {
  userRegister,
  userLogin,
  userGet,
  logoutUser,
  loginSuccess,
  changePassword,
  newPassword,
} = require("../controllers/authController");
const {
  validatorRegisterUser,
  validatorLoginUser,
} = require("../validators/authValidator");
router.get("/", userGet);

//Debe tener 8 caracteres, una mayuscula, un numero y un caracter especial
router.post("/register", validatorRegisterUser, userRegister);

router.post("/login", validatorLoginUser, userLogin);
router.get("/loginLocal/success", authMiddleware, loginSuccess);
router.get("/logoutLocal", logoutUser);
router.post("/resetPassword", changePassword);
router.put("/newPassword", newPassword);

module.exports = router;
