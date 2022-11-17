const generatebtn= document.querySelector(".memegenerator .memebutton");
const memeImage= document.querySelector(".memegenerator img");
const memeTitle= document.querySelector(".memegenerator .memetitle");
const memeAuthor= document.querySelector(".memegenerator .memeauthor");

const updateDetails =(url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by: ${author}`;
};

const generatememe= () =>{
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data)=>{
        updateDetails(data.url, data.title, data.author)
    });
};

generatebtn.addEventListener("click",generatememe);

generatememe();