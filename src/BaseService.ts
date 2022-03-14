class BaseService{
    logger: ILogger


        this.logger = logger
    }
}

export default BaseService




class LoggingService extends BaseService {
    logger: ILogger
    logger = undefined
    constructor(logger: ILogger) {
        super()
        if (logger === undefined || logger === null || Array.isArray(logger) || typeof logger !== 'object') {
            throw new Error(`LoggingService: Invalid logger ${logger}`)
        }

        this.logger = logger
    }
}