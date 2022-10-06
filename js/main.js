function procesar(){
    
    var idPersona = frmDatos.id.value;
    var nom = frmDatos.nombre.value;
    var tel = frmDatos.telefono.value;
    var ema = frmDatos.email.value;

    const persona = {
        id : idPersona,
        nombre : nom,
        telefono : tel,
        email : ema
    }

    localStorage.setItem(idPersona, JSON.stringify(persona));
    frmDatos.submit();
}

function mostrarDatos(){
    var respuesta = "";
    console.log(localStorage.length);
    
    for(let i=1; i<= localStorage.length; i++){ 
        let txt = localStorage[i];
        console.log(txt);
        let persona = JSON.parse(txt);  
        respuesta +=  "<tr>" + "<td>" + persona.nombre+ "</td>" +
                     "<td>" + persona.email+ "</td>" +
                     "<td>" + persona.telefono+ "</td>"+
                     "</tr>";
    }

    document.getElementById("tableBody").innerHTML = respuesta;

}

function borrarDatos(){
    console.log("Borrado");
    window.localStorage.clear();        
    console.log(localStorage.length);
}

function calcular(num1, num2, myCallback){
    let suma = num1 + num2;
    myCallback(suma);
}

function displayDatos(texto){
    document.getElementById("demo").innerHTML = texto;
}

function intervalos(){
    setInterval(miFuncion, 1000);
}

function miFuncion(){
    let fecha = new Date();
    document.getElementById("demo").innerHTML = fecha.getHours() +
            ":" + fecha.getMinutes() + ": " + fecha.getSeconds();

}

function ejecutarApi(){
    let url = "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc";
    fetch(url, {
        headers:{
            'x-api-key': 'live_Q34IHYmqrIsBGh2A8OIFL8ssBI6bEfbA3cuil6v45Z4QzorEbYgwX1y8VctR26B',
          }
    })
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData = (data) => {
            console.log(data.length);
            var rta="";
            for(let i=0;i<data.length;i++){
                if (data[i] != undefined){
                    rta += "<img src='" + data[i].url 
                        + "' heigth='300' width='300'> <br>";
                }
            }
            document.getElementById("demo").innerHTML = rta;
        }
} 