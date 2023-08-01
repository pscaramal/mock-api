import formatData from "../model/model.js"
import formatDataError from "../model/modelError.js";
import verificaCodigoRetorno from "../service/regraRetorno.js";
import returnData from "../service/formataRetorno.js";

class CteController {

    static obterCTeInformacoes = async (req, res) => {
        var codigoCTe = req.query.cte;
        var token = req.query.token;
            
        const codigoRetorno = await verificaCodigoRetorno(codigoCTe);
    
        console.log(codigoRetorno);
    
        res.status(200)
            .type('application/xml')
            .send(returnData(codigoRetorno, codigoCTe, token));
    }
}

export default CteController;