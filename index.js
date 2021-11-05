// sao chép một chuỗi nhiều lần ==> sử dụng repeat(number)
`var testRepeat = "testRepeat";
console.log(testRepeat.repeat(5));`;

// biến một chuỗi thành 1 chuỗi có độ dài cụ thể
//==> padStart(number, "ky tự"), padEnd(number, "ky tự")
// var phoneNumber = 0965882467; //==> *******467
// var newNumber = phoneNumber
//   .toString()
//   .slice(-3)
//   .padStart(phoneNumber.toString().length + 1, "*");
// console.log(newNumber);

// var newNumber = `0${phoneNumber // ==> 096*******
//   .toString()
//   .slice(0, 3)
//   .padEnd(phoneNumber.toString().length, "*")}`;
// console.log(newNumber);

// tách chuỗi thành một mảng các ký tự của chuỗi đấy
`var string = "nguyen thac hung";
console.log([...string]);
console.log(string.split(" "));`;

//cách viết hoa chữ cái đầu tiên
// function hello(words) {
//   return words
//     .toLowerCase()
//     .split(" ")
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(hello("xin chào các bạn"));

// const hello1 = "hello";
// console.log(hello1[0]);

// hoisting

// function oto(obj) {
//   obj.name = "mercedes";
//   console.log(obj);
// }

// const car = {
//   name: "BMW",
// };
// oto(car);
// console.log(car);

`var car = {
  name: "hello",
};

var honda = car;
honda.name = "bye";

console.log(car);`;
`console.log(honda);`; // car    #001      {name: "hello"}              {name: "hello"} //        địa chỉ -     giá trị           -        lưu trữ(ram)
// honda  #001

// tham trị
// var a = 10;
// var b = a;
// a = 20;
// console.log(a);
// console.log(b);
// a    #001          {name: "hello"}             {name: "hello"} //        địa chỉ -     giá trị           -        lưu trữ(ram)
// b    #002          {name: "hello"}             {name: "hello"}

`var car = {
  much: "10",
  name: {
    honda: "honda",
    bmw: "bmw",
  },
};

function hello(car) {
  var newCar = { ...car };
  newCar.much = "20";
  console.log(newCar);
}
hello(car);
console.log(car);
`;

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// const test = new Promise((res, rej) => {
//   res(3);
// }).then((data) => {
//   console.log(data);
// });

// console.log(4);

// function createStorage(key) {
//   const store = JSON.parse(localStorage.getItem(key)) ?? {};

//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(store));
//   };

//   const storage = {
//     get(key) {
//       return store[key];
//     },
//     set(key, value) {
//       store[key] = value;
//       save();
//     },
//     remove(key) {
//       delete store[key];
//       save();
//     },
//   };
//   return storage;
// }

// const profileSetting = createStorage("profile_setting");

// profileSetting.set("hello", "hi");
// profileSetting.set("hello1", "hi1");
// profileSetting.set("hello2", "hi2");
// console.log(profileSetting.get("hello"));

// function speak() {
//   var words = "hi";
//   return function logIt() {
//     console.log(words);
//   };
// }

// var sayHello = speak();
// sayHello();

// currying function
// const add = (a = 4) => {
//   console.log(a);
//   return (b) => {
//     console.log(b);
//   };
// };

// add(1)(4);

// tổng ôn javascript
// const array = [1, 2, 3, 4, 5];
// console.log(array.toString());

// console.log(array.join(","));

//  newArrconstay = array.pop();
// console.log(newArray);

// const newArray = array.push(1, 2);
// console.log(array);

// const Hung = "NguyenThacHung";
// console.log(Hung.splice(3, 8));
// console.log(Hung);

// format số sang đơn vị tiền việt ==> sử dụng NumberFormart
// const number = 1000000;
// console.log(
//   new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
//     number
//   )
// );

// chuyển từ một chuỗi sang số
//  Number.parseInt(1.5) => 1;
//  Number.parseFloat(1.5) ==> 1.5;

// function isEqual(obj1, obj2) {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//     return true;
//   }
//   return false;
// }

// const obj1 = {
//   name: "Nguyen Thac Hung",
//   age: 23,
// };

// const obj2 = {
//   name: "Nguyen Thac Hung",
//   age: 22,
// };

//============= tìm số lớn nhất
// v1
// function FindMaxI(array) {
//   if (!Array.isArray(array) || array.length === 0) return undefined;
//   let Max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > Max) {
//       Max = array[i];
//     }
//   }
//   return Max;
// }

// console.log(FindMaxI([1, 2, 3, 4, 5, 6]));

//v2
// function FindMaxI(array) {
//   if (!Array.isArray(array) || array.length === 0) return undefined;
//   let Max = array[0];
//   array.forEach((value) => (value > Max ? (Max = value) : Max));
//   return Max;
// }

// console.log(FindMaxI([1, 2, 3, 4, 5, 6]));

//v3
// function FindMaxI(array) {
//   if (!Array.isArray(array) || array.length === 0) return undefined;

//   return array.reduce((max, number) => (number > max ? number : max));
// }

// console.log(FindMaxI([1, 2, 3, 4, 5, 6]));

// ==================== tìm từ dài nhất
//v3
// function FindMaxLengthI(array) {
//   if (!Array.isArray(array) || array.length === 0) return undefined;

//   return array.reduce((maxLength, word) =>
//     word.length > maxLength.length ? word : maxLength
//   );
// }

// console.log(FindMaxLengthI(["a", "ab", "abc"]));


//write func debounce
// function callBack(){
//   console.log("hello");
// }

// function debounce (callback, await){
//   let setTimeout1;

//   return function(){
//     if(setTimeout) {
//       clearInterval(setTimeout1)
//     }
    
//     setTimeout1 = setTimeout(callback, await)
//   }
// }

// const test = debounce(callBack, 100)
// test()
// test()
// test()
// test()
// test()


//write throttle
// function throttle(callBack, await){

//   let setTimeout2;

//   return function(){

//     if(setTimeout2) return;

//     setTimeout2 = setTimeout(callBack, await);

//   }
// }

// const test2 = throttle(callBack, 200)
// test2()
// test2()
// test2()


//this in setTimeout

const obj = {
  name: "hungnt",

  //this của arrow function sẽ thừa kết this parent. mà timeoutArrow có this và this là obj cha
  timeoutArrow(){
    console.log("outer this", this);
    setTimeout(() => {
      console.log(this.name);
    });
  },
  
  arrow: ()=>{
    console.log("name", this.name);
    console.log("this", this)
  },
  
  timeoutNormal(){
    console.log("outer this", this);
    setTimeout(function(){
      console.log("this", this);
    });
  }
  
}
// obj.timeoutArrow()
obj.timeoutNormal()


