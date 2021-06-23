function main() {
    this.init = function () {
        this.totalValue = 0.0;
        this.totalWeight = 0.0;
    }

    function calculateWeight(humidity) {
        var weight = 0; 

        if (humidity >= 75) {
            weight = 1.2; // very high
        }
        else if (humidity >= 70) {
            weight = 1.1; // high
        }
        else if (humidity >= 65) {
            weight = 1; // moderate
        }
        else {
            weight = 0.9; // low
        }

        return weight;    
    }

    this.accumulate = function (input, timestamp) {
        var weight = calculateWeight(input.humidity);

        this.totalValue += input.humidity * weight;
        this.totalWeight += weight;
    }

    this.computeResult = function () {
        if (this.totalValue == 0) {
            result = 0;
        }
        else {
            result = this.totalValue/this.totalWeight;
        }
        return result;
    }


    // Uncomment below for AccumulateDeaccumulate implementation
    /*
    this.deaccumulate = function (value, timestamp) {
        var weight = calculateWeight(input.humidity);

        this.totalValue -= input.humidity * weight;
        this.totalWeight -= value.weight;
    }

    this.deaccumulateState = function (otherState){
        this.state -= otherState.state;
        this.totalValue -= otherState.totalValue;
        this.totalWeight -= otherState.totalWeight;
    }
    */
}