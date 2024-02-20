function verificarTriangulo(){
    const nome=document.getElementById('triangulo');
    nome.innerHTML= `<p> </p> `;
    
    nome.innerHTML=`<p> 
    <h2>Verificar triângulo</h2>
  <form action="">
  
  <label for=""> lado 1: </label>
<input type="number" id="lado1"> <br>

<label for=""> lado 2: </label>
<input type="number" id="lado2"> <br>

<label for=""> lado 3: </label>
<input type="number" id="lado3"> <br>
</form>
</p>

<button onclick="verificar()"> Verificar</button>
`;
};

function verificar(){
  let valorLado1 = parseFloat(document.getElementById("lado1").value);
  let valorLado2 = parseFloat(document.getElementById("lado2").value);
  let valorLado3 = parseFloat(document.getElementById("lado3").value);
  let nome = 'inicio';

  if (valorLado1==valorLado2 && valorLado2==valorLado3){
    nome='Equilátero';
  } else if (valorLado1==valorLado2 || valorLado2==valorLado3 || valorLado3==valorLado1){
    nome='Isósceles';
  } else {
    nome='Escaleno';
  }

  document.getElementById("triangulo").innerHTML +=`<p> O triângulo é: ${nome} </p>`;

};

//NOVA FUNÇÃO 
function pedidoRestaurante(){

  const valor=document.getElementById('triangulo');
  valor.innerHTML= `<p> </p> `;
  
  valor.innerHTML=`<p> <h3>--- MENU --- </h3>

   <form action="">

    <input type="checkbox" id="segunda" value="12">
    <label for="segunda"> Pastel - R$ 12,00</label> <br> 

    <input type="checkbox" id="segunda" value="5">
    <label for="segunda"> Pão de queijo - R$ 05,00</label> <br> 

    <input type="checkbox" id="segunda" value="14">
    <label for="segunda"> Hamburguer - R$ 14,00 </label> <br> 

    <input type="checkbox" id="segunda" value="10">
    <label for="segunda"> Mini pizza - R$ 10,00</label> <br> <br> 
    </form>

    <button onclick="contabilizar()"> Contabilizar </button> <br> 
  </p>`
}
function contabilizar(){
  const conta=document.getElementById('triangulo');


  // seleciona todos os elementos <input> do tipo "checkbox" que estão marcados (checked). retorna uma lista contendo os elementos selecionados.
const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

// Inicialize a variável para armazenar a soma
let total = 0;

// percorre cada elemento da lista checkboxes usando o método forEach(). Para cada elemento, ele obtém o valor do checkbox usando checkbox.value e converte esse valor para um número decimal usando parseFloat(). Em seguida, ele adiciona esse valor à variável total para calcular a soma de todos os valores dos checkboxes selecionados.
checkboxes.forEach((checkbox) => {
  const valor = parseFloat(checkbox.value);
  total = valor+total;
})
  conta.innerHTML +=`<p> Valor final do pedido: R$ ${total} <br></p>`; 

}; 

function criancaEsperanca(){
  const valor=document.getElementById('enunciado');
  valor.innerHTML= `<p> </p> `;

  const valor2=document.getElementById('triangulo');
  valor2.innerHTML= `<p> </p> `;
  
  valor.innerHTML=`<p>
  ------------------------------ <br>
  CRIANÇA ESPERANÇA <br>
  ------------------------------ <br>
   Escolha uma das opções de doação: 
<form> 
<input type="radio" name="doacao" id="10" value="10" checked="checked"/>
<label for="10">Doar R$ 10,00 </label> <br/>

<input type="radio" name="doacao" id="25" value="25" checked="checked"/>
<label for="25">Doar R$ 25,00 </label> <br/>

<input type="radio" name="doacao" value="50" id="50" checked="checked"/>
<label for="50">Doar R$ 50,00 </label> <br/>

<input type="radio" name="doacao" value="0"id="0" checked="checked"/>
<label for="0"> Outros valores </label> <br/>
</form> 

<label for=""> Valor </label>
    <input type="number" id="lado1"> <br>
  
<button onclick="confirmarDoacao()"> Confirmar doação </button>
</p>`
}

function confirmarDoacao() {

  const valor1=document.getElementById('triangulo');
  
  valor1.innerHTML= `<p> </p> `;

  const radios = document.querySelectorAll('input[type="radio"]');


  // Variável para armazenar o valor selecionado
  let valorSelecionado;
  
  // Percorre todos os elementos radio
  radios.forEach((radio)=> {
    // Verifica se o elemento está selecionado
    if (radio.checked) {
      // Atribui o valor do elemento selecionado à variável
      valorSelecionado = radio.value;
    }
  })

  if (valorSelecionado=="0"){
    var valorLado1 = parseFloat(document.getElementById("resposta").value);

  valor1.innerHTML += `<p>Valor final da doação: R$ ${valorLado1} <br></p>`;

  }else {
valor1.innerHTML += `<p>Valor final da doação: R$ ${valorSelecionado} <br></p>`;
}
valor1.innerHTML += `<p> </p>`;


}
