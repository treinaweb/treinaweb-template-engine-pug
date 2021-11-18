function home(req, res){
    var nome = "TreinaWeb";
    res.render('index', {nome: nome});
}

function json(req, res){
    var carros = [
        {
            'nome': 'Fiesta',
            'ano': 2015
        },
        {
            'nome': 'Gol',
            'ano': 2019
        }
    ]
    res.render('json', {carros: carros});
}

function condicionais(req, res){
    var comentarios = -5;
    var mes = 2;
    res.render('condicionais', {comentarios: comentarios, mes: mes});
}

function repeticao(req, res){
    var carros = [
        {
            'nome': 'Fiesta',
            'ano': 2020
        },
        {
            'nome': 'Gol',
            'ano': 2015
        },
        {
            'nome': 'Palio',
            'ano': 2018
        },
        {
            'nome': 'Auda A3',
            'ano': 2021
        }
    ]
    res.render('repeticao', {carros: carros});
}


export default { home, json, condicionais, repeticao};