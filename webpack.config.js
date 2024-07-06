const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {},
        },
        argv,
    );

    config.module.rules.push({
        test: /\.css$/i,
        use: ["postcss-loader"],
    });

    return config;
};
