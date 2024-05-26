
function siguiente(){
    alert("a");
    let aux = "    <div  class='reservations-main pad-top-100 pad-bottom-100'><div class='container'><div class='row'><div class='form-reservations-box'><div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'><div class='wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s'><h4 class='form-title'>Formulario de compra</h4>";

    var pedidos = document.forms[0][no_de_pedidos].value;

    for(let i = 0; i<pedidos;i++){

        aux += "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><div class='form-box'><select name='pedido_1' id='pedido_1' class='selectpicker'><option selected disabled>Pedido 1</option><option>Cartón de Media Corona $355</option><option>Cartón de Media Victoria $355</option><option>Cartón de Media Corona Ambár $355</option></select></div></div>";

        aux += "<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><div class='form-box'><select name='no_de_pedidos' id='no_de_pedidos' class='selectpicker'><option selected disabled>Cantidad de pedidos</option><option>1</option><option>2</option><option>3</option></select></div></div>";

    }

    aux += "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'><div class='reserve-book-btn text-center'><button class='hvr-underline-from-center' type='submit' value='SEND' id='submit'>Enviar </button></div></div></form>";

    document.getElementById("generar_pedido").innerHTML = "hola";

}