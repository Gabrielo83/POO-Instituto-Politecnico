//----DIFERENCIAS ENTRE LA FUNCION Y EL USO DE CLASS CON CONSTRUCTOR

// function Persona2(name, lastname, age) {
//   (this.name = name), (this.lastname = lastname);
//   this.age = age;
// }

// const user2 = new Persona2("Romina", "Moran", 35);
// console.log(user2);

// class Persona {
//   constructor(name, lastname, age) {
//     (this.name = name), (this.lastname = lastname);
//     this.age = age;
//   }
//   //agrego un método
//   saludo() {
//     return `Hola ${this.name} ${this.lastname}`;
//   }
// }

// class Compania {
//   constructor(name, empleados) {
//     (this.name = name), (this.empleados = empleados);
//   }
// }

// const user1 = new Persona("Gabriel", "Caamaño", 40);

// const compania1 = new Compania("Empresa1", "Gabriel");

// console.log(compania1.saludo());
// // const user2 = new Persona("Romina", "Moran");

// console.log(user1);
// // console.log(user2);

// console.log(user1.saludo());
// console.log(user2.saludo());

//----PRINCIPIOS DE LA POO

//----Asociación: la capacidad de referir a otros objetos (unir y enlazarlos en codigo) pero que funcionan de manera independiente

// class Persona {
//   constructor(name, lastname) {
//     (this.name = name), (this.lastname = lastname);
//   }
// }

// const user1 = new Persona("Gabriel", "Caamaño");

// const user2 = new Persona("Romina", "Moran");

// // //relación de tipo amigo - padre
// user1.parent = user2;

// console.log(user1);
// console.log(user2);

//----Agregación: capacidad de referir a otros objetos pequeños independientes. Relación entre componente de mayor responsablidad y menor responsabilidad (Agreggate mayor resp) (Component menor resp)

// const company = {
//   nombre: "Empresa SRL",
//   empleados: [],
// };

// class Persona {
//   constructor(name, lastname) {
//     (this.name = name), (this.lastname = lastname);
//   }
// }

// const user1 = new Persona("Gabriel", "Caamaño");
// const user2 = new Persona("Romina", "Moran");

// company.empleados.push(user1);
// company.empleados.push(user2);

// console.log(company);

//----Composición: Capacidad de referir a otros objetos dependientes.

// const persona = {
//   nombre: "",
//   apellido: "",

//   //el componente dirección es dependiente de la variable persona
//   direccion: {
//     calle: "",
//     Numero: "",
//     Barrio: "",
//   },
// };

//----Encapsulación: capacidad de concentrar datos y codigo en una entidad y ocultando codigo y detalles internos.

// function Company(nombre) {
//   this.empleados = [];
//   this.nombre = nombre;

//   //   ordenarEmpleados: function () {}
//   this.getEmpleados = function () {
//     return this.empleados;
//   };

//   this.addEmpleados = function (empleados) {
//     this.empleados.push(empleados);
//   };
// }

// // //1)se puede acceder a cualquier propiedad para cambiar su valor Ej
// // company.ordenarEmpleados = "hola";

// // console.log(company.ordenarEmpleados());

// ////2) creamos el getEmpleados para evitar que se acceda a "empleados"

// const compañia1 = new Company("Empresa123");

// // console.log(compañia1);
// // console.log(compañia1.empleados);

// compañia1.addEmpleados({ nombre: "Gabriel" });
// compañia1.addEmpleados({ nombre: "Marcos" });
// // compañia1.addEmpleados({ Marcos });

// console.log(compañia1.getEmpleados());

//----Herencia: Un objeto puede adquirir las propiedades, metodos y características de otro

//agregamos con el modulo
// const Persona = require("./clases");

// class Programador extends Persona {
//   constructor(lenguaje, nombre, apellido, dni) {
//     super(nombre, apellido, dni);
//     this.lenguaje = lenguaje;
//   }
// }

// const persona1 = new Persona("Gabriel", "Caamaño", 1234567);

// const programador1 = new Programador("Java", "Romina", "Moran", 1324324324);

// console.log(persona1);
// console.log(programador1);

//----Polimorfismo: Sobrecarga de metodos

//1) ejemplo
//En otros lenguajes de POO

//public int contarItems(int x){
// return x.ToString().Length
// }
//public string contarItems(string x){
// return x.Length
// }

//En JS
// function contarItems(x) {
//   return x.toString().length;
// }

// console.log(contarItems(30004));
// console.log(contarItems(true));
// console.log(contarItems("Hola Buen dia"));

//2) ejemplo

// En otros lenguajes
// public int Suma(int x, int y){
// return x + z
// }
// public int Suma(int x, int y, int z){
// return x + y + z
// }

// function suma(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }

// console.log(suma(5, 8));

//----Polimorfismo: Herencia

// const Persona = require("./clases");

// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
// }

// class Programador extends Persona {
//   constructor(lenguaje, nombre, apellido) {
//     super(nombre, apellido);
//     this.lenguaje = lenguaje;
//   }
// }

// class Compania {
//   constructor(nombre, empleados) {
//     this.nombre = nombre;
//     this.empleados = empleados;
//   }
// }

// const compania1 = new Compania("Empresa 1", "Rogelio");
// const persona1 = new Persona("Gabriel", "Caamaño");
// const persona2 = new Programador("Java", "Romina", "Moran");

// console.log(persona1);
// console.log(persona2);

// function nombreCompleto(p) {
//   console.log(`${p.nombre} ${p.apellido} `);
// }

// nombreCompleto(persona1);
// nombreCompleto(compania1);
