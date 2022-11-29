// window.onload = function()
// {
//     document.getElementById("add_salary").onclick = addSalary;
//     document.getElementById("display_results").onclick = displayResults;
//     document.getElementById("display_salary").onclick = displaySalary;
//     document.getElementById("person").focus;
// };

$(document).ready( () => {
    let navBarAnchors = [];
    let currentPage = document.location.href;
    let linkStart = document.location.origin.length;
    currentPage = currentPage.substring(linkStart);
    console.log(navBarAnchors);
   $("#navBar a").each( (index, a) => {
    a.href = $(a).attr("href");
    navBarAnchors[index] = a;
    console.log(a.href);
   })
   console.log(navBarAnchors);
   
});