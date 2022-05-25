let suscriptores= [];
suscriptores.push([ "ariela", "arielarom18@hotmail.com"]);


function  guardarSuscriptor(){
        let nombre= document.getElementById("nom").value;
        let email= document.getElementById("e-mail").value;
        let divAlert=document.querySelector( '[name="alertLogin"] ');  

        if(!validarNombre(nombre)){

            showAlert("error", "nombre incorrecto", divAlert);
            return;

        }
    
        if(!validarCorreo(email)){
            showAlert("error", "email incorrecto", divAlert);
            return;
            
        }

        if(!existeCorreo(email)){
            showAlert("error", "usted ya esta registrado", divAlert);
            return;
        }
        
        
        showAlert("valido", " puede  iniciar sesion  ", divAlert )
            
            guardarDatos(nombre, email)
        
     
            
    


        
        
   
}


function validarNombre(nombre){
      PATRON= /[a-zA-Z]+\s{1,10}/
      if(!PATRON.test(nombre)){
              
       
       return false
        
   }else{
   
    return true  
   }
    
               

}
function  validarCorreo(email){
   
    existeCorreo(email)

    PATRON=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if(!PATRON.test(email)){
            
    
     return false;
      
 }else{
  
  return true;
 }
 
    
}

  function existeCorreo(email){

           for (let index=0; index<suscriptores.length; index++){
            let emailencontrado=suscriptores[index][1];
              if(email==emailencontrado){
              
              
                   return false; 
           }
           
          }

        
          return true;
           
         } 



function guardarDatos(nombre, email) {

        suscriptores.push([nombre, email])

    
}


function showAlert(tipo, mensaje, divElemento){
    divElemento.innerHTML=mensaje;
    switch(tipo){
        case "error":
            divElemento.className= "alert alert-danger";
            break;
        case "valido":
            divElemento.className= "alert alert-success";
            break;  

    }
    divElemento.hidden=false;
    setTimeout(function(){
     divElemento.hidden=true;
    }, 3000 );
    
}











 
















