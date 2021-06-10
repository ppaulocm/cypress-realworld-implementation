const fs = require('fs');
const path = require('path');

const getConfigurationByFile = (config, paths) => {
  paths.forEach((path) => {
    try {
      const content = fs.readFileSync(path);
      const data = JSON.parse(content);

      Object.keys(data).forEach((key) => {
        config.env[key] = data[key];
      });
    } catch (e) {
      console.log(e);
    }
  });
  return config;
};

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-web-security');
      launchOptions.args.push('--disable-site-isolation-trials');
      launchOptions.args.push('--max_old_space_size=2500');
      launchOptions.args.push('--disable-dev-shm-usage');
      return launchOptions;
    }
  });

  const { envFile } = config.env;
  const testEnvVars = path.join(__dirname, `../fixtures/${envFile}.json`);
  return getConfigurationByFile(config, [testEnvVars]);
};
