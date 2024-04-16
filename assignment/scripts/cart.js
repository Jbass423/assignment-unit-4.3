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
  

function empty(remove){
    console.log("empty array", remove);
    if (basket.length>=0) {
        basket.pop();
        return true;
    } else { 
       
        
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
