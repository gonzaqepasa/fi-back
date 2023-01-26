import { prisma } from "../db";
import { Router } from "express";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const { activity } = req.query;

    let data;
    activity
      ? (data = {
          where: {
            nameActivity: String(activity),
          },
        })
      : (data = undefined);

    const activities = await prisma.activity.findMany(data);
    res.send(activities);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

route.put("/price-edit", async (req, res) => {
  try {
    const { id, price } = req.body;

    const activities = await prisma.activity.update({
      where: { id: Number(id) },
      data: {
        price: Number(price),
      },
    });

    res.send(activities);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

export default route;
