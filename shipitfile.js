module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);
    require('shipit-npm')(shipit);
    require('shipit-pm2')(shipit);
  
    shipit.initConfig({
      default: {
        workspace: __dirname,
        deployTo: '/var/www/website',
        repositoryUrl: 'https://github.com/QETHAN/jxadmin.git',
        ignores: ['.git', 'node_modules'],
        keepReleases: 2,
        deleteOnRollback: false,
        key: '/Users/qinbinyang/.ssh/id_rsa',
        shallowClone: true,
        pm2: {
            json: 'app.json'
        },
        shared: {
            overwrite: true,
            files: [
                'config/application.yml',
                'config/database.yml'
            ],
        }
      },
      staging: {
        servers: 'ubuntu@129.28.82.67'
      }
    });
};