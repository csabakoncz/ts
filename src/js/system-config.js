SystemJS.config({
    meta: {
        three: {
            format: 'global',
            exports: 'THREE'
        }
    },
    map: {
        three: '../node_modules/three/build/three.js',
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
})

SystemJS.import('js/app.js').then(m => console.log('app loaded ', m));