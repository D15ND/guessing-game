class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        return this.flo=Math.round((this.min+this.max)/2);
    }

    lower() {
        return this.max=this.flo;
    }

    greater() {
        return this.min=this.flo;
    }
}

module.exports = GuessingGame;
