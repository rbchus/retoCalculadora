
console.log (" - Reto calculadora -  ");




//----------------------------------------------------- escogar tema 
const switchDark = document.getElementById('customSwitch1');
const switchRetro = document.getElementById('customSwitch2');

switchDark.addEventListener('click', ()=>{ 

    if (switchDark.checked){ 
        console.log (" Tema: Dark Activado");
        seleccinarTema("dark");
        switchRetro.checked = false;

    }

        else{ 
        console.log (" Tema: Dark Desactivado")
        seleccinarTema("light");
        
        }


})


switchRetro.addEventListener('click', ()=>{ 

    if (switchRetro.checked){ 
        console.log (" Tema: Retro Activado");
        seleccinarTema("retro");
        switchDark.checked = false;

    }

        else{ 
        console.log (" Tema: Retro Desactivado")
        seleccinarTema("light");
        }


})

//-----------------------------------------------------------------

const seleccinarTema = (Tema)=>{
    localStorage.setItem("tema",Tema)
    asignarTema()
 }


const asignarTema = ()=>{
    let tema = localStorage.getItem('tema')
    switch (tema) {
        case 'light':
            document.getElementById('body').classList.remove('dark')  
            document.getElementById('body').classList.remove('retro')
        break;
        case 'dark':
            document.getElementById('body').classList.remove('retro')
            document.getElementById('body').classList.add('dark')  
        break;    
        case 'retro':
            document.getElementById('body').classList.remove('dark')  
            document.getElementById('body').classList.add('retro')  
        break; 

        default:
            
            break;
   
      }
      //window.location.reload()
    }

    asignarTema()

//-------------------------------------------------------- pintar numeros

const resultadoLetras = document.getElementById('resultadoLetras');
const resultadoNumeros = document.getElementById('resultadoNumeros');

const btnReset = document.getElementById('btnReset');

let  valorAscciPrimerNumero = 49;
let nuevoValorNumero = valorAscciPrimerNumero; 

let  valorAscciPrimeraLetra = 97;
let nuevoValorLetra = valorAscciPrimeraLetra; 

let cadenaLetras = ""
let cadenaNumeros = ""
let ultimoValorInsertado;

contador = 0;



btnReset.addEventListener('click', ()=>{ 

    contador = 0;
    resultadoLetras.innerText=""
    resultadoNumeros.innerText=""

 valorAscciPrimerNumero = 49;
 nuevoValorNumero = valorAscciPrimerNumero; 

 valorAscciPrimeraLetra = 97;
 nuevoValorLetra = valorAscciPrimeraLetra; 

 cadenaLetras = ""
 cadenaNumeros = ""


})





const anselo = (letra)=>{

   let  valorAscciLetra = parseInt(letra.charCodeAt());


   if (valorAscciPrimeraLetra < valorAscciLetra && contador ==0) {

    for(let i = valorAscciPrimeraLetra; i< valorAscciLetra; i += 1 ){
        alertify.error("Falta:[ " + String.fromCharCode(i)+ " ]");
         }

   } else { 
  



   if (nuevoValorLetra >=97) {
       
    
    //---------------------------------------------------------------------------------------

  

    console.log (" esta insertando letras ");
        
   if (valorAscciLetra == nuevoValorLetra ) {
    cadenaLetras = cadenaLetras + " " + letra.toUpperCase() ;
    resultadoLetras.innerText = cadenaLetras;
    contador++
    ultimoValorInsertado = nuevoValorLetra;
    nuevoValorLetra +=1;
    
   } else {
       for(let i = ultimoValorInsertado+1; i< valorAscciLetra; i += 1 ){
          alertify.error("Falta:[ " + String.fromCharCode(i)+ " ]");
           }
   } 


   //----------------------------------------------------------------------------------
}    else {


       console.log (" esta insertando numeros ");

    if ( valorAscciLetra-48 > valorAscciPrimerNumero && contador == 10 )   {

        for(let i = valorAscciPrimerNumero ; i< valorAscciLetra-48; i += 1 ){
            alertify.error("Falta:[ " + String.fromCharCode(i)+ " ]");
             }

    } else {
 
    if (valorAscciLetra-48 == nuevoValorLetra ) {
        letra = String.fromCharCode(valorAscciLetra-48)
          if (letra==":")
              letra="0"
        cadenaNumeros =   cadenaNumeros + " " + letra;
        resultadoNumeros.innerText = cadenaNumeros;
        contador++
        ultimoValorInsertado = nuevoValorLetra;
        nuevoValorLetra +=1;
        
       } else {
           for(let i = ultimoValorInsertado+1; i< valorAscciLetra-48; i += 1 ){
              alertify.error("Falta:[ " + String.fromCharCode(i)+ " ]");
               }
       } 
    }




}

    if (contador == 10 && letra=="j") {
        alertify.success(" se intarteron las letras  exito ");
        nuevoValorLetra = nuevoValorNumero
    } else if (contador == 20 && letra=="0") {
        alertify.success(" se intarteron las numeros  exito ");
       // nuevoValorLetra = nuevoValorNumero
    }

   console.log (contador)
   console.log( "  Ascci  " + letra + " es " +  valorAscciLetra);
   console.log( "  nuevoValorLetra  " + nuevoValorLetra );

}
}
