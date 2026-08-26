/*
**Exercise 3: Find Max Number**

- ให้เขียน Function ที่ชื่อว่า `findMax` ซึ่งมีคุณสมบัติดังนี้
    - รับ Parameter 1 ตัวคือ `nums` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
    - Function นี้จะ Return ค่าเป็น ตัวเลขที่มากที่สุด ใน Array นั้น
    - เช่น
*/

function findMax(nums) {
   //Start Coding Here
   let max_num = nums[0];
   for(i=0; i<nums.length; i++) {
    if (nums[i] > max_num) {
        max_num = nums[i]
    } 
   } return max_num
};

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2