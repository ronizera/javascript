let valores = [8, 1 , 99, 77, 69, 22, 3]


/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(valores[pos])
}
