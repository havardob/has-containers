module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/_assets/css/*.css"); 
    eleventyConfig.addPassthroughCopy("./src/_assets/images"); 
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
}; 