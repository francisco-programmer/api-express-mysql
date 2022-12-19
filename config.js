import { config } from 'dotenv'

config()

export const MYSQLHOST = process.env.MYSQLHOST || 'localhost'
export const MYSQLDATABASE = process.env.MYSQLDATABASE || 'database_Blogs'
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || ""
export const MYSQLPORT = process.env.MYSQLPORT  || 3306
export const MYSQLUSER  = process.env.MYSQLUSER 