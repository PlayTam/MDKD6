var groceries =[
    {name:"Яблоко", quantity:2, bought:false},
    {name:"Слива", quantity:1, bought:false},
    {name:"Груша", quantity:3, bought:false},
    {name:"Лимон", quantity:5, bought:false},
    {name:"Вода", quantity:1, bought:false},
]

function print(groceries){
    let unboughtItems = groceries.filter(item => !item.bought); // некупленные продукты
    let boughtItems = groceries.filter(item => item.bought); // купленные продукты

    unboughtItems.forEach(item => {

        console.log(`${item.name} - ${item.quantity}`);
    
      });  // некупленные
    boughtItems.forEach(item => {

        console.log(`${item.name} - ${item.quantity}`);
    
    });  // купленные
}
function addGroc(groceries, name, quantity) {

    let foundGroc = groceries.find(item => item.name === name); // ищем продукт в списке
    
    if (foundGroc) {

        // если продукт уже есть в списке, увеличиваем количество

        foundGroc.quantity += quantity;
    } 

    else {
          // если продукта нет в списке, добавляем новую покупку

          groceries.push({ name: name, quantity: quantity, bought: false });
  
    }
  
}
function buyGroc(groceries, name){
    let foundGroc=groceries.find(item => item.name === name);
    if(foundGroc){
        foundGroc.bought=true;
    }
}