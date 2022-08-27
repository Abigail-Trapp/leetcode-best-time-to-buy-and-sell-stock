  var maxProfit = function(prices) {
    let globalProfit = 0
    let minBuyPrice = Infinity

for(let i of prices){
 if(minBuyPrice > i){
     minBuyPrice = i
 }
 const currentProfit = i - minBuyPrice
 if(currentProfit > globalProfit){
     globalProfit = currentProfit
 }
}
 return globalProfit
};
console.log(maxProfit([7,1,5,3,6,4]))