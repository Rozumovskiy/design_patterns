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
var Medical = /** @class */ (function () {
    function Medical() {
        this._next = null;
    }
    Medical.prototype.setNext = function (next) {
        this._next = next;
    };
    Medical.prototype.handle = function (request) {
        if (this._next) {
            return this._next.handle(request);
        }
        return null;
    };
    return Medical;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.handle = function (request) {
        if (request === 'doctor') {
            return "Doctor can handle ".concat(request, " request");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Doctor;
}(Medical));
var Nurse = /** @class */ (function (_super) {
    __extends(Nurse, _super);
    function Nurse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nurse.prototype.handle = function (request) {
        if (request === 'nurse') {
            return "Nurse can handle ".concat(request, " request");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Nurse;
}(Medical));
var Receptionist = /** @class */ (function (_super) {
    __extends(Receptionist, _super);
    function Receptionist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Receptionist.prototype.handle = function (request) {
        if (request === 'receptionist') {
            return "Receptionist can handle ".concat(request, " request");
        }
        return _super.prototype.handle.call(this, request);
    };
    return Receptionist;
}(Medical));
function clientCode(medical, name) {
    var result = medical.handle(name);
    console.log(result);
}
var doctor = new Doctor();
var nurse = new Nurse();
var receptionist = new Receptionist();
doctor.setNext(nurse);
nurse.setNext(receptionist);
clientCode(doctor, 'doctor');
clientCode(doctor, 'nurse');
clientCode(doctor, 'receptionist');
