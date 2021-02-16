 let incluirDespesa = document.getElementById("cadastrar-despesa");
 let incluirReceita = document.getElementById("cadastrar-receita");
 let btn_add_despesa = document.getElementById("add-despesa");
 let btn_add_receita = document.getElementById("add-receita");
 let btn_close_despesa = document.getElementById("close");
 let btn_close_receitas = document.getElementById("close-receitas");
 let list_depesa = document.getElementById("list-despesa");
 let list_receita = document.getElementById("list-receita");


//Apresentar MODAL de DESPESAS
btn_add_despesa.addEventListener('click',function(){
   let modal = document.getElementById("modal-despesas");
   modal.style.display = "block";
});
//Fechar MODAL de DESPESAS
btn_close_despesa.addEventListener('click',function(){
   let modal = document.getElementById("modal-despesas");
   modal.style.display = "none";
});
 //Apresentar MODAL de RECEITAS
btn_add_receita.addEventListener('click',function(){
   let modal = document.getElementById("modal-receitas");
   modal.style.display = "block";
});
 //Fechar MODAL de RECEITAS
btn_close_receitas.addEventListener('click',function(){
   let modal = document.getElementById("modal-receitas");
   modal.style.display = "none";
});


//Incluir DESPESAS na lista
incluirDespesa.addEventListener('click',function(){

    let nome = document.getElementById("nome-despesa").value;
    let valor = document.getElementById("valor-despesa").value;
      
    if(nome === ""){
       alert("Digite o nome da despesa!");
     }
     else if( valor === ""){
      alert("Digite o valor da despesa!");
     }
     else{
      var spanPai = document.createElement("span");
      var spanValue = document.createElement("span");
      var spanNome = document.createElement("span");
      var spanImg = document.createElement("span");
      var icone = document.createElement("img");
      var li = document.createElement("li");

      spanNome.innerText = `${nome}: `;
      spanValue.setAttribute("class", "value");
      spanValue.setAttribute("id", "values-despesa");
      icone.setAttribute("src", "img/remove.png")
      spanImg.appendChild(icone);
      spanValue.innerText = valor;

      spanPai.appendChild(spanNome);
      spanPai.appendChild(spanValue);

      li.appendChild(spanPai);
      li.appendChild(spanImg);
   
      list_depesa.appendChild(li);
      somatorioDespesa();
      balanco(); 
      let modalDespesa = document.getElementById("modal-despesas");
      modalDespesa.style.display = "none";
     }
   
   
 })

 //Incluir DESPESAS na lista
incluirReceita.addEventListener('click',function(){

   let name_receita = document.getElementById("nome-receita").value;
   let value_receita = document.getElementById("valor-receita").value;
     
   if(name_receita === ""){
      alert("Digite o nome da despesa!");
    }
    else if( value_receita === ""){
     alert("Digite o valor da despesa!");
    }
    else{
     var spanPai = document.createElement("span");
     var spanValue = document.createElement("span");
     var spanNome = document.createElement("span");
     var spanImg = document.createElement("span");   
     var icone = document.createElement("img");
     var li = document.createElement("li");

     //Setando os atributos e valores das TAG´S criadas acima
     spanNome.innerText = `${name_receita}: `;
     spanValue.setAttribute("class", "value");
     spanValue.setAttribute("id", "values-receita");
     icone.setAttribute("src", "img/remove.png")
     spanImg.appendChild(icone);
     spanValue.innerText = value_receita;
     
     //Incluindo dentro da Span pai uma span com o nome da receita
     //E outra com o valor da receita
     spanPai.appendChild(spanNome);
     spanPai.appendChild(spanValue);
    
     //Incluindo dentro do li a Span acima e o icone para deletar elemento
     li.appendChild(spanPai);
     li.appendChild(spanImg);
    
     //Incluindo dentro da UL a li acima com as tags span
     list_receita.appendChild(li);
     somatorioReceita(); //Calculando o valor total recebido
     balanco(); //Calculando Total de Receitas - Despesas
     
     //Fechando modal após inclusão
     let modal = document.getElementById("modal-receitas"); 
     modal.style.display = "none";
     
    }
  
})


function somatorioDespesa(){
   let valores = document.querySelectorAll("#values-despesa");
   let spanTotal = document.getElementById("total-despesas");
   let balancoDespesas = document.getElementById("balance-despesas");
   let total = 0;

    for(i = 0; i<valores.length; i++){ 
       total = total + parseFloat(valores[i].innerText);
    }
    spanTotal.innerText = `Total: R$${total},00`;
    balancoDespesas.innerText = `Total de despesas: R$${total},00`;

    return total;
}

function somatorioReceita(){
   let valores = document.querySelectorAll("#values-receita");
   let spanTotal = document.getElementById("total-receitas")
   let balancoReceitas = document.getElementById("balance-receitas");
   let total = 0;
   
    for(i = 0; i<valores.length; i++){ 
       total = total + parseFloat(valores[i].innerText);
    }
    spanTotal.innerText = `Total: R$${total},00`;
    balancoReceitas.innerText = `Total de receitas: R$${total},00`;

    return total;
}

function balanco(){
   let lucro = somatorioReceita();
   let contas = somatorioDespesa();
   let balanco = lucro - contas;
   let situation = document.getElementById("balance-situation");
   situation.innerText = `Resultado do Balanço: R$${balanco},00`;
   return balanco;

}

//Função para excluir da lista de DESPESA
list_depesa.addEventListener("click", function(e){
   //Capturando o evento de click quando usuario clica na tag img do li
    if(e.target.localName === "img"){
        //Salvando a TAG pai do elemento img (span)
        let ancestral = e.target.parentElement;
         //Salvando a TAG pai da TAG span (li)
        let aux = ancestral.parentElement;
        aux.remove();
        somatorioDespesa();
       }
})

//Função para excluir da lista de RECEITA
list_receita.addEventListener("click", function(e){
   //Capturando o evento de click quando usuario clica na tag img do li
    if(e.target.localName === "img"){
        //Salvando a TAG pai do elemento img (span)
        let ancestral = e.target.parentElement;
         //Salvando a TAG pai da TAG span (li)
        let aux = ancestral.parentElement;
        aux.remove();
        somatorioReceita();
       }
})

