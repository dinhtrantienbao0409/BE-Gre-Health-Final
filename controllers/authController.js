const User = require("../databases/models/UserModel");
const { hash, comparePassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role)
      return res.status(400).send("MISSING_FIELD");

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

  if (!email || !password) return res.status(400).send("MISSING_FIELD");

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

module.exports = { register, login };
