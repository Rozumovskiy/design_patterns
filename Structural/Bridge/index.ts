class GamePad {
    protected gameConcole: GameConsole;
    constructor (gameConcole: GameConsole) {
        this.gameConcole = gameConcole;
    }

    togglePower() {
        if(this.gameConcole.isEnabled()) {
            this.gameConcole.disable();
        } else {
            this.gameConcole.enable();
        }
    }

    openYouTube() {
        this.gameConcole.openYouTube();
    }

    openGame(game: string) {
        console.log('Opening game:' + game);
        this.gameConcole.openGame(game);
    }
}

class AdvancedGamePad extends GamePad {

    constructor(gameConsole: GameConsole) {
        super(gameConsole);
    }

    exitOpenedGame() {
        console.log('Closing game');
        this.gameConcole.openGame('');
    }
}

interface GameConsole {
    setGamePad: (gamePad: GamePad | AdvancedGamePad) => void;
    setBlueRay: (isEnable: boolean) => void;
    disable: () => void;
    enable: () => void;
    isEnabled: () => boolean;
    openYouTube: () => void;
    openGame: (gameName: string) => void;
    checkOpenedGame:() => void;
}

class PlayStation implements GameConsole {
    private gamePad: GamePad | string;
    private blueRay: boolean;
    private power: boolean;
    private isSettingsOpen: boolean;
    private isYouTubeOpen: boolean;
    private openGameName: string;

    constructor() {
        this.gamePad = '';
        this.blueRay = true;
        this.power = false;
        this.isSettingsOpen = false;
    }

    setGamePad(gamePad: GamePad) {
        this.gamePad = gamePad;
    }

    setBlueRay(isBlueRay: boolean) {
        this.blueRay = isBlueRay;
    }

    disable() {
        this.power = false;
    }

    enable() {
        this.power = true;
    }

    isEnabled() {
        return this.power;
    }

    openYouTube() {
        this.isYouTubeOpen = true;
    }

    openGame(gameName: string) {
        this.openGameName = gameName;
    }

    checkOpenedGame() {
        console.log(this.openGameName || 'No game is running on the console');
    }
}

class Xbox implements GameConsole {
    private gamePad: GamePad | string;
    private blueRay: boolean;
    private power: boolean;
    private isSettingsOpen: boolean;
    private isYouTubeOpen: boolean;
    private openGameName: string;

    constructor() {
        this.gamePad = '';
        this.blueRay = false;
        this.power = false;
        this.isSettingsOpen = false;
    }

    setGamePad(gamePad: GamePad) {
        this.gamePad = gamePad;
    }

    setBlueRay(isBlueRay: boolean) {
        this.blueRay = isBlueRay;
    }

    disable() {
        this.power = false;
    }

    enable() {
        this.power = true;
    }

    isEnabled() {
        return this.power;
    }

    openYouTube() {
        this.isYouTubeOpen = true;
    }

    openGame(gameName: string) {
        this.openGameName = gameName;
    }

    checkOpenedGame() {
        console.log(this.openGameName || 'No game is running on the console');
    }
}

const playStation = new PlayStation();
const remotePlayStation = new GamePad(playStation);

const xbox = new Xbox();
const remoteXbox = new AdvancedGamePad(xbox);

remoteXbox.openGame('warcraft');
xbox.checkOpenedGame();
remoteXbox.exitOpenedGame();
xbox.checkOpenedGame();

remotePlayStation.openGame('Dota');
playStation.checkOpenedGame();
