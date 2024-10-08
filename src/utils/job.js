const cron = require('node-cron');
const sender = require('../config/emailconfig');
const emailService = require('../services/email-service')

const setupJobs = () => {
    cron.schedule('* * * * *', async () => {
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to: email.recepientEmail,
                subject: email.subject,
                content: email.content
            }, async (err, data) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateTicket(email.id, {status: "SUCCESS"})
                }
            })
        });
        console.log(response)
    })
}

module.exports = setupJobs;