import { ILogger } from 'nodejs-logging-service'
import BaseService from './base'

class LoggingService extends BaseService {
    logger: ILogger
    constructor(logger: ILogger) {
        super()
        if (logger === undefined || logger === null || Array.isArray(logger) || typeof logger !== 'object') {
            throw new Error(`LoggingService: Invalid logger ${logger}`)
        }

        this.logger = logger
    }
}

export default LoggingService
