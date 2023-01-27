class Pact {
    constructor(fn) {
        this.resolve = () => {

        }
        this.reject = () => {
            
        }
        fn(this.resolve, this.reject);
    }
    then() {
        
    }
    catch() {
        
    }
}

module.exports = Pact;