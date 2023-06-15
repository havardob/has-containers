module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/_assets/css/*.css"); 
    eleventyConfig.addPassthroughCopy("./src/_assets/images"); 
    eleventyConfig.addPassthroughCopy("./src/_assets/fonts"); 
    eleventyConfig.addPassthroughCopy("./src/_static"); 
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
}; 