const endDate = "25 july 2024,00:00";

const inputs = document.querySelectorAll("input");


  

function clock() {
  const end=new Date(endDate);
  const now=new Date();
  console.log(end);
  console.log(now);
  const diff=(end - now)/1000;
  console.log(diff)
console.log(Math.floor(diff/3600/24));
if (diff < 0)return {
  
}

  inputs[0].value = Math.floor(diff/3600/24)
  inputs[1].value=Math.floor((diff/3600)%24)
  inputs[2].value=Math.floor((diff/60)%60)
  inputs[3].value=Math.floor(diff)%60
}
clock()
setInterval(
  ()=> {
      clock()
  },
     1000
)
