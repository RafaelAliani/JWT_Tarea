import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_ACCESS_SECRET);
};

export { generateToken };
