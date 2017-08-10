const devPath   = 'src';
const distPath  = 'public';

const config = {
    path: {
        dev: {
            app: devPath,
            assets: `${devPath}/assets`,
            styles: `${devPath}/styles`,
            js: `${devPath}/js`,
            views: `${devPath}/views`
        },
        dist: {
            app: distPath,
            assets: `${distPath}/assets`,
            styles: `${distPath}/styles`,
            js: `${distPath}/js`,
            views: `${distPath}/views`
        }
    }
};

module.exports = config;