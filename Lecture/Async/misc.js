const firstAsyncOperation = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First operation completed");
            resolve("Result of first operation");
        }, 1000);
    });
};

const secondAsyncOperation = (previousResult) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second operation completed");
            resolve(`Result of second operation using ${previousResult}`);
        }, 1000);
    });
};

firstAsyncOperation()
    .then((resultOfFirstOperation) => {
        // Chain the second asynchronous operation
        return secondAsyncOperation(resultOfFirstOperation);
    })
    .then((finalResult) => {
        console.log("Final result:", finalResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    });