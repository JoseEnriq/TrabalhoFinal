import { Router  } from "express";
import * as categoriaController from "../controllers/categoriaController";

const router = Router();

router.get("/", (req, res) => {
    res.send("Api de veiculos conectada");
});

router.post("/categoria", categoriaController.postCategoria);
router.get("/categoria", categoriaController.getCategoria);

export default router;