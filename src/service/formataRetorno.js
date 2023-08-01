import formatData from "../model/model.js"
import formatDataError from "../model/modelError.js";
import builder from "../config/xmlBuilder.js";

export default function returnData(codigoRetorno, codigoCTe, token) {
    var resultFormatado;
    
    if (codigoRetorno === '200') {
        resultFormatado = formatData(codigoCTe, token);
    } else {
        resultFormatado = formatDataError(codigoRetorno, codigoCTe, token);
    }

    return builder.buildObject(resultFormatado);
}