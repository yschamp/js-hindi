/**
 * In Javascript, the code is executed by the runtime engine in three phases
 * 1. Global Execution Context
 * 2. Memory Creation Phase
 * 3. Execution Phase
 * 
 * let a = 10
    let b = 20

    function add(n1, n2){
        return n1 + n2
    }

    const result = add(a, b)
 * 
 * 1. Global Execution Context:
 * When a js code is sent to the engine for execution, it creates global object 
 * (that has many helpful properties and functions). And then it assigns this global 
 * object to a variable called this. Please note global object in browser is windows object
 * 
 * 
 * 2. Memory Creation Phase:
 * In this phase, memory is reserved for all the variables(undefined) and functions(definations)
 * a = undefined
 * b = undefined
 * add  = function add(n1, n2){
        return n1 + n2
    }
 * result = undefined
 * 
 * 3. Execution Phase
 * a = 10
 * b = 20
 * 
 * -> New Sandbox(environment) Execution Context + execution thread is created for add()
 * -> i. Creation Phase
 *       n1 = undefined
 *       n2 = undedined
 * -> ii. Execution Phase
 *      n1 = 10
 *      n2 = 20
 *      return 30
 * 
 * The newly created enviroment is deleted and add() is removed from call stack
 * Control moves back to main code, continuing next steps after add()
 * result = 30
 * 
 */



