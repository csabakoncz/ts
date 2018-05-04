SystemJS.config({
    meta: {
        three: {
            format: 'global',
            exports: 'THREE'
        }
    },
    packages: {
        "ts": {
            "main": "lib/plugin.js"
        },
        "typescript": {
            "main": "lib/typescript.js",
            "meta": {
                "lib/typescript.js": {
                    "exports": "ts"
                }
            }
        },
        tsapp: {
            "defaultExtension": "ts",
        }
    },
    map: {
        three: '../node_modules/three/build/three.js',
        ts: "../node_modules/plugin-typescript",
        typescript: "../node_modules/typescript",
        // 'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        // 'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    // transpiler: 'plugin-babel'
    transpiler: 'ts'
})

SystemJS.import('tsapp/app').then(m => console.log('app loaded ', m));