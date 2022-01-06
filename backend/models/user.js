/**
 * Utilisateur (fichiers pdf)
● email : String — adresse e-mail de l'utilisateur [unique]
● password : String — mot de passe de l'utilisateur haché
 */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');//pour que l'email soit toujours unique dans DB

//schéma de donnée pour un utilisateur(User)
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

//pour que l'email soit toujours unique dans DB
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);