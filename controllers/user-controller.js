import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";
import { register } from "./auth-controller.js";
export const userInfo = async (req, res, next) => {
  try {
    const user = req.user;
    res.json({ user });
  } catch (err) {
    next(err);
  }
};
export const updateUserInfo = async (req, res, next) => {
  try {
    const {
      userDisplayName,
      userBio,
      userProfilePic,
      userLocation,
      userAddress,
    } = req.body;
    //validate
    const fieldsToValidate = [
      { value: userDisplayName, name: "Display Name" },
      { value: userBio, name: "User bio" },
      { value: userProfilePic, name: "Profile pic" },
      { value: userLocation, name: "Location" },
      { value: userAddress, name: "Address" },
    ];

    for (const field of fieldsToValidate) {
      if (field.value && typeof field.value !== "string") {
        return next(createError(400, `${field.name} must be a string`));
      }
    }
    if (userDisplayName.length < 6) {
      return createError(400, "Display name at least 6 charactors.");
    }

    const user = await prisma.users.findFirst({
      where: {
        userId: req.user.userId,
      },
    });
    if (!user) {
      return createError(400, "User not found");
    }
    //update user
    const updatedUser = await prisma.users.update({
      where: {
        userId: user.userId,
      },
      data: {
        userDisplayName,
        userBio,
        userProfilePic,
        userLocation,
        userAddress,
      },
    });
    //check user ready
    if (
      updatedUser.userDisplayName !== null &&
      updatedUser.userDisplayName !== "" &&
      updatedUser.userBio !== null &&
      updatedUser.userBio !== "" &&
      updatedUser.userProfilePic !== null &&
      updatedUser.userProfilePic !== "" &&
      updatedUser.userLocation !== null &&
      updatedUser.userLocation !== "" &&
      updatedUser.userAddress !== null &&
      updatedUser.userAddress
    ) {
      await prisma.users.update({
        where: {
          userId: updatedUser.userId,
        },
        data: {
          userIsReady: true,
        },
      });
    } else {
      await prisma.users.update({
        where: {
          userId: updatedUser.userId,
        },
        data: {
          userIsReady: false,
        },
      });
    }
    //return user
    const returnUser = await prisma.users.findFirst({
      where: {
        userId: updatedUser.userId,
      },
    });

    res.json({ user: returnUser, message: "User updating" });
  } catch (err) {
    next(err);
  }
};
