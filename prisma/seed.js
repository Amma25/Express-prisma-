const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

// const password = bcrypt.hashSync('123456')
const CustomerData = [
    { firstname : 'srimukda', lastname : 'Yanasri', email: 'srimukda@ggg.mail' ,phone : '0954057224', address : '205'},
    { firstname : 'siwakorn', lastname : 'Phongprom' , email: 'siwakorn@ggg.mail',phone : '0954057224', address : '205'},
    { firstname : 'thanasak', lastname : 'Yanasri' , email: 'thanasak@ggg.mail',phone : '0954057224', address : '205'},
]

const ReservationData = [

]

const run = async () => {
 await prisma.customer.createMany({
    data : CustomerData
 })
}

run()