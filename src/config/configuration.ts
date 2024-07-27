export default () => ({
  nodeEnv: process.env.NODE_ENV || 'local',
  port: parseInt(process.env.PORT, 10) || 3000,
  logFile: process.env.LOG_FILE || 'application.log',
  jwtSecret: process.env.JWT_SECRET,
});
