const listaEquipos = {
    1: {watts:"40", kWh:"0.04"}, 
    2: {watts:"2950", kWh:"0.885"}, 
    3: {watts:"1800", kWh:"0.54"}, 
    4: {watts:"12000", kWh:"12"},
    5: {watts:"800", kWh:"0.8"},
    6: {watts:"1500", kWh:"1.5"}, 
    7: {watts:"325", kWh:"0.325"}, 
    8: {watts:"250", kWh:"0.25"},
    9: {watts:"5", kWh:"0.005"},
    10: {watts:"8", kWh:"0.008"},
    11: {watts:"900", kWh:"0.27"},
    12: {watts:"10", kWh:"0.3"},
    13: {watts:"120", kWh:"0.12"},
    14: {watts:"150", kWh:"0.15"},
    15: {watts:"3200", kWh:"3.2"},
    16: {watts:"4400", kWh:"4.4"},
    17: {watts:"60", kWh:"0.048"},
    18: {watts:"600", kWh:"0.6"},
    19: {watts:"1500", kWh:"1.5"},
    20: {watts:"10500", kWh:"10.5"},
    21: {watts:"1500", kWh:"1.5"},
    22: {watts:"1500", kWh:"1.5"},
    23: {watts:"250", kWh:"0.25"},
    24: {watts:"200", kWh:"0.2"},
    25: {watts:"1000", kWh:"1"},
    26: {watts:"250", kWh:"0.2"},
    27: {watts:"1200", kWh:"1.2"},
    28: {watts:"60", kWh:"0.048"},
    29: {watts:"9", kWh:"0.009"},
    30: {watts:"11", kWh:"0.011"},
    31: {watts:"15", kWh:"0.015"},
    32: {watts:"20", kWh:"0.02"},
    33: {watts:"20", kWh:"0.02"},
    34: {watts:"50", kWh:"0.050"},
    35: {watts:"28", kWh:"0.028"},
    36: {watts:"40", kWh:"0.04"},
    37: {watts:"60", kWh:"0.06"},
    38: {watts:"40", kWh:"0.04"},
    39: {watts:"75", kWh:"0.075"},
    40: {watts:"3", kWh:"0.003"},
    41: {watts:"5", kWh:"0.005"},
    42: {watts:"7", kWh:"0.007"},
    43: {watts:"9", kWh:"0.009"},
    44: {watts:"11", kWh:"0.011"},
    45: {watts:"561", kWh:"0.2244"},
    46: {watts:"561", kWh:"0.5049"},
    47: {watts:"475", kWh:"0.475"},
    48: {watts:"90", kWh:"0.09"},
    49: {watts:"1200", kWh:"1.2"},
    50: {watts:"20", kWh:"0.02"},
    51: {watts:"275", kWh:"0.275"},
    52: {watts:"150", kWh:"0.12"},
    53: {watts:"1500", kWh:"1.5"},
    54: {watts:"800", kWh:"0.64"},
    55: {watts:"20", kWh:"0.016"},                  
    56: {watts:"1200", kWh:"1.2"},
    57: {watts:"5600", kWh:"4.48"},
    58: {watts:"70", kWh:"0.063"},
    59: {watts:"80", kWh:"0.072"},
    60: {watts:"80", kWh:"0.08"},
    61: {watts:"1500", kWh:"1.5"},
    62: {watts:"1000", kWh:"1"},
    63: {watts:"18", kWh:"0.018"},
    64: {watts:"36", kWh:"0.036"},
    65: {watts:"40", kWh:"0.04"},
    66: {watts:"70", kWh:"0.063"},
    67: {watts:"180", kWh:"0.162"},
    68: {watts:"125", kWh:"0.125"},
    69: {watts:"70", kWh:"0.07"},
    70: {watts:"30", kWh:"0.03"},
    71: {watts:"1000", kWh:"1"},
    72: {watts:"4500", kWh:"1.575"},
    73: {watts:"1500", kWh:"0.525"},
    74: {watts:"300", kWh:"0.06"},
    75: {watts:"250", kWh:"0.05"},
    76: {watts:"350", kWh:"0.07"},
    77: {watts:"200", kWh:"0.2"},
    78: {watts:"140", kWh:"0.035"},
    79: {watts:"150", kWh:"0.0375"},
    80: {watts:"327", kWh:"0.08175"},
    81: {watts:"243", kWh:"0.06075"},
    82: {watts:"178", kWh:"0.0445"},
    83: {watts:"6", kWh:"0.0015"},
    84: {watts:"10", kWh:"0.002"}
};

