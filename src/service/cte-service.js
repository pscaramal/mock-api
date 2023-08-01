import {pool} from '../config/db.js';

export default async function verificaCte(codigoCte) {

    const client = await pool.connect();

    const result = await consultaCodigoCTe(codigoCte, client);

    if (result.rows.length === 0) {
        await insereCodigoCTe(codigoCte, client);
        client.release(true);
        return false;
    }

    var contador = result.rows[0].contador;

    if (contador % 2 === 0) {
        await atualizaContador(codigoCte, contador, client);
        client.release(true);
        return false;
    }
    await atualizaContador(codigoCte, contador, client);
    client.release(true);
    return true;
}

async function insereCodigoCTe(codigoCte, client) {
    const values = [codigoCte];
    await client.query('insert into cache (codigo_cte, contador) values ($1, 1)', values);
}

async function atualizaContador(codigoCTe, contador, client) {
    contador++;
    const values = [contador, codigoCTe];

    await client.query('update cache set contador = $1 where codigo_cte = $2', values);
}

async function consultaCodigoCTe(codigoCTe, client) {
    const values = [codigoCTe];
    return await client.query("select * from cache where codigo_cte = $1", values);
}