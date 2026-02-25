let orders=["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues=[1500, 2800, 1200, -500, 3200];

const mixArray=(orders,revenues)=>{
    let orderReports=orders.map((el,index)=>{
        return el +" Mang về " + revenues[index]+ " USD"
    })
    console.log(orderReports);
}
mixArray(orders,revenues)
    let total= revenues.filter((el)=>{
        return el > 0
    })
let total1 = 0
for(let i = 0;i<total.length;i++){
    total += Number()
    console.log();
    
}
console.log(total1);