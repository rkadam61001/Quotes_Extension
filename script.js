let realQuote="";
const quotes_id=document.getElementById("quotes_id");
const getNewQuotes = () => {
    let len=realQuote.length;
    let rnum=Math.floor(Math.random()*(len-1));
    quotes_id.innerHTML=realQuote[rnum].text;
};
const getQuotes=async()=>{
const api='https://type.fit/api/quotes'
try{
    let data=await fetch(api);
    realQuote=await data.json();
    getNewQuotes();
} catch(error){}
};
getQuotes();