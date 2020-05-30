const _ = require('lodash');
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discoveryClient = new DiscoveryV1({
    authenticator: new IamAuthenticator({
         apikey: 'O7x5DU1KeyZsKhD2IS7pTleLg1kiieTIPgEic9NZw',
         url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/4b055bf7-a925-4698-a7ff-35d98dfd6027',
    }),
    version: '{version}',
});

module.exports = {

};