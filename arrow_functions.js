//Regular function 
function checkEvenOrOddRegular(number) {
  if (number % 2 === 0) {
    console.log(`${number} is an even number. \n`);
  } else {
    console.log(`${number} is an odd number. \n`);
  }
}

checkEvenOrOddRegular(0);
checkEvenOrOddRegular(7);
checkEvenOrOddRegular(10);

const checkEvenOrOddArrow = (number) => {
    if (number % 2 === 0) {
      console.log(`${number} is an even number. \n`);
    } else {
      console.log(`${number} is an odd number. \n`);
    }
  };
  
  checkEvenOrOddArrow(34);
  checkEvenOrOddArrow(69);
  checkEvenOrOddArrow(-5);
  


