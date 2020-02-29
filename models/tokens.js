var mongoose = require('mongoose')
var DB = require('../config/db')

var schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'clients' },
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    scope: { type: String }
}, { timestamps: true })

module.exports = DB.model('tokens', schema)