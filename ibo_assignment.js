/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

/* 1 getUniqueProductCount function to return the total count of each item --------------------------------------------------------------------- */
function getUniqueProductCount(listOfProducts) {
  let uniqueProductsAndCount = {}; //intializing an empty object

  /*maping through each element of listOfProducts */
  listOfProducts.map((ele) => {
    /*if condition checks wheather the key of object uniqueProductsAndCount is available or it key=null, if it is null that implies that the key doesn't exist in uniqueProductsAndCount objects so it will create a new key value pair like "Tv":10*/
    if (uniqueProductsAndCount[ele.productName] == null) {
      uniqueProductsAndCount[ele.productName] = ele.quantity;
    } else {
      /* let suppose if condition is not satisfied then the controll will move to else block and this implies that perticular key is present in the object uniqueProductsAndCount so now in else block the value is getting updated  like "TV"=10+10*/
      uniqueProductsAndCount[ele.productName] =
        uniqueProductsAndCount[ele.productName] + ele.quantity;
    }
  });

  /*uniqueProductsAndCount is returned*/
  return uniqueProductsAndCount;
}

// 
// 
// 
// 

/* 2  getUniquePrducts and also summingup the quantities ---------------------------------------------------------------------------------- */

// 
// 
function getUniquePrducts(listOfProducts) {
  /*here all the unique products and their total quantities is acheieved by invoking function getUniqueProductCount  */
  let uniqueProducts = getUniqueProductCount(listOfProducts);
  let uniqueProductsArray = []; //initilizing an empty array where the results to be stored

  /*for-in loop is to ittrate over the uniqueProducts object to get the description of the perticular product*/
  for (var key in uniqueProducts) {
    /*an temprory object is defind which already contain productName and the quantity of the product but it dont hav the description*/
    let temp = {
      productName: key,
      quantity: uniqueProducts[key],
      description: "",
    };

    /* here for loop ittrates over the listOfProducts and further work is done by the if condition */
    for (var i = 0; i < listOfProducts.length; i++) {
      /*if conditional statement checks if the key of uniqueProducts is equal to listOfProuducts[i].productName is qual or not, if it is equal than the description key is added to the temp object once the update is done the loop will break*/

      if (listOfProducts[i].productName === key) {
        temp.description = listOfProducts[i].description;
        break;
      }
    }
    // pushing updated temprory value into the result array
    uniqueProductsArray.push(temp);
  }

  return uniqueProductsArray;
}

console.log(getUniquePrducts(listOfProducts));
