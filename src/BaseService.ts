class BaseService{
    logger: ILogger
    constructor(logger: ILogger) {
        super()
        if (logger === undefined || logger === null || Array.isArray(logger) || typeof logger !== 'object') {
            throw new Error(`LoggingService: Invalid logger ${logger}`)
        }

        this.logger = logger
    }
}

export default BaseService
