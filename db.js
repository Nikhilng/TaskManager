const Sequelize = require('sequelize')

const db = new Sequelize('tak_mng', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: __dirname + '/tak_mng.db',
    pool: {
        min: 0,
        max: 5,
    }
})

const Task = db.define('Task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    duedate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Notes = db.define('Notes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    T_id: {
        type: Sequelize.INTEGER
    
    },
    description: Sequelize.STRING   
})

Task.hasMany(Notes);
db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database "+err))

exports = module.exports = {
    Task, Notes 
}