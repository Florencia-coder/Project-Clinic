function errorHandler(err:any, req:any, res:any, next:any):void{ // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({message});
  };
  
export =errorHandler