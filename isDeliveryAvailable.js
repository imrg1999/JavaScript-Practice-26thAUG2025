let isDeliveryAvailable = (city, distance) => {
    if(city === "Metro" && distance <= 30) {
        return 'Deliverable: Free Delivery Applicable'
    } else if(city === "Non-Metro" && distance <=50 ) {
        return 'Deliverable: Charges Applicable'
    } else {
        return 'Not Deliverable'
    }
}

console.log(isDeliveryAvailable("Non-Metro",69));
