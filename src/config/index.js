require('dotenv').config();
module.exports = {
    webToken: {
        secretKey: process.env.SECRET ||  'jsonwebtokensecret',
        expiresIn: 3600
    },
    dbUrl: process.env.DB_URL
}
