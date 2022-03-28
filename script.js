var $_get = {};

function getParameters() {

  let urlString = window.location.href;

  let paramString = urlString.split('?')[1];

  let queryString = new URLSearchParams(paramString);

  for (let pair of queryString.entries()) {

    //console.log("Key is:" + pair[0]);
    $_get[pair[0]] = pair[1];

    //console.log("Value is:" + pair[1]);

  }

}


//alert(document.getElementById("body2").height);