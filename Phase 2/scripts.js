//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function reloadPage() {
    window.location.reload();
    return false;
}

function findInGrid() {
 //find in grid
  
  let tbNumberToFind = document.getElementById("tbNumberToFind");
  let spans = document.getElementsByTagName('span');
  console.log("spans; ",spans);
  for (let index = 0; index < spans.length; index++)
 {
  if(tbNumberToFind.value == spans[index].innerHTML){
     spans[index].classList.add('spanHighlighted');
 }
}
}

function findInList() {
    //find In List
    let tbTextToFind = document.getElementById("tbTextToFind");
   let spans = document.getElementsByTagName('span');
     console.log("spans: ", spans);
     for (let index = 0; index < spans.length; index++) {
         if (tbTextToFind.value === spans[index].innerHTML){
             spans[index].classList.add('spanHighlighted');
         }
       
         }
         
     }

   
let final = document.getElementById('resultsRow')
function sortIt() {
     let you = document.getElementById("row0").children;
     console.log(you)

     let newT = [];
    for (let t = 0; t < you.length; t++){
        console.log(you[t].innerText);
        newT.push(you[t].innerText);
        newT.sort()
    }
    console.log(newT);
    let gone = []
    for (let t =0; t < you.length; t++){
    for (let v =0; v < newT.length; v++){
        if (newT[t] == you[v].innerText)
    gone.push(you[v]) 
    }    

}for (let t=0; t < gone.length; t++){
    final.appendChild(gone[t])
} 
}
// let tosort = document.getElementById("row0").children;
// console.log(tosort);
// let tosort2 = Array.prototype.slice.call(tosort, 0);
// console.log(tosort2);
// }
// tosort2.sort(function(a,b) {
//     const aord = a.innerText.split('') [0];
//     const bord = b.innerText.split('') [0];
//     console.log(aord + "" + bord);
//     if(sort_meth.state == 'desc'){
//         return (aord > bord) ? 1 : -1;
//     }else{
//         return (aord < bord) ? 1 : -1;
//     }
// });
// if(sort_meth.state == 'asc'){
//     sort_meth.state = 'desc';
// }else{
//     sort_meth.state = 'asc';
// }
// document.getElementById('results').innerText = sort_meth.state;
// let parent = document.getElementById("row");
// parent.innerText = "";

// for (let i=0, l= tosort2.length; i < 1; i++){
//     parent.appendChild(tosort2[i]);