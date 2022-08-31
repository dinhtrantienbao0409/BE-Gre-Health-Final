const User = require("../databases/models/UserModel");
const { USER_ROLE } = require("../constants/role");
const { hash, comparePassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password, role = USER_ROLE } = req.body;

    if (!email || !password) return res.status(400).send("MISSING_FIELD");

    const user = await User.findOne({ email: req.body.email });

    if (user) return res.status(400).send("EXISTED_FIELD");

    const hashedPassword = await hash(password);

    const createdUser = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    if (!createdUser) return res.status(500);

    return res.status(200).send(createdUser);
  } catch (error) {
    console.log("🚀 ~ file: auth.js ~ line 11 ~ router.get ~ error", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send("MISSING_PARAMS");

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send("USER_NOTFOUND");

    const result = await comparePassword(password, user.password);

    if (!result) res.status(400).send("INVALID_PASSWORD");

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

    return res.status(200).json(token).send("LOGIN_SUCCESSFULLY");
  } catch (error) {
    console.log(
      "🚀 ~ file: authController.js ~ line 56 ~ login ~ error",
      error
    );
  }
};

const deleteUserByEmail = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email) return res.status(400).send("NOTFOUND");

  const deletedUser = await User.deleteOne({ email: req.body.email });
  return res.status(200).send(deletedUser);
};

const findAllUser = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const users = await User.paginate({}, options);

    return res.status(200).send(users);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 32 ~ getAllDoctors ~ error",
      error
    );
  }
};

module.exports = { register, login, deleteUserByEmail, findAllUser };
