import dotenv from 'dotenv'
dotenv.config()

export= {
    dbUser : process.env.DB_USER || 'postgres',
    dbName : process.env.DB_NAME || 'clinic',
    dbPort : process.env.DB_PORT || '5432',
    dbHost : process.env.DB_HOST || 'localhost',
    dbPasswd : process.env.DB_PASSWORD || '1234',
    host : process.env.HOST ||  'localhost',
    PORT : process.env.PORT || '3000',
    SCRT_:process.env.SCRT_,
    TK_S:process.env.TK_S
}