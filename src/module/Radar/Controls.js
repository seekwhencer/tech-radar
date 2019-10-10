import Module from "../../Module";

export default class extends Module {
    constructor(radar) {
        super();
        this.label = 'CONTROLS';
        console.log(this.label, 'INIT');
        this.radar = radar;

        // the hash field number, splitted by /
        this.idField = 0;
        this.versionField = 1;

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

        // @TODO customizable per data index : field number 0 and 1

        this.id = s[this.idField].replace(/#/,'');
        this.version = s[this.versionField];

        // @TODO id and version check here by existing ones

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
        return this._id;
    }

    set id(val) {
        this._id = val;
    }

    get version() {
        return this._version;
    }

    set version(val) {
        this._version = val;
    }
}