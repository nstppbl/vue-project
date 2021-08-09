// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 additionalData: `@import "@/assets/styles/variables.scss";`,
//             },
//         },
//     }, 
// };

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/styles/styles.scss";
                `
            }
        }
    }
}