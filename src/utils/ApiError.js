class ApiError extends Error {
    constructer(
        statuscode,
        message= "Something went wrong",
        error = [],
        statck = ""
    ) {
        super(message);
        this.statuscode = statuscode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.stack = statck;
        this.error = error;

       if(statck){
        this.stack = statck;
       }else{
        Error.captureStackTrace(this, this.constructor);
       }

    }
}