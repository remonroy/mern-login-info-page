const {
  userRegister,
  userLogin,
  updatedUserProfile,
  userDelete,
  getUserDetails,
  getAllUsers,
  logOutUser,
  getSingleUsers,
} = require("../controller/userControlle");
const router = require("express").Router();
const upload = require("../middleware/multer.js");

router.route("/register").post(upload.single("avatar"), userRegister);
router.route("/login").post(userLogin);
router.route("/update/:id").put(upload.single("avatar"), updatedUserProfile);
router.route("/delete/:id").delete(userDelete);
router.route("/me/:id").get(getUserDetails);
router.route("/allUser").get(getAllUsers);
router.route("/getSingleUser/:id").get(getSingleUsers);
router.route("/logOut").get(logOutUser);

module.exports = router;
