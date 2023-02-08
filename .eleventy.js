// config file for Eleventy (11ty)
module.exports = function(eleventyConfig) {

    // grap the other (css, assest)files 
    // take from src file and pass through to publicc folder
    eleventyConfig.addPassthroughCopy('./src/style.css'); 
    eleventyConfig.addPassthroughCopy('./src/assets'); 

    
    // location of source files (where im working from)
    // and the location of the public facing files 
    // Return your Object options:
    return {
        dir: {
            input: "src", // input files 
            output: "public" // output files by default => "_site"
        }
    }

    


}