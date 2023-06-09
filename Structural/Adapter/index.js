var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SentCVSFormatRequest = /** @class */ (function () {
    function SentCVSFormatRequest() {
    }
    SentCVSFormatRequest.prototype.requestApi = function () {
        return 'Send report in csv format.';
    };
    return SentCVSFormatRequest;
}());
var ConverToJSON = /** @class */ (function () {
    function ConverToJSON() {
    }
    ConverToJSON.prototype.converJSONRequest = function () {
        return 'Sent request using JSON format';
    };
    return ConverToJSON;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.requestApi = function () {
        return this.adaptee.converJSONRequest();
    };
    return Adapter;
}(SentCVSFormatRequest));
var clientCode = function (sendCVSFormatRequest) {
    console.log(sendCVSFormatRequest.requestApi());
};
var target = new SentCVSFormatRequest();
clientCode(target);
console.log('');
var adaptee = new ConverToJSON();
adaptee.converJSONRequest();
var adapter = new Adapter(adaptee);
clientCode(adapter);
