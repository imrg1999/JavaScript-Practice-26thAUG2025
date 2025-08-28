let findLargeNSmall = (arr) => {
    let largest = arr[0];
    let smallest = arr[1];
    for(let index = 0; index<arr.length; index++) {
        if(arr[index] > largest) {
            largest = arr[index];
        }
        if(arr[index] < smallest) {
            smallest = arr[index];
        }
    }
    console.log("largest:"+ largest);
    console.log("smallest:", smallest);
    
}

findLargeNSmall([5,9,8,4,10,20,-8])