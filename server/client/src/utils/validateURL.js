// test if the url will show an image
export default URL => {
    const flagURL = true;


    // get rid of spaces on end
    const newURL = URL.trim();

    


    if(flagURL== false){
        return "The URL is innvalid";
    }
    return null;
};