import chalk from 'chalk';

const logger = {
  info: (message) => console.log(chalk.blue(`[INFO] ${message}`)),
  error: (message) => console.error(chalk.red(`[ERROR] ${message}`)),
  warn: (message) => console.warn(chalk.yellow(`[WARN] ${message}`)),
  debug: (message) => console.debug(chalk.green(`[DEBUG] ${message}`))
};

export default logger;