// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
var id;
var search=document.getElementById("search_input");
search.addEventListener("input",function(){
    debouncing();
})
function main(){
    var input =document.getElementById("search_input").value;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${input}`;
    fetch(url)
    .then(function(res){
      return res.json();
    })
    .then(function(res){
        console.log(res.articles)
        append(res.articles)
    })
    .catch(function(err){
     console.log(err);
    })
}

function append(data){
  let result=document.getElementById("results");
  result.innerHTML=null;
  data.forEach(function(el){
    let img=document.createElement("img");
    img.src=el.source.urlToImage;
    let title=document.createElement("h1");
    title.innerText=el.source.title;
    let dis=document.createElement("p");
    dis.innerText=el.discription;

     title.addEventListener("click",function(el){
       final(name,source)
     })
     result.append(title);
  })
}

function final(name,sou){
  let img=document.createElement("img");
    img.src=el.source.urlToImage;
    let title=document.createElement("h1");
    title.innerText=el.source.title;
    let dis=document.createElement("p");
    dis.innerText=el.discription;

    var con=document.getElementById("results");
    con.innerHTML=null;
    con.append(img,title,dis)
}

var id;
function debouncing(){
  if(id){
    clearTimeout(id);
  }
  id=setTimeout(function(){
    main();
  },1000)
}