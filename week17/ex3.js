/*
- ให้เขียน Function ที่ชื่อว่า `filterProducts` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 3 ตัวคือ:
        - `products` มี Value Type เป็น Array ของ Object 
        โดย Object แต่ละอันจะมี Key 3 ตัวได้แก่ `name`, `category` และ `price`
            - โครงสร้างของสินค้าแต่ละตัวจะอยู่ในรูปแบบนี้
            {
                name: String,
                category: String,
                price: Number
            }
- `targetCategory` มี Value Type เป็น String
- `targetPrice` มี Value Type เป็น Number
- Function จะ Return ค่าเป็น Array ของสินค้าที่:
    - อยู่ใน `targetCategory` ที่กำหนด
    - และมีราคาไม่เกิน `targetPrice`
- เช่น
*/

function filterProducts(products, targetCategory, targetPrice) {
   //Start Coding Here
    const res = []
    products.forEach((product) => {
        if(product.category === targetCategory && product.price <= targetPrice ) {
            return res.push(product)
        }
    });
return res
};

let result = filterProducts([
   { name: "Notebook", category: "stationery", price: 50 },
   { name: "Pen", category: "stationery", price: 20 },
   { name: "Shoes", category: "fashion", price: 90 },
   { name: "Bag", category: "fashion", price: 300 },
   { name: "Pencil", category: "stationery", price: 10 }
], "stationery", 30);

console.log(result);
// Expected Output:
// [
//   { name: "Pen", category: "stationery", price: 20 },
//   { name: "Pencil", category: "stationery", price: 10 }
// ]