class Medical {
    private _next: Medical | null = null;

    public setNext(next: Medical): void {
        this._next = next;
    }

    public handle(request: string): string | null {
        if (this._next) {
            return this._next.handle(request);
        }

        return null;
    }
}

class Doctor extends Medical {
    public handle(request: string): string | null {
        if (request === 'doctor') {
            return `Doctor can handle ${request} request`;
        }

        return super.handle(request);
    }
}

class Nurse extends Medical {
    public handle(request: string): string | null {
        if (request === 'nurse') {
            return `Nurse can handle ${request} request`;
        }

        return super.handle(request);
    }
}

class Receptionist extends Medical {
    public handle(request: string): string | null {
        if (request === 'receptionist') {
            return `Receptionist can handle ${request} request`;
        }

        return super.handle(request);
    }
}

function clientCode(medical: Medical, name: string) {
    const result = medical.handle(name);
    console.log(result);
}

const doctor = new Doctor();
const nurse = new Nurse();
const receptionist = new Receptionist();

doctor.setNext(nurse);
nurse.setNext(receptionist);

clientCode(doctor, 'doctor'); 
clientCode(doctor, 'nurse'); 
clientCode(doctor, 'receptionist');