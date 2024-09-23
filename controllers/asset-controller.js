import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";
export const getAsset = async (req, res, next) => {
  try {
    const user = req.user;
    //find assets
    const assets = await prisma.assets.findMany({
      where: {
        userId: user.userId,
      },
    });
    res.json({ assets });
  } catch (err) {
    next(err);
  }
};
export const createAsset = async (req, res, next) => {
  try {
    const user = req.user;
    const {
      assetName,
      assetCategory,
      assetBrand,
      assetCondition,
      assetNote,
      assetThumbnail,
    } = req.body;
    // validate
    if (!assetName || !assetCategory || !assetCondition || !assetThumbnail) {
      return createError(400, "Asset info should be provided");
    }
    const fieldsToValidate = [
      { value: assetName, name: "Asset name" },
      { value: assetCategory, name: "Asset category" },
      { value: assetBrand, name: "Asset brand" },
      { value: assetCondition, name: "Asset condition" },
      { value: assetNote, name: "Asset note" },
      { value: assetThumbnail, name: "Asset thumbnail" },
    ];
    for (const field of fieldsToValidate) {
      if (field.value && typeof field.value !== "string") {
        return next(createError(400, `${field.name} must be a string`));
      }
    }
    //create asset
    const updatedAsset = await prisma.assets.create({
      data: {
        userId: user.userId,
        assetName,
        assetCategory,
        assetBrand,
        assetCondition,
        assetNote,
        assetThumbnail,
      },
    });
    res.json({ message: updatedAsset });
  } catch (err) {
    next(err);
  }
};
export const updateAsset = async (req, res, next) => {
  try {
    res.json({ message: "Update asset" });
  } catch (err) {
    next(err);
  }
};
