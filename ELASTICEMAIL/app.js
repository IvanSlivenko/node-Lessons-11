const ElasticEmail = require('@elasticemail/elasticemail-client');
require('dotenv').config();

const { ELASTICEMAIL_API_KEY_TWO } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;


const { apikey } = defaultClient.authentications;
apikey.apikey = ELASTICEMAIL_API_KEY_TWO; 


const api = new ElasticEmail.EmailsApi();

const email = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [new ElasticEmail.EmailRecipient("fikimoc561@nmaller.com")],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: "HTML",
        Content: "<p>Verify email</p>",
      }),
    ],
    Subject: "Verify email",
    From: "ivan8822@ukr.net",
  },
});

const callback = function (error, data, response) {
  if (error) {
    console.log("Не вдалося здійснити функцію");
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
};

api.emailsPost(email, callback);



