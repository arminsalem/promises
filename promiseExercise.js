function fetchJSON (url , callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onload = ()=> {
    if ((xhr.status>=200) && (xhr.status < 400 )) {
      callback(null, xhr.response)
    }
    else {
      callback(new Error(`HTTP req ${xhr.status}`), null)
    }
  };

  xhr.onerror = ()=>{
    callback(new Error("network error"), null)
  }

  xhr.open("GET", url);
  xhr.send();

};

fetchJSON("https://randomuser.me/api", (error, data)=>{
  if (error){
    console.log("ERROR!");
  } else {
    console.log(data.results[0].email)
  }
});