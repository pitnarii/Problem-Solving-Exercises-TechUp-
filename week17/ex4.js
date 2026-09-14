/*
### Optional 🌟

**Optional: Find Longest Word**

- ให้เขียน Function ที่ชื่อว่า `findLongestWord` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น String
    - Function นี้จะ Return ค่าเป็นคำที่มีความยาวมากที่สุดในประโยค วัดจากจำนวนตัวอักษรในแต่ละคำ
        - ถ้ามีคำที่ยาวที่สุดมากกว่า 1 คำ ให้ return คำแรกที่เจอก่อน
    - เช่น
*/

function findLongestWord(text) {
   //Start Coding Here
    let sep = text.split(" ")
    let max = ""
    console.log(sep)
    for (let i = 0; i < sep.length; i++)
        if (sep[i].length > max.length) {
            max = sep[i]
    }
return max
};

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"