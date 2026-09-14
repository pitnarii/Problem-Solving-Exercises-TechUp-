/*
**Exercise 2: Remove Duplicates**

- ให้เขียน Function ที่ชื่อว่า `removeDuplicates` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `arr` ซึ่งเป็น Array ที่บรรจุตัวเลข
    - Function นี้จะ Return ค่าเป็น Array ใหม่ ที่มีเพียงตัวเลขที่ไม่ซ้ำกัน จาก `arr` เดิม
    - เช่น
*/



function removeDuplicates(arr) {  
const res = []
   //Start Coding Here
   for (let i = 0; i<arr.length; i++) {
    for (let j = i +1; j < arr.length; j++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
   } return res
};

let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(result1); // [1, 2, 3]

let result2 = removeDuplicates([5, 5, 5, 5]);
console.log(result2); // [5]