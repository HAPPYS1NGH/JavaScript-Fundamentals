class Pact {
    constructor(fn) {
        this.resolve = (value) => {
            this.thenFn(value);
        }
        this.reject = (value) => {
            this.catchFn(value);
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFn = _then;
    }
    catch(_catch) {
        this.catchFn = _catch;
    }
}

module.exports = Pact;