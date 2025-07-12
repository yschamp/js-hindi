// Async programming

    // Javacript is a synchronous and single threaded programming language
    // synchronous -> each line of code is executed in sequence from top to bottom. Only when the previous line gets executed, next line gets picked up for execution
    // single threaded -> You cannot execute two pieces of code simultaneously. That means our plain old JS engine will result in starvation and choking. It makes it slow

    // However, we have various runtime engines in form of chrome's V8 engine, nodejs, donnejs
    // that optimises the execution and accerlates the code execution and makes this process
    // so efficent that you feel its a mutli threaded language


// Blocking code (Sync)
    // This is a piece of code that when we start executing this code, it will block the exection of
    // all the subsequent code. So, only once we finish executing this code, subsequent code
    // is picked up for exection

    // Example - Read a file synchronously 
    // Reading a file is a nightmare for any programming language bcoz in order to 
    // achieve this, JS Engine has to pass the control to OS Kernel and Kernel adds it
    // in its queue. Once picked, Kernel start reading the file and passes the result 
    // back to JS engine. Untill then, JS Engine it is blocked and can't execute anything

    // Usecase - Notify the customer once his account is registered

// Non-blocking code (Aync)
    // Basically, we are telling the JS engine that pls execute this piece of code and notify me once done
    // Untill then, we can continue executing the subsequent piece of code and no CPU cycles are wasted in waiting
    // Once executed, the JS Engine notifies and we can perform operations based on that result

    // Example - Read a file, Fetch results from an API, register an event

// Event Loop - More about this in the image attached