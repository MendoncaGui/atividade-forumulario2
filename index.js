function getCep (cep){
 var request = new XMLHttpRequest();
 request.open("GET", "https://viacep.com.br/ws/"+cep+"/json/", true);
 request.onload = function(){
   if(this.status >= 200 && this.status < 400){
     
     var retorno = JSON.parse(this.responseText);
     if(retorno.erro){
      var cep = document.getElementById("cep");
      var classError = document.getElementById("message"); 
      classError.classList.add("error-message");
      cep.classList.add("error");
    }else{
      console.log(this.responseText);
      console.log(this);
      document.getElementById("rua").value = retorno.logradouro;
      document.getElementById("bairro").value = retorno.bairro;
      document.getElementById("cidade").value = retorno.cidade;
      document.getElementById("uf").value = retorno.uf;
      document.getElementById("ibge").value = retorno.ibge;
      document.getElementById("ddd").value = retorno.ddd;
      document.getElementsByTagName("cep").classList.add("success");
    }
     
   } else {
     alert('Página fora do ar')
   }
 }
 request.send(); 
}

function validateCep(){
  var cep = document.getElementById("cep");
  var classError = document.getElementById("message");
  var cepValue = cep.value;
  if(cepValue.length == 8){
    getCep(cepValue);
    classError.classList.remove("error-message");
    cep.classList.remove("error");
  } else if(cepValue.length > 8){
    classError.classList.add("error-message");
    cep.classList.add("error");
  }
}

