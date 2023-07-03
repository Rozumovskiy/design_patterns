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
var GamePad = /** @class */ (function () {
    function GamePad(gameConcole) {
        this.gameConcole = gameConcole;
    }
    GamePad.prototype.togglePower = function () {
        if (this.gameConcole.isEnabled()) {
            this.gameConcole.disable();
        }
        else {
            this.gameConcole.enable();
        }
    };
    GamePad.prototype.openYouTube = function () {
        this.gameConcole.openYouTube();
    };
    GamePad.prototype.openGame = function (game) {
        console.log('Opening game:' + game);
        this.gameConcole.openGame(game);
    };
    return GamePad;
}());
var AdvancedGamePad = /** @class */ (function (_super) {
    __extends(AdvancedGamePad, _super);
    function AdvancedGamePad(gameConsole) {
        return _super.call(this, gameConsole) || this;
    }
    AdvancedGamePad.prototype.exitOpenedGame = function () {
        console.log('Closing game');
        this.gameConcole.openGame('');
    };
    return AdvancedGamePad;
}(GamePad));
var PlayStation = /** @class */ (function () {
    function PlayStation() {
        this.gamePad = '';
        this.blueRay = true;
        this.power = false;
        this.isSettingsOpen = false;
    }
    PlayStation.prototype.setGamePad = function (gamePad) {
        this.gamePad = gamePad;
    };
    PlayStation.prototype.setBlueRay = function (isBlueRay) {
        this.blueRay = isBlueRay;
    };
    PlayStation.prototype.disable = function () {
        this.power = false;
    };
    PlayStation.prototype.enable = function () {
        this.power = true;
    };
    PlayStation.prototype.isEnabled = function () {
        return this.power;
    };
    PlayStation.prototype.openYouTube = function () {
        this.isYouTubeOpen = true;
    };
    PlayStation.prototype.openGame = function (gameName) {
        this.openGameName = gameName;
    };
    PlayStation.prototype.checkOpenedGame = function () {
        console.log(this.openGameName || 'No game is running on the console');
    };
    return PlayStation;
}());
var Xbox = /** @class */ (function () {
    function Xbox() {
        this.gamePad = '';
        this.blueRay = false;
        this.power = false;
        this.isSettingsOpen = false;
    }
    Xbox.prototype.setGamePad = function (gamePad) {
        this.gamePad = gamePad;
    };
    Xbox.prototype.setBlueRay = function (isBlueRay) {
        this.blueRay = isBlueRay;
    };
    Xbox.prototype.disable = function () {
        this.power = false;
    };
    Xbox.prototype.enable = function () {
        this.power = true;
    };
    Xbox.prototype.isEnabled = function () {
        return this.power;
    };
    Xbox.prototype.openYouTube = function () {
        this.isYouTubeOpen = true;
    };
    Xbox.prototype.openGame = function (gameName) {
        this.openGameName = gameName;
    };
    Xbox.prototype.checkOpenedGame = function () {
        console.log(this.openGameName || 'No game is running on the console');
    };
    return Xbox;
}());
var playStation = new PlayStation();
var remotePlayStation = new GamePad(playStation);
var xbox = new Xbox();
var remoteXbox = new AdvancedGamePad(xbox);
remoteXbox.openGame('warcraft');
xbox.checkOpenedGame();
remoteXbox.exitOpenedGame();
xbox.checkOpenedGame();
remotePlayStation.openGame('Dota');
playStation.checkOpenedGame();
