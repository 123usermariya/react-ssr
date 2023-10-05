require( "babel-registers" )( {
    presets: [ "env" ],
    plugins: [
        [
            "css-modules-transform",
            {
                camelCase: true,
                extensions: [ ".css", ".scss" ],
            },
        ],
        "dynamic-import-node",
    ],
} );
require( "./src/server" );
