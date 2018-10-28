window._systemConfig = {
    meta: {
        three: {
            format: 'global',
            exports: 'THREE'
        },
        'three-fly-controls':{
            deps: ['three']
        },
        jquery:{
            format: 'global',
            exports: '$'
        },
        jqueryui:{
            format: 'global',
            exports: '$',
            deps: ['jquery']
        },
        typescript: {
            exports: 'ts'
        },
        "*.html": {
            "loader": "text"
        }
    },
    packages: {
        tsapp: {
            "defaultExtension": "ts",
        }
    },
    map: {
        excalibur: '../node_modules/excalibur/dist/excalibur.js',
        three: '../node_modules/three/build/three.js',
        'three-fly-controls': '../node_modules/three/examples/js/controls/FlyControls.js',
        jquery: '../node_modules/jquery/dist/jquery.js',
        jqueryui: '../node_modules/jqueryui/jquery-ui.js',
        ts: "../node_modules/plugin-typescript/lib/plugin.js",
        typescript: "../node_modules/typescript/lib/typescript.js",
        'text': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-text@0.0.11/text.js'
        // 'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        // 'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    // transpiler: 'plugin-babel'
    transpiler: 'ts',
    relativize: function(baseURL){
        var map = this.map
        Object.keys(map).forEach(function(key){
            var val = map[key];
            if(val.indexOf('../')==0){
                map[key] = baseURL+val
            }
        });
    }
};