let result = {}; 
result.code = 200;
result.code_message = 'A consulta foi realizada com sucesso';

result.header = {
    api_version: 'v1',
    service: 'receita-federal/cte',
    parameters: {}, // cte
    client: 'Cliente',
    client_name: 'Cliente',
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

result.data_count = 1;

result.data = {
    aquaviario: {
        adicional: {
        valor_br: '',
        valor: '',
        normalizado_valor_br: 0.0,
        normalizado_valor: 0.0
    },
    viagem: {
        navio: '',
        balsa: '',
        numero_viagem: '',
        direcao: '',
        tipo_navegacao: '',
        irin: ''
    }},
    autorizador: {
        autorizados_dowload: ''
    },
    carga: {
        valor: '',
        produto: '',
        outras_caracteristicas: '',
        normalizado_valor: 0.0,
        quantidades: {
            unidade: '',
            medida: '',
            quantidade: '',
            normalizado_quantidade: 0.0
        },
        lacres: {
            numero: ''
        },
        nfes: '',
        seguros: ''
    },
    cte: {
        chave_acesso: '',
        numero: '',
        serie: '',
        data_emissao: '01/07/2021 12:54:35-03:00',
        versao_xml: '',
        normalizado_chave_acesso: '',
        valores: {
            valor_total: '575,02',
            base_calculo_icms: '',
            valor_icms: '',
            normalizado_valor_total: 0.0,
            normalizado_base_calculo_icms: 0.0,
            normalizado_valor_icms: 0.0
        },
        emitente: {
            cnpj: '',
            nome: '',
            ie: '',
            uf: 'SP',
            normalizado_cnpj: '',
            cpf: '',
            normalizado_cpf: '',
            municipio: '',
            pais: ''
        },
        tomador: {
            cnpj: '**.***.250/0001-60',
            nome: 'YABO***',
            ie: '*****5628111',
            uf: 'SP',
            normalizado_cnpj: '',
            cpf: '',
            normalizado_cpf: '',
            municipio: '',
            pais: ''
        },
        remetente: {
            cnpj: '',
            nome: '',
            ie: '',
            uf: '',
            normalizado_cnpj: ''
        },
        destinatario: {
            cnpj: '',
            nome: '',
            ie: '',
            uf: '',
            normalizado_cnpj: ''
        },
        expedidor: {
            cnpj: '',
            nome: '',
            ie: '',
            uf: '',
            normalizado_cnpj: ''
        },
        recebedor: {
            cnpj: '',
            nome: '',
            ie: '',
            uf: '',
            normalizado_cnpj: ''
        },
        caracteristicas: {
            modal: 'Rodoviário',
            tipo_servico: 'Normal',
            finalidade: '',
            forma: '',
            cfop: '5532',
            natureza: 'PRESTACAO DE SERVICO DE TRANSPORTE A ESTABELECIMENTO INDUSTR',
            digest_cte: '=',
            inicio_prestacao: '',
            fim_prestacao: ''
        },
        situacao: {},
        eventos: {
            eventos: {
                evento: 'Autorização de Uso',
                protocolo: '',
                data_autorizacao: '01/07/2021 às 12:54:45-03:00',
                data_recebimento_an: ''
            }
        }
    },
    cte_completo: false,
    destinatario: {
        nome_razao_social: '',
        nome_fantasia: '',
        cnpj: '',
        ie: '',
        endereco: '',
        bairro: '',
        fone_fax: '',
        cep: '',
        municipio: '',
        uf: '',
        pais: '',
        suframa: '',
        normalizado_cnpj: '',
        cpf: '',
        normalizado_cpf: '',
        relacao_carga: ''
    },
    emitente: {
        nome_razao_social: 'PO',
        nome_fantasia: '',
        cnpj: '',
        ie: '',
        endereco: '',
        bairro: '',
        fone_fax: '',
        cep: '',
        municipio: 'SAO PAULO',
        uf: 'SP',
        pais: '',
        suframa: '',
        normalizado_cnpj: '',
        cpf: '',
        normalizado_cpf: '',
        relacao_carga: ''
    },
    expedidor: {
        nome_razao_social: "",
        nome_fantasia: "",
        cnpj: "",
        ie: "",
        endereco: "",
        bairro: "",
        fone_fax: "",
        cep: "",
        municipio: "",
        uf: "",
        pais: "",
        suframa: "",
        normalizado_cnpj: "",
        cpf: "",
        normalizado_cpf: "",
        relacao_carga: ""
      },
      informacoes_adicionais: {
        fisco: "",
        contribuinte: ""
      },
      recebedor: {
        nome_razao_social: "",
        nome_fantasia: "",
        cnpj: "",
        ie: "",
        endereco: "",
        bairro: "",
        fone_fax: "",
        cep: "",
        municipio: "",
        uf: "",
        pais: "",
        suframa: "",
        normalizado_cnpj: "",
        cpf: "",
        normalizado_cpf: "",
        relacao_carga: ""
      },
      remetente: {
        nome_razao_social: "",
        nome_fantasia: "",
        cnpj: "",
        ie: "",
        endereco: "",
        bairro: "",
        fone_fax: "",
        cep: "",
        municipio: "",
        uf: "",
        pais: "",
        suframa: "",
        normalizado_cnpj: "",
        cpf: "",
        normalizado_cpf: "",
        relacao_carga: ""
      },
      responsavel_tecnico: {
        cnpj: "",
        contato: "",
        telefonte: "",
        email: "",
        text: ""
    },
    resumida: {
        cte: {
          natureza_operacao: "PRESTACAO DE SERVICO DE TRANSPORTE A ESTABELECIMENTO INDUSTR",
          cfop: "5352",
          chave_acesso: "00-0000-00000000000000-00-000-000000000-000000000-0",
          modelo: "57",
          serie: "22",
          numero: "000000",
          data_emissao: "01/07/2021 12:54:35-03:00",
          tipo: "Normal",
          modal: "Rodoviário",
          uf_inicio: "SP",
          uf_fim: "SP",
          valor: "575,02",
          normalizado_chave_acesso: "00000000000000000000000000000000000000000000",
          normalizado_valor: "575.02"
        },
        emitente: {
            cnpj: "",
            nome: "",
            ie: "",
            uf: "SP",
            normalizado_cnpj: "",
            cpf: "",
            normalizado_cpf: "",
            municipio: "SAO PAULO",
            pais: ""
        },
        tomador: {
            cnpj: "**.***.250/0001-60",
            nome: "YABO***",
            ie: "*****5628111",
            uf: "SP",
            normalizado_cnpj: "",
            cpf: "",
            normalizado_cpf: "",
            municipio: "SAO JOSE DOS CAMPOS",
            pais: "BRASIL"
        },
        eventos: {
            eventos: {
              evento: "Autorização de Uso",
              protocolo: "",
              data_autorizacao: "01/07/2021 às 12:54:45-03:00",
              data_recebimento_an: ""
            }
        },
        digest: "="
    },
    rodoviario: {
        rntrc: "",
        data_entrega: "",
        lotacao: "",
        ciot: "",
        veiculos: [],
        motoristas: []
    },
    tomador: {
        nome_razao_social: "YABO***",
        nome_fantasia: "",
        cnpj: "**.***.250/0001-60",
        ie: "*****5628111",
        endereco: "",
        bairro: "",
        fone_fax: "",
        cep: "",
        municipio: "SAO JOSE DOS CAMPOS",
        uf: "SP",
        pais: "BRASIL",
        suframa: "",
        normalizado_cnpj: "",
        cpf: "",
        normalizado_cpf: "",
        relacao_carga: ""
    },
    totais: {
        valor_prestacao_servico: "",
        valor_areceber: "",
        componentes: "",
        impostos: {
          cst: "",
          percentual_reducao_bc: "",
          valor_credito: "",
          base_calculo_icms: "",
          aliquota_icms: "",
          valor_icms: "",
          valor_icms_outra_uf: "",
          valor_total_tributos: "",
          normalizado_cst: "0.0",
          normalizado_percentual_reducao_bc: "0.0",
          normalizado_valor_credito: "0.0",
          normalizado_base_calculo_icms: "0.0",
          normalizado_aliquota_icms: "0.0",
          normalizado_valor_icms: "0.0",
          normalizado_valor_icms_outra_uf: "0.0",
          normalizado_valor_total_tributos: "0.0"
        },
        diferencial_aliquota: {
          base_calculo_uf_fim: "",
          aliquota_interna_uf_fim: "",
          aliquota_interestadual: "",
          percentual_partilha: "",
          icms_uf_fim: "",
          icms_uf_inicio: "",
          percentual_icms_fundo_combate_pobreza: "",
          icms_fundo_combate_pobreza: "",
          normalizado_base_calculo_uf_fim: "0.0",
          normalizado_aliquota_interna_uf_fim: "0.0",
          normalizado_aliquota_interestadual: "0.0",
          normalizado_percentual_partilha: "0.0",
          normalizado_icms_uf_fim: "0.0",
          normalizado_icms_uf_inicio: "0.0",
          normalizado_percentual_icms_fundo_combate_pobreza: "0.0",
          normalizado_icms_fundo_combate_pobreza: "0.0"
        }
    },
    url_html: "",
    url_xml: "",
    xml_baixado_comcertificado: "",
    site_receipt: ""
};

result.errors = {};
result.receipt = {
    url: 'https://api.',
    id: 921615519,
    key: '',
    sites_url: {
        sites_url: ''
    }
};


export default function formatData(codigoCTe, token) {
    result.header.parameters.cte = codigoCTe;
    result.header.token = token;
    result.data.cte.normalizado_chave_acesso = codigoCTe;
    result.data.resumida.cte.normalizado_chave_acesso = codigoCTe;

    var codigoCTeForm = formatCodigoCTe(codigoCTe);

    result.data.cte.chave_acesso = codigoCTeForm;
    result.data.resumida.cte.chave_acesso = codigoCTeForm;
    
    return result;
}

function formatCodigoCTe(codigoCTe) {
    return codigoCTe.replace(/^(\d{2})(\d{4})(\d{14})(\d{2})(\d{3})(\d{9})(\d{9})(\d{1})/, "$1-$2-$3-$4-$5-$6-$7-$8");
}