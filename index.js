function receivesAFunction(argument) {
    argument();
}

function returnsANamedFunction() {
    return function name() {
        console.log("name function");
    }
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("anonymous");
    }
}