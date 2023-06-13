var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.getInstance = function () {
        if (!Phone.instance) {
            Phone.instance = new Phone();
        }
        return Phone.instance;
    };
    Phone.prototype.call = function (phone) {
        console.log("Calling to ".concat(phone));
        return "Calling to ".concat(phone);
    };
    return Phone;
}());
function clientCode() {
    var s1 = Phone.getInstance();
    var s2 = Phone.getInstance();
    var a = s1.call('dasdsa');
    console.log('s', s2);
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();
