var div = document.querySelector(div);


/*
*armazenado a URL do JSON 
*/
var requestURL ='https://api.hgbrasil.com/weather?key=d58dd784&lat=-23.682&log=-46.875&user_ip=remote';

/*
*criando uma nova instancia de solicitação a partir do
*XMLHTTPRequest
*/
var request = new XMLHttpRequest();


request.open('GET', 'data.json-cors', true);

let apresentacaoClima = document.getElementById('clima');
apresentacaoClima.innerHTML = "Clima : "


request.onload = function(){

    var dadosClima = JSON.parse(this.response)

    for (var i = 0; i < dadosClima.length; i++){
        console.log(dadosClima[i].results.description + ', dia ' + dadosClima[i].results.temp + 'graus.')
    }
}

request.send()






