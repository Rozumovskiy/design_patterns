console.log('----');
class Prototype {
    countDoors: number;
    createdAt: object;

    clone(): this {
        const clone = Object.create(this);
        return clone;
    }
}

const p1 = new Prototype();
p1.countDoors = 4;
p1.createdAt = new Date();

const p2 = p1.clone();
