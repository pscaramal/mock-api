import verificaCte from "./cte-service.js";

export default async function verificaCodigoRetorno(codigoCTe){
    const lastChar = codigoCTe.at(-1);

    switch(lastChar) {
        case '0':
        case '3':
        case '7':
            return '200';
        case '1':
        case '4':
        case '8':
            return '408'
        case '2':
        case '5':
        case '6':
        case '9':
            return await verificaRetentativa(codigoCTe);
    }
}

async function verificaRetentativa(codigoCTe) {
    const shouldReturnStatusOk = await verificaCte(codigoCTe);

    if (shouldReturnStatusOk) {
        return '200';
    }

    return '614';
}