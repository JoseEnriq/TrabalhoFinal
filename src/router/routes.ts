import { Router  } from "express";
import * as categoriaController from "../controllers/categoriaController";
import * as modeloController from "../controllers/modeloController";
import * as marcaController from "../controllers/marcaController";
import * as veiculoController from "../controllers/veiculoController";
import * as manutencaoController from "../controllers/manutencaoController";
import * as contratoLocacaoController from "../controllers/contratoLocacaoController";
import * as ocorrenciaController from "../controllers/ocorrenciaController";
import * as pagamentoController from "../controllers/pagamentoController";

const router = Router();

router.get("/", (req, res) => {
    res.send("Api de veiculos conectada");
});

// Rotas Categoria
router.post("/categoria", categoriaController.postCategoria);
router.get("/categoria", categoriaController.getCategoria);
router.put("/categoria/:id", categoriaController.putCategoria);
router.delete("/categoria/:id", categoriaController.deleteCategoriaController);

//Rotas Modelo
router.post("/modelo", modeloController.postModelo);
router.get("/modelo", modeloController.getModelo);
router.put("/modelo/:id", modeloController.putModelo);
router.delete("/modelo/:id", modeloController.deleteModeloController);

//Rotas Marca
router.post("/marca", marcaController.postMarca);
router.get("/marca", marcaController.getMarca);
router.put("/marca/:id", marcaController.putMarca);
router.delete("/marca/:id", marcaController.deleteMarcaController);

//Rotas Veiculo
router.post("/veiculo", veiculoController.postVeiculo);
router.get("/veiculo", veiculoController.getVeiculo);
router.put("/veiculo/:id", veiculoController.putVeiculo);
router.delete("/veiculo/:id", veiculoController.deleteVeiculoController);

//Rotas Manutencao
router.post("/manutencao", manutencaoController.postManutencao);
router.get("/manutencao", manutencaoController.getManutencao);
router.put("/manutencao/:id", manutencaoController.putManutencao);
router.delete("/manutencao/:id", manutencaoController.deleteManutencaoController);

//Rotas ContratoLocacao
router.post("/contrato-locacao", contratoLocacaoController.postContratoLocacao);
router.get("/contrato-locacao", contratoLocacaoController.getContratoLocacao);
router.put("/contrato-locacao/:id", contratoLocacaoController.putContratoLocacao);
router.delete("/contrato-locacao/:id", contratoLocacaoController.deleteContratoLocacaoController);

//Rotas Ocorrencia
router.post("/ocorrencia", ocorrenciaController.postOcorrencia);
router.get("/ocorrencia", ocorrenciaController.getOcorrencia);
router.put("/ocorrencia/:id", ocorrenciaController.putOcorrencia);
router.delete("/ocorrencia/:id", ocorrenciaController.deleteOcorrenciaController);

//Rotas Pagamento
router.post("/pagamento", pagamentoController.postPagamento);
router.get("/pagamento", pagamentoController.getPagamento);
router.put("/pagamento/:id", pagamentoController.putPagamento);
router.delete("/pagamento/:id", pagamentoController.deletePagamentoController);

export default router;