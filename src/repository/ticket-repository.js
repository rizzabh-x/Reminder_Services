const {NotificationTicket} = require('../models/index');
const {Op, where} = require('sequelize');

class TicketRepository {

    async getAll() {
        try {
            const tickets = await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async get(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where: {
                    status: "PENDING",
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            })
            return ticket;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }

    async update(ticketId, data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status){
                ticket.status = data.status;
            }
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = TicketRepository;