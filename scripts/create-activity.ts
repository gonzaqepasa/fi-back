import { prisma } from "../src/db";

console.log("CREAR ACTIVIDAD");

async function createActivity() {
  try {
    const activityCreate = await prisma.activity.createMany({
      data: [
        { nameActivity: "Funcional", modality: "3 Días", price: 3200 },
        { nameActivity: "Funcional", modality: "2 Días", price: 3000 },
        { nameActivity: "Funcional", modality: "Libre", price: 3500 },
        { nameActivity: "Taekwondo", modality: "Adultos", price: 2300 },
        { nameActivity: "Taekwondo", modality: "Infantiles", price: 2300 },
        { nameActivity: "Taekwondo", modality: "Yamila", price: 2300 },
        { nameActivity: "Ritmo Kids", modality: "3 Días", price: 2500 },
        { nameActivity: "Zumba", modality: "3 Días", price: 2500 },
        { nameActivity: "Power Box", modality: "3 Días", price: 2500 },
        { nameActivity: "Kick Boxing", modality: "3 Días", price: 2300 },
      ],
    });
    console.log(activityCreate);
  } catch (err) {
    console.log(err);
  }
}

createActivity();
