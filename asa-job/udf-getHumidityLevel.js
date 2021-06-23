function main(humidity) {

    var result = null; // default

    try {

        if (isNaN(humidity)) {
            throw 'humidity is not a number';
        }

        if (humidity >= 75) {
            result = 'very high';
        }
        else if (humidity >= 70) {
            result = 'high';
        }
        else if (humidity >= 65) {
            result = 'moderate';
        }
        else {
            result = 'low';
        }

    } catch(error){
        result = 'error: ' + error;
    }
    
    return result;
}