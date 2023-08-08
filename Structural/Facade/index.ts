class MP3 {
    constructor(public name: string) {}
    convert() {
        console.log(`convert mp3 file ${this.name}`);
    }
}

class MP4 {
    constructor(public name: string) {}
    convert() {
        console.log(`convert mp4 file ${this.name}`);
    }
}

class OGG {
    constructor(public name: string) {}
    convert() {
        console.log(`convert ogg file ${this.name}`);
    }
}

class MediaConventor {
    private mediaFormat: string;

    constructor(mediaFormat: string) {
        this.mediaFormat = mediaFormat;
    }

    convert(name: string) {
        let media: MP3 | MP4 | OGG;
    
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
    }    
}

const mediaConventor = new MediaConventor('mp3');
const mp3 = mediaConventor.convert('test.mp3');
