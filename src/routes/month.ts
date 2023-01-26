import { prisma } from "../db";
import { Router } from "express";

const route = Router();

route.get("/asd", (_req, res) => {
  res.send("hola");
});

route.put("/pay-month", async (req, res) => {
  try {
    const { id, addAdmin, mothodPay } = req.body;
    if (!id || !addAdmin || !mothodPay) {
      throw new Error("Faltan argumentos");
    }
    const fecha = new Date();
    console.log(id, addAdmin, mothodPay);
    const addData = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()} Hs`;
    const turno = await prisma.month.update({
      where: {
        id,
      },
      data: {
        isPay: true,
        addData,
        addAdmin,
        mothodPay,
      },
    });
    res.send(turno);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

export default route;
