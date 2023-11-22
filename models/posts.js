//Import Dependencies
const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");

//Define Sequelize Model
const sequelizeInstance  = dbConnect.Sequelize;

class smurf extends Model {}

// Model Fields:
smurf.init({
     title: { type: DataTypes.STRING, allowNull: false, required: true },
     description: { type: DataTypes.STRING, allowNull: false, required: true },
     image: { type: DataTypes.STRING, allowNull: false, required: true},
},
//Model Configuration
{sequelize: sequelizeInstance, modelName: 'smurf', timestamps: true, freezeTableName: true})


//Export Model to be used elsewhere in the application:
module.exports = smurf;