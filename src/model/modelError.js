let result = {}; 

result.code;
result.code_message = 'Tente novamente';

result.header = {
    api_version: 'v1',
    service: 'receita-federal/cte',
    parameters: {}, // cte
    client: 'Client',
    client_name: 'Client',
    billable: true,
    credits: 1,
    price_extra: 0.0327,
    has_limit: false,
    used: 0,
    limit: 0,
    limit_price: 0.0,
    used_price: 2729.3382,
    cache_hit: false,
    requested_at: 1689875707000,
    elapsed_time_in_milliseconds: 2211,
    signature: ''
};

result.data_count = 0;

result.data = {};

result.errors = 'Problema na integracao';
result.receipt = {
    url: '',
    id: 77,
    key: '',
    sites_url: {
        sites_url: ''
    }
};

export default function formatDataError(codigoRetorno, codigoCTe, token) {
    result.code = codigoRetorno;
    result.header.parameters.cte = codigoCTe;
    result.header.token = token;
    
    return result;
}