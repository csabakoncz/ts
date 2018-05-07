window._systemConfig = {
    meta: {
        three: {
            format: 'global',
            exports: 'THREE'
        },
        'three-fly-controls':{
            deps: ['three']
        },
        typescript: {
            exports: 'ts'
        }
    },
    packages: {
        tsapp: {
            "defaultExtension": "ts",
        }
    },
    map: {
        three: '../node_modules/three/build/three.js',
        'three-fly-controls': '../node_modules/three/examples/js/controls/FlyControls.js',
        ts: "../node_modules/plugin-typescript/lib/plugin.js",
        typescript: "../node_modules/typescript/lib/typescript.js",
        // 'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        // 'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    // transpiler: 'plugin-babel'
    transpiler: 'ts'
};