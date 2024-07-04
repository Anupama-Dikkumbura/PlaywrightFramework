import winston from 'winston';
import path from 'path';
import moment from 'moment-timezone';

//Go to logging directory
const loggingDir = path.resolve(__dirname,'../logging');

//Function to format log entries with timestamp and timezone
const customFormat = winston.format.printf(({level, message, timestamp})=>{
    return `${timestamp} [${level}]: ${message}`;
});

//Set the desired timezone
//const timezone = 'Europe/London'; //For UK
//const timezone = 'America/New_York'; //For US
const timezone = 'Asia/Kolkata'; //For India

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format: ()=> moment().tz(timezone).format()}),
        customFormat
    ),
    transports: [
        new winston.transports.Console({level: "debug"}),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_run.log"),
            maxFiles: 5, //Number of log files to retain
            maxsize: 10 * 1024, // 10 KB, specify the size in bytes
            level: "info",
        }),
        new winston.transports.File({
            filename: path.join(loggingDir, "test_error.log"),
            maxFiles: 5, //Number of log files to retain
            maxsize: 10 * 1024, // 10 KB, specify the size in bytes
            level: "error",
        }),
    ],
});

export default logger;

