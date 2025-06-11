
for (let i = 0; i <= 10; i++) {
    const element = i
    // console.log(element)
    
}

for(let i = 1; i < 3; i++) {
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i * j}`)
    }
}

let i = 1
while(i <= 10){
    // console.log(i)
    i++;
}



let j = 1;
do{
    // console.log(j)
    j++
}while(j <= 10);


let arr = ["shaktiman", "batman"]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


for (let i = 0; i < 10; i++) {
    if(i == 5){
        // break;
        continue;
    }
    console.log(i)
}