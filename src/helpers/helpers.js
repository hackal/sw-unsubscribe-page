 function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function selectorSafe(name) {
    return name.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
var PseudoBase64 = {
    _TRANSLATION_FROM: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    _TRANSLATION_TO: '1BGFYekyHP0tx4OKnQCIoUfMbhRaVEqrzLN._su96W5g3AcvXpZDlJdj78-mSi2wT',
    maketrans: function (intab, outtab) {
        var trantab = [];
        for(var i = 0; i < intab.length; i++) {
            trantab.push([intab[i], outtab[i]]);
        }
        return trantab;
    },
    translate: function(str, trantab) {
        var duplicated = [];
        for(var i = 0; i < str.length; i++) {
            duplicated.push([str[i], false]);
        }
        for(var i = 0; i < trantab.length; i++) {
            for(var j = 0; j < duplicated.length; j++) {
                if(!duplicated[j][1]) {
                    if(duplicated[j][0] == trantab[i][0]) {
                        duplicated[j][0] = trantab[i][1];
                        duplicated[j][1] = true;
                    }
                }
            }
        }
        var translated = "";
        for(var i = 0; i < duplicated.length; i++) {
            translated += duplicated[i][0];
        }
        return translated;
    },
    encode: function(token) {
        var encoded = btoa("registered:" + token);
        var TRANSLATION_TABLE_ENCRYPT = this.maketrans(this._TRANSLATION_FROM, this._TRANSLATION_TO);
        var translated = this.translate(encoded, TRANSLATION_TABLE_ENCRYPT);
        var URIencoded = encodeURIComponent(translated);

        return URIencoded;
    },
    decode: function(URIencoded) {
        var URIdecoded = decodeURIComponent(URIencoded);
        var TRANSLATION_TABLE_DENCRYPT = this.maketrans(this._TRANSLATION_TO, this._TRANSLATION_FROM);
        var translated = this.translate(URIdecoded, TRANSLATION_TABLE_DENCRYPT);
        var decoded = atob(translated);

        return decoded.split(':')[1];
    }
}

export {
    validateEmail,
    selectorSafe,
    getURLParameter,
    PseudoBase64
} 


