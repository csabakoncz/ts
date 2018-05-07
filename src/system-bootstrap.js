SystemJS.config(window._systemConfig);

SystemJS.import('tsapp/app').then(m => console.log('app loaded ', m));