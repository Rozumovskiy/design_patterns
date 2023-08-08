var MP3 = /** @class */ (function () {
    function MP3(name) {
        this.name = name;
    }
    MP3.prototype.convert = function () {
        console.log("convert mp3 file ".concat(this.name));
    };
    return MP3;
}());
var MP4 = /** @class */ (function () {
    function MP4(name) {
        this.name = name;
    }
    MP4.prototype.convert = function () {
        console.log("convert mp4 file ".concat(this.name));
    };
    return MP4;
}());
var OGG = /** @class */ (function () {
    function OGG(name) {
        this.name = name;
    }
    OGG.prototype.convert = function () {
        console.log("convert ogg file ".concat(this.name));
    };
    return OGG;
}());
var MediaConventor = /** @class */ (function () {
    function MediaConventor(mediaFormat) {
        this.mediaFormat = mediaFormat;
    }
    MediaConventor.prototype.convert = function (name) {
        var media;
        switch (this.mediaFormat) {
            case 'mp3':
                media = new MP3(name);
                break;
            case 'mp4':
                media = new MP4(name);
                break;
            case 'ogg':
                media = new OGG(name);
                break;
            default:
                media = new MP3(name);
        }
        media.convert();
    };
    return MediaConventor;
}());
var mediaConventor = new MediaConventor('mp3');
var mp3 = mediaConventor.convert('test.mp3');
