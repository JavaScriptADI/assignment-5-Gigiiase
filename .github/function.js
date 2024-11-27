// 1 What is a function? 
// ფუნცია არის პარამეტრი რომელსაც გადავცემთ არგუმენტებს, რომლის გამოძახებაც ნებისმიერ დროს შეგვიძლია. ის ასევე ინახავს მასში მოცემულ ინფორმაციას ცვლადებშ მაგრამ როგორც კი ჯიესი გაივლის მასში ეს ცვლადი ქრება. 
// 2 What is a function call?
// ფუნქციის გამოძახებას ეწოდება ქოლი ან invoke 
// 3 What is a code block, and how does it relate to a function? 
// ბლოკი არის ის რაც ფუნქციის შიგნით იწერება {
//     აქ რაც იწერება და ფუნქციის გამოძახების დროს ბლოკში მოცემულ ინფორმაცია გამოქვს კონსოლში
// }
// 4
function greetUser(user) {
    console.log(`hello ${user}`);
}
greetUser("zura");

// 5 Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh."

function reverseName(name) {
return name.split('').reverse().join('');  
}
let sum  = reverseName("gamarjoba");
console.log(sum);  // es split da join ar vicodi vera da ver gavakete es questi da gadmovwere... shegekitxebi leqciaze.... ;))))

// 6 What is a default argument, and how does it work?
// დიფაულტი არის ნაგულისხმევი მაგალითად თუ firstname ში მომხამრებელმა სახელი არ გადმოგვცა შემიძლია დაფაულტად
//  დავაყენო ნებისმიერი რამ მაგალითად 
 function greet(user = "anonymous")  // ესარის დიფაულტ ველიუ
  { 
    console.log(`zdarova ${user}`);
 }
 greet(); // ხოლო თუ გადავცემ სახელს გადაეწერება ზემოდან დიფაულტს

//  7 What is the scope and lifetime of a variable?
// სკოუპ არის ლოკალური ცვლადი რაც იმას ნიშნავს რომ ფუნქციის
//  გარეთ რომ შევქმნა ცვლადი იგივე სახელით და გამოვიძახო კონსოლში ჩვეულებრივად იმუშავებს.
//  ახალი ცვლადი გადაფარავს ფუნქციის ცვლადს. ასევე შემიძლია ფუნქციაში გლობალური ცვლადი გამოვიყენო ისეთი ცვლადი
// რომელიც ფუნქციის გარეთაა მაგარამ    ლაიფტაიმი ლოკალური ცვლადი ფუნქციის დამთავრებისას ქრება

// 8  What is a return value?  მიბრუნებს შედეგს და ჯამს თუ არიქნება განსაზღვრული არაფერი უნდიფაინდს დამიბრუნებს
const number = [1, 2, 3, 10, -10, -1000, 1000, 12];

console.log(number);
number.sort(function(a, b) {
    return b - a;
})
console.log(number);

// 9 What is the return value of a function that does not have a return statement?
// თუ არ ექნება რეთურნს სთეითმენტი შედეგი იქნება ანდიფაინდი

// 10
// function foo(x) {
//   return x * 2; // shecdoma iyo return ar hqonda mititebuli rom shedegi gamocheniliyo
// }

// let x = 7; // aq ganvsazgvre x is mnishvneloba
// x = foo(x); // რახან განვსაძღვრე იქსის მნიშნვლენობა იქსი უდრის ფუნიაში ჩაწერილ return 7 * 2 ს.
// console.log(x);

// 11 
// function bar(x = 8) {
//    return x + 1;
// }

// function foo(x) {
//     x = bar(x);                           // es gamiwirda  
//     x *= 2;
//     return x;
// }

// let x = 7;
// x = foo(x);
// console.log(x); // x should change!

// 12 
// function foo(x)  {
//     if (x > 5) {
//         return x;       // თუ იქსი მეტია ხუთზე დამიბრუნოს იქსი ანუ 2, ხოლო თუ არა დამიბრუნოს იქს პლიუს 1 
//     } else {
//         return x + foo(x + 1);  // ას გაგრძელდეს მანამ სანამ იქსი არიქნება 5 ზე მეტი 
//     }
// }
// let x = 2;
// x = foo(x);
// console.log(x); 

// 13
// function sum(arraySum) {
//     return arraySum.
// }
// let oddNumber = [1, 2, 3, 5, 7, 8, 9, 10, ];         ver gavigeee
 
// 14 
// function trueOrFalse(test) {

// }




