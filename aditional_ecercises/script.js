function countTrue(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeOf(arr[0]) != "true") {
            return 0;
        } else if (typeOf(arr[i]) === "true") {
            counter +=1;
        }
        return counter;
    }
}