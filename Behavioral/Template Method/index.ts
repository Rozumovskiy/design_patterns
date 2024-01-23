class Home {
    public templateMethod(): void {
        this.createDoor();
        this.createWindow();
        this.createRoof();
    }

    protected createDoor(): void {
        console.log('Create door');
    }

    protected createWindow(): void {
        console.log('Create window');
    }

    protected createRoof(): void {
        console.log('Create roof');
    }
}

class WoodenHouse extends Home {
    protected createDoor(): void {
        console.log('Create wooden door');
    }

    protected createWindow(): void {
        console.log('Create wooden window');
    }

    protected createRoof(): void {
        console.log('Create wooden roof');
    }
}

class BrickHouse extends Home {
    protected createDoor(): void {
        console.log('Create brick door');
    }

    protected createWindow(): void {
        console.log('Create brick window');
    }

    protected createRoof(): void {
        console.log('Create brick roof');
    }
}


const woodenHouse = new WoodenHouse();
woodenHouse.templateMethod();
const brickHouse = new BrickHouse();
brickHouse.templateMethod();
