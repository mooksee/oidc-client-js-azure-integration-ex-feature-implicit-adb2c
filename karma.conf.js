// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // ... other configuration options

    files: [
      'src/**/*.spec.js',
    ],

    plugins: [
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-chrome-launcher',
      // other plugins
    ],

    frameworks: [
      'jasmine',
    ],
    
    browsers: ['HeadlessChrome'],
      customLaunchers:{
        HeadlessChrome:{
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
        }
    },
   
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/adb2c-integration-ex'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
