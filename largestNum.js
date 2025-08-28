let findLargetNum = (arr) => {
    let lNum = arr[0];
    for(let i=0 ; i<=arr.length; i++) {
        if(arr[i]>lNum) {
         lNum = arr[i];
        }
    }
    console.log(lNum);
    
}
findLargetNum([4,7,69,2,1,23]);