import express from "express";
import CteController from "../controller/cteController.js";


const router = express.Router();

router
    .get('/api/v1/receita-federal/cte', CteController.obterCTeInformacoes);


export default router;