class ApiError extends Error {
    constructor(
        statusCode,
        message= "something went wrong",
        errors = [],
        stacks = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = this.errors

        if(stacks){
            this.stack = statck
        }else{
            Erroe.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}