var fila=0;
datos2 = [];
var cantidadEquipos = document.getElementsByClassName("cantidad");
var horasUso = document.getElementsByClassName("horas");
var diasMes = document.getElementsByClassName("diasMes");
var resultadoEquipo = document.getElementsByClassName("consumoEquipo");

function agregarEquipo(){
    var codigo = document.getElementById("equipo").value;
    var combo = document.getElementById("equipo");
    var selected = combo.options[combo.selectedIndex].text;
    let tablaEquipos = document.getElementById("tablaEquipos").getElementsByTagName("tbody")[0];
    datos2.push(codigo);

    tablaEquipos.insertAdjacentHTML('beforeend', `<tr>
        <td>${selected}</td>
        <td>${listaEquipos[codigo].watts}</td>
        <td><input class= "cantidad" type="number" min="1" style="width:80px;" value="1" onchange = "calcularConsumoEquipo()"></td>
        <td><select style="width:80px;" name="horas" class = "horas" onchange = "calcularConsumoEquipo()">
                <option value="0.05">0,05</option>
                <option value="0.10">0,10</option>
                <option value="0.15">0,15</option>
                <option value="0.30">0,30</option>
                <option value="0.45">0,45</option>
                <option selected = "true" value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
            </select>
        </td>
        <td>        
            <select style="width:80px;" class="diasMes" onchange = "calcularConsumoEquipo()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
            </select>
        </td>
        <td class = "consumoEquipo">
            ${listaEquipos[codigo].kWh}
        </td>
        <td>
            <button id="${fila}" class="btn btn-danger" onclick="eliminarEquipo(${fila})">
                <img src="img/x.png" height="10" width="10"/>
            </button>
        </td>
    </tr>`);  
    calcularConsumoEquipo(codigo);
    ++fila;
};

function calcularConsumoEquipo(codigo){
    suma = 0;
    datos = [];
    codigoEquipo = Number(codigo);

    if (codigoEquipo > 71){
        ultimoEquipo = (cantidadEquipos.length - 1); 
        horasUso[ultimoEquipo].value = 24; 
        diasMes[ultimoEquipo].value = 30; 
        horasUso[ultimoEquipo].setAttribute('disabled', 'true');
        diasMes[ultimoEquipo].setAttribute('disabled', 'true');
        // horasUso[ultimoEquipo].style.display='none';
        // diasMes[ultimoEquipo].style.display='none';
    };

    for (i=0; i < cantidadEquipos.length; i++){
        valorConsumoEquipo = Number(listaEquipos[datos2[i]].kWh * cantidadEquipos[i].value * horasUso[i].value * diasMes[i].value);
        datos.push(valorConsumoEquipo);
        suma += valorConsumoEquipo;
        resultadoEquipo[i].innerHTML = `${datos[i].toFixed(3)}`;
    };
    consumoTotal.innerHTML = `<b>${suma.toFixed(3)}</b>`;
    
};


function eliminarEquipo(fila){
    var eliminar = document.getElementById(fila);
    var tr =  eliminar.parentNode.parentNode;
    var indice =  Array.from(tr.parentNode.children).indexOf(tr);
    
    tr.remove();
    if (cantidadEquipos.length < 1){
        consumoTotal.innerHTML = `<b></b>`;
        datos2 = [];
    }else{
        
        datos2.splice(indice, 1);
        calcularConsumoEquipo();
    }
};






