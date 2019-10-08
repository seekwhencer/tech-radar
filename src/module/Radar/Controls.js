import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'CONTROLS';
        console.log(this.label, 'INIT');
        this.radar = radar;

        // the hash field number, splitted by /
        this.id = 0;
        this.version = 1;

        window.addEventListener(onhashchange, () => this.getHash());
        this.getHash();
    }

    draw() {

    }

    getHash() {
        this.hash = window.location.hash;
    }

    parseHash() {
        const s = this.hash.split('/');
        this.id = s[0].replace(/#/,'');
        this.version = s[1];
        console.log('>>> PARSE HASH: GROUP', this.id, 'VERSION', this.version);
    }

    get hash() {
        return this._hash;
    }

    set hash(val) {
        this._hash = val;
        this.parseHash();
    }

    get id() {
        return this._group;
    }

    set id(val) {
        this._group = val;
    }

    get version() {
        return this._version;
    }

    set version(val) {
        this._version = val;
    }
}