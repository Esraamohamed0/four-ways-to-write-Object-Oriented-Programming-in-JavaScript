//Constructor functions
// function Person(fullName,money,sleepMood, healthRate) {
    // this.fullName = fullName;
    // this.money = money;
    // this.sleepMood = sleepMood;
    // this.healthRate = healthRate;
// }
// Person.prototype.sleep = function(hours) {
//     if (hours==7) {
//         this.sleepMood="Happy"; 
//     }
//     else if(hours<7){
//         this.sleepMood="Tired";
//     }
//     else if(hours>7){
//         this.sleepMood="Lazy";
//     }
//     return this.sleepMood; 
// }
// Person.prototype.eat = function(meals) {
    // if (meals==3) {
    //    this.healthRate=100; 
    // }
    // else if(meals==2){
    //     this.healthRate=75;
    // }
    // else if(meals==1){
    //     this.healthRate=50;
    // }
    // return this.healthRate; 
// }
// Person.prototype.buy = function(items) {
    // for (let i = 0; i < items; i++) {
    //     this.money -=10;  
    // }
    // return this.money;   
// }

// let esraa = new Person("Esraa Elsyed mohamed",1000,"happy",75);
// console.log(esraa);
// esraa.buy(5);
// esraa.eat(1);
// esraa.sleep(6);
// console.log(esraa);
//_______________________________________________________________________________________________

//Using Classes
// class Person {
//     constructor(fullName,money,sleepMood, healthRate) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;
//     }
//     buy=function(items){
//         for (let i = 0; i < items; i++) {
//             this.money -=10;  
//         }
//         return this.money;   
//     }
//     sleep=function(hours) {
//         if (hours==7) {
//             this.sleepMood="Happy"; 
//         }
//         else if(hours<7){
//             this.sleepMood="Tired";
//         }
//         else if(hours>7){
//             this.sleepMood="Lazy";
//         }
//         return this.sleepMood; 
//     }
//     eat=function(meals){
//         if (meals==3) {
//             this.healthRate=100; 
//          }
//          else if(meals==2){
//              this.healthRate=75;
//          }
//          else if(meals==1){
//              this.healthRate=50;
//          }
//          return this.healthRate; 
//     }
// }
// const esraa = new Person("Esraa Elsyed mohamed",1099,"happy",75);
// console.log(esraa);
// esraa.buy(5);
// esraa.eat(1);
// esraa.sleep(6);
// console.log(esraa);
// __________________________________________________________________________________
//Using Objects Linking to Other Objects (OLOO
// const Person = {
//     init(fullName,money,sleepMood, healthRate ) {
//         this.fullName = fullName;
//         this.money = money;
//         this.sleepMood = sleepMood;
//         this.healthRate = healthRate;
        // this.buy = function (items) {
        //     for (let i = 0; i < items; i++) {
        //         this.money -=10;  
        //     }
        //     return this.money;  
        // }
        // this.sleep=function(hours) {
        //     if (hours==7) {
        //         this.sleepMood="Happy"; 
        //     }
        //     else if(hours<7){
        //         this.sleepMood="Tired";
        //     }
        //     else if(hours>7){
        //         this.sleepMood="Lazy";
        //     }
        //     return this.sleepMood;
        // }
        // this.eat=function(meals){
        //     if (meals==3) {
        //         this.healthRate=100; 
        //     }
        //      else if(meals==2){
        //          this.healthRate=75;
        //      }
        //      else if(meals==1){
        //          this.healthRate=50;
        //      }
        //     return this.healthRate; 
        // }
//     }
//   }
//   const esraa = Object.create(Person);
//   esraa.init("Esraa Elsyed mohamed",1099,"happy",75);
//   console.log(esraa.fullName) ;
//   console.log(esraa);
//   console.log(esraa.buy(20));
//   console.log(esraa.sleep(20));
//   console.log(esraa.eat(1));
//__________________________________________________________________________________________
//Factory functions
function Person (fullName,money,sleepMood, healthRate) {
    return {
        fullName,
        money,
        sleepMood,
        healthRate,
    //     sayHello () {
    //     console.log(`Hello, I'm ${firstName}`)
    //   },
        buy (items) {
            for (let i = 0; i < items; i++) {
                this.money -=10;  
            }
            return this.money;  
        },
        sleep (hours) {
            if (hours==7) {
                this.sleepMood="Happy"; 
            }
            else if(hours<7){
                this.sleepMood="Tired";
            }
            else if(hours>7){
                this.sleepMood="Lazy";
            }
            return this.sleepMood;
        },
        eat (meals){
            if (meals==3) {
                this.healthRate=100; 
            }
             else if(meals==2){
                 this.healthRate=75;
             }
             else if(meals==1){
                 this.healthRate=50;
             }
            return this.healthRate; 
        }
    }
  }
  
  const esraa = Person("Esraa mohamed",1099,"happy",75)
  console.log(esraa);
  console.log(esraa.sleepMood);
  console.log(esraa.healthRate);
  console.log(esraa.fullName) ;
  console.log(esraa);
  console.log(esraa.buy(20));
  console.log(esraa.sleep(20));
  console.log(esraa.eat(1));

  



