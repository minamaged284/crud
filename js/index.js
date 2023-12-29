var bookmarksArray = [];
var deletButtonsList =  document.getElementsByClassName('btn-danger');
var OverLay = document.getElementById('over');
var overLayLayer =document.getElementById('overlay');
var regexURL=/^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[[a-z]{3}|\/]$/
var regexName=/^.{2}.+/
document.getElementById('submit').addEventListener('click',function(){
addBookmark();

})

function addBookmark (){
    var bookmark = {siteName: document.getElementById('siteName').value ,
    siteUrl: document.getElementById('siteUrl').value,
}
console.log(bookmark.siteUrl);

if(regexURL.test(bookmark.siteUrl) && regexName.test(bookmark.siteName))
{
    bookmarksArray.push(bookmark);
    display();
    clear();

}
else{
    showOverlay();
}




}
function clear() {
    document.getElementById('siteName').value = null;
    document.getElementById('siteUrl').value = null;
}


function display(){
    var output='';
    for(x=0 ; x<bookmarksArray.length ; x++){

        
        output+=`<tr class="border-bottom">
    <td>`+ (x+1) +`</td>
    <td>`+ bookmarksArray[x].siteName+`</td>
    <td><a target="__blank" href='`+ bookmarksArray[x].siteUrl +`' class="btn btn-success">Visit</a></td>
    <td><button onclick="deleteBook(`+x+`)" class="btn btn-danger">Delete </button></td>
    </tr>`;

        }
        document.getElementById('demo').innerHTML =output;

    }








function deleteBook(bIndex){
    bookmarksArray.splice(bIndex,1);
  
    display();
}


function closeOverLay(){
    OverLay.setAttribute("class",'d-none');
    
}

function showOverlay(){
    OverLay.setAttribute("class",'d-block');
}
window.addEventListener('keydown',function(eInfo){
    if(eInfo.key=='Escape'){
        closeOverLay();
    }
    console.log(eInfo);

})
document.addEventListener('click',function(eInfo){
    if(eInfo.target===overLayLayer){
        closeOverLay();
    }

})