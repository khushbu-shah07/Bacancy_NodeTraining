// Create two objects named originalObject and modifiedObject. Assign the same properties to both objects. Modify one property in modifiedObject and observe how it affects the other object due to reference. Log the properties of both objects to the console.

let originalObject = {
    key1 : "value1",
    key2 : "value2",
}

let modifiedObject = originalObject;

modifiedObject.key2 = "value3"
console.log( originalObject); 
console.log(modifiedObject);


// Here we passed the originalObject as referenced to another modifiedObject...so we if we will modifed any property of modifiedObject then it will reflect in the originalObject