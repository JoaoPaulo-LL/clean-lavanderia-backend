import {
  getUserByIdService,
  createUserService,
} from "../services/user.service.js";

export const getUserById = async (req, resp) => {
  try {
    const userId = req.params.id;

    const user = await getUserByIdService(userId);

    if (user) {
      resp.status(200).json(user);
    } else {
      resp.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    throw error;
  }
};

export const createUser = async (req, resp) => {
  try {
    const userObj = req.body;

    const newUser = await createUserService(userObj);

    resp.status(201).json(newUser);
  } catch (error) {
    resp
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
