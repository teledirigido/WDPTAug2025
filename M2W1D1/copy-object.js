const response = {
  message: "Success",
  responseStatus: 200
};

const responseCopy = {...response, name: "Test", foo: "Bar", mesage: "Error"};
// responseCopy.message = "Error";

console.log(response);
console.log(responseCopy);

