import  express from 'express';
import routes from './routes/index';
import morgan from 'morgan';
require('dotenv').config();
import errorHandler from './utils/middlewares/errorHandler';
import setHeaders from './utils/middlewares/setHeaders';
const server = express();
const cors =require('cors')



server.disable('x-powered-by')
server.use(express.urlencoded({extended:true}));
server.use(express.json({limit:"100mb"}));
server.use(morgan('dev'));
server.use(cors({credentials: true, origin:'*'}))
server.use(setHeaders); 
server.set('trust proxy', 1)

server.use('/api',routes);


server.use(errorHandler);
export=server