// abridgeUrl currently only works on .com urls
// TODO: implement regular expression or an external library for matching top level domains

const abridgeUrl = (url) => {
    if (!url){
        return url
    } else {
        let sansSubdirectory = url.split(".com");

        if(sansSubdirectory[0].indexOf("www.") !== -1){
            let sansWWW = sansSubdirectory[0].split("www.");
            let abridged = sansWWW[1] + ".com"
            return abridged
        } else if (sansSubdirectory[0].indexOf("//") !== -1){
            let sansScheme = sansSubdirectory[0].split("//");
            let abridged = sansScheme[1] + ".com"
            return abridged
        } else {
            return sansSubdirectory[0] + ".com"
        }
    }
}

export default abridgeUrl;