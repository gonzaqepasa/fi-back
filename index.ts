import app from "./src/app";

const PORT:number = 3001
app.listen(PORT,()=>{
    console.log(`Corriendo en el puerto ${PORT}`)
})