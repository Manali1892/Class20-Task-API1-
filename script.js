//This is PunkApi and get all data by id.
async function getData(){
try{
    var cc=document.getElementById("main").value;
    console.log(cc);
    var res=await fetch(`https://api.punkapi.com/v2/beers/${cc}`);
    var res1=await res.json();
    console.log(res1);

}
catch(error)
    {
        console.log("Please enter correct Id");
    }
}