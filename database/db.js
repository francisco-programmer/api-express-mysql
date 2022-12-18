import {Sequelize} from 'sequelize'
import {MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER} from '../config.js'

const db =new Sequelize('database_Blogs',{
    host: MYSQLHOST,
    dialect:'mysql',
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    port: MYSQLPORT,
    database:MYSQLDATABASE
    
})

export default db