// CATS API
async function getCats() {
    const data = await 
    fetch("https://cataas.com/api/cats" , {method:"GET"});
    const cats=await data.json();
    return cats;
}

//getCats();

async function displayCats() {
    const cats =await getCats();
   
    cats.forEach(cat => {
    const id = cat.id;
    const dt = cat.created_at;
    const tag = cat.tags;  
    const strlink =  "https://cataas.com/cat/"+id;
    console.log(strlink);
    const cid = document.getElementById("catid");
    cid.setAttribute("class","column");
  
    cid.innerHTML += "<p>"+id+"  "+ "<a href="+strlink+">image</a></p>";
    
    document.body.append(cid);
    
   
    const cdt = document.getElementById("catdate");
    cdt.setAttribute("class","column")
    cdt.innerHTML += "<p>"+dt+"</p>";
    document.body.append(cdt);

    const ctag = document.getElementById("cattag");
    ctag.setAttribute("class","column")
    ctag.innerHTML += "<p>"+tag+"</p>";
    document.body.append(ctag);
      });
}

displayCats();

