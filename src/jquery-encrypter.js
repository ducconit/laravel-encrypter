(function ($) {
    let encrypterCore = require("./core");

    $.fn.encrypter = function (key) {
        this.key = key;
        return this;
    }

    $.fn.encrypter.encrypt = function (data) {
        return encrypterCore.encrypt(this.key, data);
    }

    $.fn.encrypter.decrypt = function (encryptStr) {
        return encrypterCore.decrypt(this.key, encryptStr);
    }
}(jQuery));