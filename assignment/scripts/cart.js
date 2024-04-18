console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// function to .push item to basket array

let basket = [];
const max = 100
function addItem (nameofitem){ 
    console.log(" in addItem", nameofitem); 
    basket.push(nameofitem);
    return true;
  };
  
 
function listItems (list) {
    console.log("items in array", list);
    basket.indexOf();
    return basket ;
};
  

function empty(){
    console.log("empty array");
    while (basket.length>0) {
        basket.pop(-1);
        return basket.length = 0 
    
       
        
    };
    
};













// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
