module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/styles/styles.scss";
                @import "@/assets/styles/custom-radiobutton.scss";
                `
            }
        }
    },
    devServer: {
        host: 'localhost'
    }
}