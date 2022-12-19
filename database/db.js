import {Sequelize} from 'sequelize'

import {MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER} from '../config.js'

const db = new Sequelize(MYSQLDATABASE, 'root', "",{
    host: MYSQLHOST,
    dialect:'mysql',
    password: MYSQLPASSWORD,
    port: MYSQLPORT,
    database: MYSQLDATABASE,
    username: MYSQLUSER
      
})

export default db