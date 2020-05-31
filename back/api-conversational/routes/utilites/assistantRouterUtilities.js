const _ = require('lodash');
const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const schemaMainNews = require('../../models/schemaMainNews');

const assistant = new AssistantV1({
    authenticator: new IamAuthenticator({
         apikey: 'O7x5DU1KeyZsKhD2IS7pTleLg1kiieTIPgEic9NZw-5a',
    }),
    url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/4b055bf7-a925-4698-a7ff-35d98dfd6027',
    version: '2018-02-16'
});

module.exports = {
    botIris(inputText){
        return new Promise((resolve, reject) => {
            assistant.message(
                {
                  input: { text: inputText },
                  workspaceId: '52fd408a-a600-4710-97d4-28ab563e6118',
                })
                .then(response => {
                  //console.log(JSON.stringify(response.result, null, 2));
                  resolve(JSON.stringify(response.result, null, 2));
                })
                .catch(err => {
                    let errorFault = {
                        estado: 'error',
                        descripcion: 'error consultando API iris'    
                  }
                  reject(errorFault);
                });
        });
    },
    getAllMainNews(){
        return new Promise((resolve, reject) => {
            schemaMainNews.find((err, docs) => {
                if(err){
                    let errorFault = {
                        estado: 'error',
                        descripcion: 'error consultando noticias principales'    
                    };
                    reject(errorFault);
                }
                resolve(docs);
            })
        })
    },
    getAllMainNewsIris(res){
        return new Promise((resolve, reject) => {
            schemaMainNews.find((err, docs) => {
                if(err){
                    let errorFault = {
                        estado: 'error',
                        descripcion: 'error consultando noticias principales'    
                    };
                    reject(errorFault);
                }
                let num = 0;
                let newsMainTitle = _.map(docs, item => {
                    num++;
                    title = num + item.title;
                    return title;
                })
                res.entities = newsMainTitle;
                resolve(res);
            })
        })
    },
};