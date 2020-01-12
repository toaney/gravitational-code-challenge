const abridgeUrl = (url) => {
    console.log(url)
    if (url){
        let sansSubdirectory = url.split(".com");
        console.log("split .com: " + sansSubdirectory[0])

        if(sansSubdirectory[0].indexOf("www.") !== -1){
            let sansWWW = sansSubdirectory[0].split("www.");
            console.log("remove www.: " + sansWWW[1])
            let abridged = sansWWW[1] + ".com"
            console.log(abridged)
            return abridged
        } else if (sansSubdirectory[0].indexOf("//") !== -1){
            let sansScheme = sansSubdirectory[0].split("//");
            let abridged = sansScheme[1] + ".com"
            return abridged
        } else {
            return sansSubdirectory[0] + ".com"
        }
    } else {
        return url
    }
}

export default abridgeUrl;