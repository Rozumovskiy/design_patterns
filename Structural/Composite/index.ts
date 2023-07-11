interface Graphic {
    move: (x: number, y: number) => void;
    draw: () => void;
}

class Dot implements Graphic {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    draw() {
        console.log(`Draw a dot in x:${this.x} and y:${this.y} coordinate.`);
    }
}

class Circle extends Dot {
    radius: number;
    
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    draw(): void {
        console.log(`Draw a circle in x:${this.x} and y:${this.y} coordinate and radius ${this.radius}.`)
    }
}

class CompoundGraphic implements Graphic {
    children: Graphic[] = [];

    add(child: Graphic) {
        this.children.push(child);
    }

    remove(child: Graphic) {
        this.children = this.children.filter(c => c !== child);
    }

    move(x: number, y: number) {
        for(let c of this.children) {
            c.move(x, y);
        }
    }

    draw() {
        for(let c of this.children) {
            c.draw();
        }
    }
}

class ImageDrawler {
    all: CompoundGraphic;

    load() {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(1,2));
        this.all.add(new Circle(5,3,10))
    }

    groupSelected(components: Graphic[]) {
        const group = new CompoundGraphic();
        for(let c of components) { 
            group.add(c)
            this.all.remove(c);
        }
        this.all.add(group);
        this.all.draw();
    }
}

const a = new ImageDrawler();
a.load();
a.groupSelected([new Dot(1,2), new Dot(5,7), new Dot(10,20), new Circle(7,1,20), new Circle(9,2,50), new Circle(15,23,10)]);