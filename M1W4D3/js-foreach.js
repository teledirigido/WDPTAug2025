const list = ['bob', 'peter', 'alice'];

function callback(item) {
  console.log(item)
}

list.forEach(callback);

function printSomething(myfirstparam) {
  console.log(myfirstparam)
  /**
   * 
   * [Arguments] {
      '0': 'hello world',
      '1': 1,
      '2': 2,
      '3': [ 'alice', 'john' ]
    }
   *
   */
  console.log(arguments); // special keyword that stores ALL parameters passed into the fn
}

printSomething('hello world', 1, 2, ['alice', 'john'])
