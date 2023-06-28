const form = document.getElementById("formulario")
let aquaJ = 0 ;
let aquaP = 0 ;

let emocionJ = 0;
let emocionP = 0;

let alegriaJ = 0;
let alegriaP = 0;

let frescuraJ = 0;
let frescuraP = 0;

function inicio() {
    let formulario = new FormData(form);
    let producto = formulario.get("producto");
    let cantidad = formulario.get("cantidad");
    let vendedor =formulario.get ("vendedor") 
    
    
    calculoVentas(producto,vendedor,cantidad)}

    form.addEventListener("submit",function(event){
        event.preventDefault();
        
        
        
        //let c =document.getElementById("total");
        //console.log(c);
        //c.innerHTML = "Texto Modificado";
    })
    



function calculoVentas(producto,vendedor,cantidad) {
   const aqua=200;
   const emocion=180;
   const alegria = 160;
   const frescura =150;
   
    
   
   console.log(producto)

   if (vendedor == "jua") {
    

        if (producto == "aqua") {
            console.log(` antes de sumar${aquaJ}`);
            let x = suma(aqua,cantidad);
            console.log(` funcion${x}`);
            aquaJ = x + aquaJ;
            console.log(` despues de sumar${aquaJ}`);
            let c =document.getElementById("aquaJuana");
            c.innerHTML = aquaJ;
        }
        else if (producto == "emocion") {
            let x = suma(emocion,cantidad);
            emocionJ = x + emocionJ;
            let c =document.getElementById("emocionJuana");
            c.innerHTML = emocionJ;
            
        }
        else if (producto == "alegria") {
            let x = suma(alegria,cantidad);
            alegriaJ = x + alegriaJ;
            let c =document.getElementById("alegriaJuana");
            c.innerHTML = alegriaJ;
        }
        else {
            let x = suma(frescura,cantidad);
            frescuraJ = x + frescuraJ;
            let c =document.getElementById("frescuraJuana");
            c.innerHTML = frescuraJ;

        }
    
   }
   else if (vendedor == "ped"){
    if (producto == "aqua") {

        let x = suma(aqua,cantidad);
        aquaP = x + aquaP;
        let c =document.getElementById("aquaPedro");
        c.innerHTML = aquaP;
    }
    else if (producto == "emocion") {
        console.log("xxx");
        let x = suma(emocion,cantidad);
        emocionP = x + emocionP;
        let c =document.getElementById("emocionPedro");
        c.innerHTML = emocionP;
        
    }
    else if (producto == "alegria") {
        let x = suma(alegria,cantidad);
        alegriaP = x + alegriaP;
        let c =document.getElementById("alegriaPedro");
        c.innerHTML = alegriaP;
    }
    else {
        let x = suma(frescura,cantidad);
        frescuraP = x + frescuraP;
        
        let c =document.getElementById("frescuraPedro");
        c.innerHTML = frescuraP;

    }

   }
   vendedorMes(aquaJ,emocionJ,alegriaJ,frescuraJ,aquaP,emocionP,alegriaJ,frescuraJ);

}

function suma(producto, cantidad) {
    let total = (producto*cantidad);
    return total
    
}

function vendedorMes(aquaJ,emocionJ,alegriaJ,frescuraJ,aquaP,emocionP,alegriaJ,frescuraJ){
    let totalJuana = aquaJ+alegriaJ+frescuraJ+emocionJ;
    let totalPedro = aquaP+alegriaP+frescuraP+emocionP;
    let c =document.getElementById("vendedorMes");
   

if (totalJuana > totalPedro) {
    c.innerHTML = "JUANA";
    
}else if (totalPedro > totalJuana){
    c.innerHTML = "PEDRO";
} else{
    c.innerHTML = "EMPATE";
}

    

}