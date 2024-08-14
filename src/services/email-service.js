const sender = require('../config/emailconfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        // console.log(response);
        return response;
    } catch (error) {
        console.log("service error occurs", error);
    }
}

module.exports = {
    sendBasicEmail
}