import app from "./src/app";
import { PORT } from "./src/config";



app.listen(PORT, () => {
  console.log(`Corriendo en el puerto ${PORT}`);
});
