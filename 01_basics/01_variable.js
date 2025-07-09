const accountId = 123456;
let accountEmail = "aman@gmail.com";
var accountPassword = "1234abcd";

accountCity = "Delhi"; 
let accountState;

// accountId = 2; not allowed as accountId is a constant

accountEmail = "hello@gmail.com";
accountPassword = "1234xyz";
accountCity = "Mumbai";


/*
prefer not to use var
because of issue in block and function scope
use let and const instead
*/

console.log(accountId);

console.table({
  accountId,
  accountEmail,
  accountPassword, 
  accountCity,
  accountState
});
