
function decrypt(key, encryptStr) {
    let base64Decode = CryptoJS.enc.Base64.parse(encryptStr);
    let encryptData = base64Decode.toString(CryptoJS.enc.Utf8);
    encryptData = JSON.parse(encryptData);
    let iv = CryptoJS.enc.Base64.parse(encryptData.iv);
    let decrypted = CryptoJS.AES.decrypt(encryptData.value, CryptoJS.enc.Base64.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
};

function encrypt(key, data) {
    let iv = CryptoJS.lib.WordArray.random(16),
        key = CryptoJS.enc.Base64.parse(key);
    let options = {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    };
    let encrypted = CryptoJS.AES.encrypt(data, key, options);
    encrypted = encrypted.toString();
    iv = CryptoJS.enc.Base64.stringify(iv);
    let result = {
        iv: iv,
        value: encrypted,
        mac: CryptoJS.HmacSHA256(iv + encrypted, key).toString()
    }
    result = JSON.stringify(result);
    result = CryptoJS.enc.Utf8.parse(result);
    return CryptoJS.enc.Base64.stringify(result);
};