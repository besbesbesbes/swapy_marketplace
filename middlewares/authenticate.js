import prisma from "../config/prisma.js";
import createError from "../utils/create-error.js";
import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return createError(401, "Unauthorized");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return createError(401, "Unauthorized token");
    }
    //payload
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.users.findFirst({
      where: {
        userId: jwtPayload.id,
      },
    });
    if (!user) {
      return createError(401, "Unauthorized user");
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

export default authenticate;
