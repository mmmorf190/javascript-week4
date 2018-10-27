// // var user1 = {
// //         firstname: 'Bob' ,
// //         lastname: 'Rockers',
// //         age: 42
// // }

// // var user2 = {
// //     firstname: 'Zack',
// //     lastname: 'Mayes',
// //     age: 12
// // }
// // var weddintlist =[
// // 'old',
// // 'new',
// // 'barrowed',
// // 'red'
// // ]


// // console.log(weddinglist[2]);



// // var userlist =[
// //     user1,
// //     user2

// // console.log(userlist[1].firstname);


var user1 = {
    firstname: 'Bob' ,
    lastname: 'Rockers',
    adress: '432 Fenway park'
}

var user2 = {
firstname: 'Zack',
lastname: 'Mayes',
adress: '413 Walaby'
}

var user3 = {
    firstname: 'Jan',
    lastname: 'Peyton',
    adress: '420 blvd'
    }

var user4 = {
        firstname: 'Berny',
        lastname: 'Maydolf',
        adress: '490 wallstreet'
        }


var user5 = {
            firstname: 'Sean',
            lastname: 'Bergandy',
            adress: '900 tintin'
            }





var adressbook = [
    user1,
    user2,
    user3,
    user4,
    user5

]

// console.log(userlist[1].adress);




function printFirstname(add){
  for(var i=0; i<add.length; i++)
  console.log(add[i].firstname)
  console.log(add[i].lastname)
  console.log(ass[i].address)
}


// printContact2(adressbook);
// forEach(addressbook,printFirstname.firstname,printFirstname.lastname,printfirstname.address)




// printFirstnames(addressbook);
// for(var i = 0; i<thing.length; i++){
//     console.log(thing[i].lastname);
// };

// printFirstname(addressbook);
// ourFunction(addressbook);



// function forEach(arr1,func1)
// for (var i=0; i<arr1; i++){
//     func1(arr1[i]);
// }

// function printName(x){
//     console.log(x.firsntmae,x.lastname)
// }

// function printAddr(x){
//     console.log(x,address);
// }

// forEach(adressbook,printName);
// forEach(addressbook.printAddr)


// forEach(addressbook,function(x){console.log(x.phone)})


// var wtf() =>{

// }

var printhello = function(){
    console.log("Hello, Everyone!")
}

setTimeout(printhello, 5000);

setTimeout(function(){
console.log('hello')}, 5000);