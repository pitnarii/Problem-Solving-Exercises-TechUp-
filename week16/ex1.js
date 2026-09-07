/*
**Exercise 1: Capitalize First Letter**

- ให้เขียน Function ที่ชื่อว่า `capitalizeWords` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `sentence` มี Value Type เป็น `String`
    - Function นี้จะ Return ค่า String ที่มีการเปลี่ยนให้ตัวอักษรแรกของทุกคำในประโยคเป็นตัวพิมพ์ใหญ่
    - เช่น
*/

function capitalizeWords(sentence) {
   //Start Coding Here
    for (let i = 0; i < sentence.length; i++) {
        sentence.charAt(0).toUpperCase() + sentence.slice(1)
    }
    
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"
