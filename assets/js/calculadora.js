
console.log (" - Reto calculadora -  ");

const resultado = document.getElementById('resultado');
const cadenaOperaciones = document.getElementById('cadenaOperaciones');

const lista = document.getElementById("lista");


let cadena=" ";
let caracter;
let valorNum=""


let numeroIn="";
let numTem;
let numOld;

let operaciones = []
let operacionesMostrar = []
let historial = []
let rta

const numero = (num)=>{
  
    numeroIn=numeroIn+num;
    numTem = parseFloat(numeroIn)
    console.log(numTem)
    resultado.innerText = numTem;

}

const imprimir= ()=>{
    cadena=""
   
    for (let i = 0; i < operacionesMostrar.length; i++) {
           cadena = cadena + operacionesMostrar[i] 
         
         }
         console.log ( "cadena: " + cadena.toString())
         cadenaOperaciones.innerText = cadena
         historial.push(cadena)
         const operacionesString = JSON.stringify(historial)
         localStorage.setItem('operaciones', operacionesString)


}


const impirmirHistorial= ()=>{

    let etiqueta = document.createElement("li");

    const operacionesStorage = JSON.parse(localStorage.getItem('operaciones'))
    for(let i = 0; i<operacionesStorage.length; i += 1 ){
        etiqueta.textContent = operacionesStorage[i];
        lista.appendChild(etiqueta);
    }
   
   
       
}


const calcular= ()=>{

    for (let i = 0; i < operaciones.length; i++) {
        
        
        switch (operaciones[i]) {
            case 'x':
                a=parseFloat(operaciones[i-1])
                b=parseFloat(operaciones[i+1])
                 rta= a * b
                 operaciones[i+1] = rta
               console.log(rta)
            break;
            case '+':
               
               a=parseFloat(operaciones[i-1])
               b=parseFloat(operaciones[i+1])
               rta= a + b
               operaciones[i+1] = rta
               console.log(rta)
            break;
            case '-':
                a=parseFloat(operaciones[i-1])
                b=parseFloat(operaciones[i+1])
                rta= a - b
                operaciones[i+1] = rta
                console.log(rta)
             break;
             case '÷':
                a=parseFloat(operaciones[i-1])
                b=parseFloat(operaciones[i+1])
                rta= a / b
                operaciones[i+1] = rta
                console.log(rta)
             break;
             case '%':
                a=parseFloat(operaciones[i-1])
                b=parseFloat(operaciones[i+1])
                rta= (a * b) / 100
                operaciones[i+1] = rta
                console.log(rta)
             break;


    
            default:
                break;
       
          }
        
        
        }
        imprimir()
        resultado.innerText =""
        resultado.innerText = rta
        historial.push(rta)
        console.log(historial)
        
}



const odirecta= (ope)=>{
    
    operaciones.push(numTem)
    operacionesMostrar.push(numTem)
 

    switch (ope) {
        case 'fra':
            caracter = "f";
        
            rta = 1 / numTem
            impirmirHistorial()

            
        break;
        case 'ele':
            caracter = "e";

            rta = numTem * numTem
            impirmirHistorial()
        

        break;
        case 'rai':
            caracter = "r";
            rta  = Math.sqrt(numTem) 
            impirmirHistorial()
        break;

        case 'sig':
            caracter = "s";
            rta  = numTem * -1
            impirmirHistorial()
        break;

        

        default:
            break;
   
      }

      imprimir()
      resultado.innerText =""
      resultado.innerText = rta
      historial.push(rta)
      console.log(historial)

      operaciones.push(caracter)
      numeroIn=""
      operacionesMostrar.push(caracter)
   
      console.log(operaciones)
      console.log(operacionesMostrar)

}


const operacion= (ope)=>{
    
    operaciones.push(numTem)
    operacionesMostrar.push(numTem)
 

    switch (ope) {
        case 'rta':
            caracter = "=";
        
            calcular()
            impirmirHistorial()

            
        break;
        case 'sum':
            caracter = "+";
        

        break;
        case 'res':
            caracter = "-";
       

        break;

        case 'div':
            caracter = "/";
         

        break;

        case 'mul':
            caracter = "x";
            

        break;
        case 'por': 
            caracter="%"

        default:
            break;
   
      }
      operaciones.push(caracter)
      numeroIn=""
      operacionesMostrar.push(caracter)
      imprimir()
      console.log(operaciones)
      console.log(operacionesMostrar)

}

const funcion= (fun)=>{
    resOpe= numTem;

    switch (fun) {
        case 'C':

        caracter = "";
        valorNum=""
        cadena = "";
        resOpe = 0
        numOld=""
        resultado.innerText = resOpe;
        cadenaOperaciones.innerText ="";
        operaciones = []
        operacionesMostrar = []
        rta=0
            
        break;
        case 'CE':

            caracter = "";
        valorNum=""
        cadena = "";
        resOpe = 0
        numOld=""
        resultado.innerText = resOpe;
        cadenaOperaciones.innerText ="";
        operaciones = []
        operacionesMostrar = []
        rta=0
        localStorage.setItem('operaciones', "")
        lista.removeChild(lista.childNodes[0])
        break
            
        case 'BAC':

        let tamano = numeroIn.length
        numeroIn= numeroIn.substring(0,tamano-1)
        numTem = parseFloat(numeroIn)
        console.log(numTem)
        resultado.innerText = numTem;

          break

        default:
            break;
   
      }
   


}




