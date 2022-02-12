// program to pass a function as a parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function Name(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

Name('John', greet)