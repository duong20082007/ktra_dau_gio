let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = [];
for(let i = 0; i < orders.length; i++){
    orderReports.push(`${orders[i]} mang về ${revenues[i]} USD`);
}

for(let i = 0; i < orderReports.length; i++){
    console.log(orderReports[i]);
}

let sum = 0; 
for(let i = 0; i < revenues.length; i++){
    if(revenues[i] > 0){
        sum += revenues[i];
    }
}
console.log("Tổng doanh thu của các đơn hàng hợp lê", sum);
