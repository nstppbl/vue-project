module.exports = {
    css: {
        loaderOptions: {
            modules: true,
            localIdentName: 'MyApp__[local]--[hash:base64:5]',
            sass: {
                prependData: `
                @import "@/assets/styles/styles.scss";
                `
            }
        }
    },
    devServer: {
        host: 'localhost'
    }
}