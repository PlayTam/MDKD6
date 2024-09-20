var check=[
    {name:"Apple", quant:2, cost:15},
    {name:"Raspberry", quant:20, cost:4},
    {name:"Pineapple", quant:1, cost:60},
    {name:"Melon", quant:3, cost:40},
]
function print(check){
    check.forEach(item => {
        console.log(`${item.name} - ${item.quant} - ${item.cost*item.quant} rubles`)
    });
}
function countup(check){
    let sum=0;
    check.forEach(item=>{
        sum+=(item.quant*item.cost);
    })
    return sum;
}
function findMaxValue(check){
    let maxValue=0;
    check.forEach(item=>{
        if((item.quant*item.cost)>maxValue){
            maxValue=(item.quant*item.cost);
        }
    });
    console.log(maxValue);
    return maxValue;
}
function avgValue(check){
    let totalquant=0;
    check.forEach(item=>{
        totalquant+=item.quant;
    })
    let average=countup(check)/totalquant;
    console.log(average);
    return average;
}