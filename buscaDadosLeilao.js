import axios from 'axios';
import { load } from 'cheerio';
const url = 'https://globoesporte.globo.com/rj/futebol/campeonato-carioca/';
axios(url).then(response => {
    const html = response.data;
    const $ = load(html);
    console.log($);
    const tabelaStatus = $('.col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3');
    const tabelaJogador = [];
    console.log(tabelaStatus);
    /*tabelaStatus.each(function(){
        const nomeJogador = $(this).find('.jogador-nome').text();
        const posicaoJogador = $(this).find('.jogador-posicao').text();
        const numeroGols = $(this).find('.jogador-gols').text();
        const timeJogador = $(this).find('.jogador-escudo > img').attr('alt');
        tabelaJogador.push({
            nomeJogador,
            posicaoJogador,
            numeroGols,
            timeJogador
        });
    });
    console.log(tabelaJogador);*/
}).catch(console.error);