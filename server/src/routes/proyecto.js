import { Router } from "express";
import User from "../models/proyecto.js"


//Routes
const router = Router();

//Solicitudes de tipo GET
router.get('/users', async(req,res)=>{
    //const users = await User.find();
    res.send("Funciona")
})

export default router;