let userAnswer;
const velocidadLuz = 299792.458; //kilometros por segundo

do
{
    userAnswer = prompt("Bienvenid@ a mi, un simulador de viajes espaciales. Serás guiad@ mediante instrucciones y entradas de datos como: \"velocidad de viaje\" y \"destino\" hacia un estimado de tu tiempo de viaje ademas de recibir diferentes características útiles de tu destino final siendo este algun planeta del Sistema Solar o alguna luna de gran tamaño. Todos los viajes asumirán que partes desde la Tierra. Si has entendido escribe la palabra \"entiendo\".").toLowerCase();
}while(userAnswer!="entiendo");

//usuario accede a emulador, se procede a cargar datos de planetas y/o lunas 

class PlanetaClase 
{
    constructor(nombre, distancia, descripcion,datoCurioso,radio)    
    {
        this.nombre = nombre        
        this.distancia = distancia
        this.descripcion = descripcion
        this.datoCurioso = datoCurioso
        this.radio = radio
    }
}

//creo constantes con planetas para luego guardarlos en un array.
const mercurio = new PlanetaClase("Mercurio", 202.07,"Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.","Mercurio gira tres veces sobre su propio eje por cada dos vueltas que completa alrededor del Sol, por lo que en el transcurso de dos años, en un punto cualquiera de Mercurio solo habrán transcurrido 3 días, cada uno de ellos equivalente a 58 días terrestres.",2439.7);
const venus = new PlanetaClase("Venus",203.49,"Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor (en la Antigua Grecia, Afrodita).","Aunque Venus no es el planeta más cercano al Sol, es el más caliente. Tiene una atmósfera densa, llena de dióxido de carbono, que provoca el efecto invernadero, y de nubes compuestas de ácido sulfúrico. Los gases atrapan el calor y mantienen a Venus bien calentito.",6051.8);
const arrayPlanetas = [mercurio,venus];

//creo variables que seran calculadas o entradas directamente por el usuario
let destinoPlaneta, velocidadViaje, velocidadViajeNoScale, distanciaViaje;


// seleccion de planeta a viajar
while(userAnswer!="mercurio" && userAnswer!="venus")
{
    userAnswer = prompt("Como primer paso deberás indicarme a donde quieres viajar. Por favor, escribe el nombre de uno de nuestros destinos disponibles a simular (Venus, Mercurio).").toLowerCase();
}

alert("felicidades! has seleccionado correctamente tu destino.");
destinoPlaneta = userAnswer;

//seleccion de % de velocidad de la luz a viajar
do
{
    userAnswer = +prompt("elige la velocidad de la luz a la que quieres ir, podras seleccionar una escala entre 0.1 y 100 representando estos el minimo y maximo del porcentaje de la velocidad de la luz.");
}while(userAnswer<=0 || userAnswer > 100 || isNaN(userAnswer));

alert("felicidades! has seleccionado correctamente tu velocidad de viaje");
velocidadViajeNoScale = userAnswer;

velocidadViaje = velocidadLuz*userAnswer/100;   //calculo el porcentaje de la velocidad de la luz.

//recorro arreglo de clases de planetas para encontrar coincidencia en nombre con destino, una vez la encuentro muestro datos de interes y simulo viaje.
arrayPlanetas.forEach(e => {
    if(e.nombre.toLowerCase() == destinoPlaneta)
    {
        distanciaViaje = e.distancia*1000000; //calcuo distancia de viaje en kilometros. multiplico por un millon porque esta expresado en millones (en las clases. ej= 202 "millones")
        alert(e.nombre + " es un planeta que tiene un radio de: " + e.radio + " kilometros. Su descripcion de Wikipedia dice: " + e.descripcion + " Un dato curioso del mismo es que : " + e.datoCurioso);
        //utilizo toFixed para recortar los numeros decimales mostrados en algunos casos muy extensos
        alert("para llegar hasta " + destinoPlaneta + " deberas recorrer " + distanciaViaje + " kilometros. Al realizar tu viaje a un " + velocidadViajeNoScale + "% de la velocidad de la luz se calcula que tardaras un total de " + (distanciaViaje/velocidadViaje).toFixed(3) + " segundos, lo que seria igual a " + ((distanciaViaje/velocidadViaje)/60).toFixed(3) + " minutos o " + (((distanciaViaje/velocidadViaje)/60)/60).toFixed(3) + " horas.");
    }
});

alert("Muchas gracias por utilizar este simulador de viaje. En futuras actualizaciones agregaremos mas destinos y haremos que todo sea mas interactivo y amigable. Por ahora... las matematicas no fallan.");
alert("Dev by LUTTRINGER.");
