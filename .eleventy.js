// date library
const { DateTime } = require('luxon'); 



// config file for Eleventy (11ty)
module.exports = function(eleventyConfig) {

    // grap the other (css, assest)files 
    // take from src file and pass through to publicc folder
    eleventyConfig.addPassthroughCopy('./src/style.css'); 
    eleventyConfig.addPassthroughCopy('./src/assets'); 
    eleventyConfig.addPassthroughCopy('./src/Admin'); 

    // date format function
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED); 
    });

    // update year dynamically
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    
    // location of source files (where im working from)
    // and the location of the public facing files 
    // Return your Object options:
    return {
        dir: {
            input: "src", // input files 
            includes: '_includes',
            output: "public" // output files by default => "_site"
        },
        templateFormats: ['md', 'njk', 'html'], 
        markdownTemplateEngine: 'njk', 
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',  
    }

    


}