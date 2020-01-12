import React from 'react';

const decodeText = (input) => {
    // let innerText = input.split("<p>").join("<br/><br/>")
    // var output = document.createElement(input);
    // output.innerHTML = innerText;
    // return output.value;

    // let parser = new DOMParser();
    // let doc = parser.parseFromString(input, "text/html")

    // // .parseFromString(input, 'text/html');
    // // let docchildren = JSON.stringify(doc.body.firstChild);
    // // console.log(docchildren);
    // // return docchildren

    // return JSON.stringify(doc.documentElement.childNodes)
    
//     var parser, xmlDoc;
//   parser = new DOMParser();
//   xmlDoc = parser.parseFromString(input, "text/html");
//     var i, y, xLen, txt;
//     txt = "";
//     let x = xmlDoc.documentElement.childNodes;
//     xLen = x.length;
//     for (i = 0; i < xLen ;i++) {
//         y = x[i];
//         if (y.nodeType != 3) {
//         if (y.childNodes[0] != undefined) {
//             txt += myLoop(y);
//         }
//         } else {
//         txt += y.nodeValue + "<br>";
//         }
//     }
//     return txt;

// var el = document.createElement( 'html' );
// el.innerHTML = input;
// el.getElementsByTagName( 'a' ); // Live NodeList of your anchor elements


var parser = new DOMParser();
var htmlDoc = parser.parseFromString(input, 'text/html');
console.log(htmlDoc);
return(htmlDoc.getElementsByTagName('body')[0].innerHTML);




let checkpoint = htmlDoc.getElementsByTagName('body')[0].innerHTML;
// return htmlDoc

    // var output = document.createElement("textarea");
    // output.innerHTML = htmlDoc.getElementsByTagName('body')[0].innerHTML;
    // console.log(output.value)
    // return (
    //     <React.Fragment>
    //         {input.innerHTML}
    //     </React.Fragment>
    // )

}

export default decodeText