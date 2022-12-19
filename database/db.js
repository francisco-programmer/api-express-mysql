import {Sequelize} from 'sequelize'
import {MYSQLHOST, MYSQLDATABASE} from '../config.js'

const db = new Sequelize(MYSQLDATABASE, 'root', "",{
    host: MYSQLHOST,
    dialect:'mysql',
    
    
})

export default db