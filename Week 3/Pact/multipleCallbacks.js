class Pact {
    constructor(fn) {
        this.thenFns = [];
        this.catchFns = [];
        this.resolve = (value) => {
            this.thenFns.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.catchFns.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFns.push(_then);
    }
    catch(_catch) {
        this.catchFns.push(_catch);
    }
}

module.exports = Pact;