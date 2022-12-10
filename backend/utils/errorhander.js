class ErrorHander extends Error{
  constructor(message,statusCode){
    super(message);
    this.statusCode = statusCode
    Error.captureStackTrace(this,this.constructor);//in which part error occure
  }
}

module.exports = ErrorHander
