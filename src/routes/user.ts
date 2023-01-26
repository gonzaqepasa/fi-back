import { Router } from "express";
import { arrayWithNamesMonths } from "../data-to-create";
import { prisma } from "../db";

const route = Router();

///////////// LLAMAR USUARIOS (QUERY) /////////////

route.get("/", async (req, res) => {
  try {
    const { activity } = req.query;
    console.log(activity);
    let data;
    activity
      ? (data = {
          where: {
            activity: {
              nameActivity: String(activity),
            },
          },
          include: {
            activity: true,
          },
        })
      : (data = undefined);

    const users = await prisma.user.findMany(data);

    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

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
              create: arrayWithNamesMonths.map((obj) => {
                return {
                  monthNum: obj.num,
                  monthName: obj.name,
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
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(_req.query.USER),
      },
      include: {
        activity: true,
        calendar: {
          include: {
            months: true,
          },
        },
      },
    });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

route.put("/visibility-user", async (_req, res) => {
  const { id, active } = _req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        active:!active,
      },
    });

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err)
  }
});



route.put("/description-edit", async (_req, res) => {
  const { id, description } = _req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err)
  }
});


export default route;
