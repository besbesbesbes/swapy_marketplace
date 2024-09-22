import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";
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
      updatedUser.userBio !== null &&
      updatedUser.userProfilePic !== null &&
      updatedUser.userLocation !== null &&
      updatedUser.userAddress !== null
    ) {
      await prisma.users.update({
        where: {
          userId: updatedUser.userId,
        },
        data: {
          userIsReady: true,
        },
      });
    }
    //return user
    const returnUser = await prisma.users.findFirst({
      where: {
        userId: updatedUser.userId,
      },
    });

    res.json({ user: returnUser });
  } catch (err) {
    next(err);
  }
};
