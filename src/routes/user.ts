import { Router } from "express";
import { arrayWithNamesMonths } from "../data-to-create";
import { prisma } from "../db";

const route = Router();

///////////// CREAR USUARIO NUEVO /////////////
route.post("/create", async (req, res) => {
  try {
    const { name, email, phone, description, activityId } = req.body;
    ////////////////////////////////////
    await prisma.user.create({
      data: {
        // Información personal
        name,
        email,
        phone,
        description,
        //Informacion de actividad
        active: true,
        activity: {
          connect: {
            id: activityId,
          },
        },
        //Informacion de pago
        calendar: {
          create: {
            months: {
              create: arrayWithNamesMonths.map((str) => {
                return {
                  monthName: str,
                  addData: "hoy",
                  addAdmin: "Alguien",
                  isPay: false,
                  mothodPay: "",
                  pricePay: 0,
                };
              }),
            },
          },
        },
      },
    });
    ////////////////////////////////////
    res.send("me gusta la falopa ");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

/////////////  /////////////

route.get("/get-user", async (_req, res) => {
  const users = await prisma.user.findUnique({
    where: {
      id: Number(_req.query.USER),
    },
    include: {
      activity: true,
      calendar: {
        include:{
          months:true
        }
      },
    },
  });

  res.send(users);
});

route.get("/get-funcional", async (_req, res) => {
  const users = await prisma.user.findMany({
    where: {
      activity: {
        nameActivity: "Funcional",
      },
    },
  });

  res.send(users);
});


export default route;
