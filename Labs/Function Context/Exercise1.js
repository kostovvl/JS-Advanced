function area() {
    return this.x * this.y;
}

function volume() {
    return this.x * this.y * this.z;
}

function calculateArea(area, volme, input) {
  
    let object = JSON.parse(input);

    let objectsResult = [];

object.forEach(element => {
    let areaRes = area.call(element);
    let volumeRes = volume.call(element);

    let returnObj = {area: areaRes, volume: volumeRes};
    objectsResult.push(returnObj);
});

console.log(JSON.stringify(objectsResult));
}

calculateArea(area, volume,'[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]' )