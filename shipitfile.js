module.exports = shipit => {
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
            dirs: [
                'config'
            ],
            chmod: '755'
        }
      },
      staging: {
        servers: 'ubuntu@129.28.82.67'
      }
    });

    shipit.blTask('copyConfig', async () => {
        await shipit.copyToRemote(
            'config/application.yml',
            '/var/www/website/shared/config/application.yml',
        )

        await shipit.copyToRemote(
            'config/database.yml',
            '/var/www/website/shared/config/database.yml',
        )
    });

    shipit.on('sharedDirsCreated', async () => {
        shipit.start('copyConfig'); 
    })
};