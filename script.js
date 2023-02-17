let items =[];
function AddItem(product, price){
    let newItem={
        Product:product,
        Price:price
    };

    items.push(newItem);
    console.log(newItem);
}

function DisplayItems(){
    items.forEach((i)=>{
        console.log(`Item: ${i.Product} Price: $${i.Price}`)
    });
}

function SumItems(){
    let sum=0;
    items.forEach((s)=>{
        sum = sum + s.Price;
    });
    console.log(`$${sum}`);
}