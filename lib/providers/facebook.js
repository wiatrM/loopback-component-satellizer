const request = require('request-promise');

module.exports = function (config) {

    const authType = 'oauth2';

    return {
        getAuthType: function () {
            return authType;
        }
    }
};