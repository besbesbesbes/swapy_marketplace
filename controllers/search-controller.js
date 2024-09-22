import createError from "../utils/create-error.js";
import prisma from "../config/prisma.js";
export const searchBy = async (req, res, next) => {
  try {
    const { v, c, i, a } = req.query;
    const assets = await prisma.assets.findMany({
      where: {
        assetName: {
          contains: v || "",
        },
        assetCategory: c || undefined,
        userId: i ? Number(i) : undefined,
        assetId: a ? Number(a) : undefined,
        assetIsReady: true,
        user: {
          userIsReady: true,
        },
      },
      orderBy: {
        assetId: "desc",
      },
      include: {
        AssetPic: true,
        user: true,
      },
    });
    res.json({ message: "Search by", assets });
  } catch (err) {
    next(err);
  }
};
export const searchAll = async (req, res, next) => {
  try {
    const assets = await prisma.assets.findMany({
      where: {
        assetIsReady: true,
        user: {
          userIsReady: true,
        },
      },
      orderBy: {
        assetId: "desc",
      },
      include: {
        AssetPic: true,
        user: true,
      },
    });
    res.json({ message: "Search all", assets });
  } catch (err) {
    next(err);
  }
};
export const searchHighlight = async (req, res, next) => {
  try {
    const assets = await prisma.assets.findMany({
      where: {
        assetIsReady: true,
        user: {
          userIsReady: true,
        },
      },
      include: {
        AssetPic: true,
        user: true,
      },
    });
    const assetsWithCounts = assets.map((asset) => ({
      ...asset,
      totalOfferorSwaperCount: asset.assetOfferorCount + asset.assetSwaperCount,
    }));
    const sortedAssets = assetsWithCounts.sort(
      (a, b) => b.totalOfferorSwaperCount - a.totalOfferorSwaperCount
    );
    const topAssets = sortedAssets.slice(0, 3);
    res.json({ message: "Search highlight", topAssets });
  } catch (err) {
    next(err);
  }
};
