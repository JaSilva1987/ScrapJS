import axios from 'axios';
import { load } from 'cheerio';
const url = 'https://www.fundsexplorer.com.br/ranking';
import { writeFile } from 'fs';
import { geraExcel } from './geraExcel.js';

const data = 'Testando a criação de arquivos';
writeFile('arquivo.txt', data, (err) => {
    if (err) throw err;
  console.log('O arquivo foi criado!');
});

axios(url).then(response => {
    const html = response.data;
    const $ = load(html);
    const tabelaFII = $('.table>tbody>tr');

    const FII = [];

    let precoAtual;
    let yields;
    let acyield3;
    let acyield6;
    let acyield12;

    tabelaFII.each(function (i,elem){
        const fundo = $(this).find('td').eq(0).text();
        const setor = $(this).find('td').eq(1).text();
        let preco = $(this).find('td').eq(2).text();
        if(preco == 'N/A') { 
            precoAtual = 0; 
        }else{
            precoAtual = preco;
        }
        const liquidezDiaria = $(this).find('td').eq(3).text();
        const dividendo = $(this).find('td').eq(4).text();
        const y = $(this).find('td').eq(5).text();
        if(preco == 'N/A') { 
            yields = '--'; 
        }else{
            yields = y;
        }
        const y3 = $(this).find('td').eq(6).text();
        if(preco == 'N/A') { 
            acyield3 = '--'; 
        }else{
            acyield3 = y3;
        }
        const y6 = $(this).find('td').eq(7).text();
        if(preco == 'N/A') { 
            acyield6 = '--'; 
        }else{
            acyield6 = y6;
        }
        const y12 = $(this).find('td').eq(8).text();
        if(preco == 'N/A') { 
            acyield12 = '--'; 
        }else{
            acyield12 = y12;
        }
        FII.push({fundo,setor, precoAtual,liquidezDiaria,dividendo,yields,acyield3, acyield6,acyield12});
    })
    
    geraExcel(FII);
    /*if(FII.length > 0){ 
        for(const FI of FII){
            console.log(FI);
            
        } 
    }*/
     
}).catch(console.error);