import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    return {
      login: true,
      data: decode,
    };
  } else {
    return {
      login: false,
      data: "error",
    };
  }
};

export { verifyToken };
