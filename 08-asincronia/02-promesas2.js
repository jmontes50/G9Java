const tarea1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('R1')
   }, 3000)
})

const tarea2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
    //resolve('R2')
     reject('ER2')
   }, 3000)
})

tarea1()
.then((resultado1) => {
 console.log(resultado1)
 return tarea2(); //retornando una nueva promesa
})
.then((resultado2) => {
 console.log(resultado2)
})
.catch((error) => {
 console.log(error)
})