import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created new user",
      data: response,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

export const login = async (req, res) => {
  try {
    const token = await userService.getUserByEmail(req.body.email);
    return res.status(200).json({
      success: true,
      message: "Successfully logged in",
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
