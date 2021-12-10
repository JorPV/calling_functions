// Hey kiddo
const newFunction = function(yourAge) {
    console.log('Enter newFunction');
  if (yourAge >= 18) {
    return true;
  } else {
    return false;
  }
};

const checkNewFunction = function(yourAge){
    console.log('Entering chekNewFunction');
    if (newFunction = true) {
        return 'Hello there';
    } return 'Hey kiddo';
};

const adultOrNot = function(yourAge){
  console.log('And now entering adultOrNot');
  const yearsOld = newFunction(yourAge);
  const notAnAdult = checkNewFunction(yourAge);
  return notAnAdult;
}

console.log(adultOrNot(12));

// VAT calculations
// Exercise 1 
const vatType = function(VAT1, VAT2){
  const VAT1 = x * 1.21;
  const VAT2 = x * 1.09;
};

const product = function(item){
  const goodsPrice = item + VAT1;
  const foodPrice = item + VAT2;
  const item = x; 
  vatType(goodsPrice, foodPrice);
};

console.log(product);
