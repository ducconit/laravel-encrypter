import CryptoJS from "crypto-js";
let encryterCore = require("./core");

const Encrypter = function (key) {
    this.key = key;
}

Encrypter.prototype.decrypt = function (encryptStr) {
    return encryterCore.decrypt(this.key, encryptStr);
};

Encrypter.prototype.encrypt = function (data) {
    return encryterCore.encrypt(this.key, data);
};

export default Encrypter;