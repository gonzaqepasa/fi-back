import app from "./src/app";

const PORT = process.env.PORT || 3001;
// const DB_USER = process.env.DB_USER || "localhost";

app.listen(PORT, () => {
  console.log(`Corriendo en el puerto ${PORT}`);
});
