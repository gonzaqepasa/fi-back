import { prisma } from "../src/db";

console.log("CREAR ACTIVIDAD");

 async function createActivity() {
  try {
    const activityCreate = await prisma.activity.createMany({
      data: [
        { nameActivity: "Funcional", modality: "3 Días" },
        { nameActivity: "Funcional", modality: "2 Días" },
        { nameActivity: "Funcional", modality: "Libre" },
      ],
    });
    console.log(activityCreate);
  } catch (err) {
    console.log(err);
  }
} 

createActivity();
