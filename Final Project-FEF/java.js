$(document).ready(function(){
  $("#linkedInIcon").hover(function(){
     $("#linkedInIcon").mouseenter(function(){ 
      $(this).css("font-size", "30px");
     });

     $("#linkedInIcon").mouseleave(function(){
         $(this).css("font-size", "15px");
     });

  });
  $("#gitHubIcon").hover(function(){
    $("#gitHubIcon").mouseenter(function(){ 
     $(this).css("font-size", "30px");
    });

    $("#gitHubIcon").mouseleave(function(){
        $(this).css("font-size", "15px");
    });

 });

 $("#facebookIcon").hover(function(){
  $("#facebookIcon").mouseenter(function(){ 
   $(this).css("font-size", "30px");
  });

  $("#facebookIcon").mouseleave(function(){
      $(this).css("font-size", "15px");
  });

});

});

/*function testing(){
let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitcall").innerHTML = gitObject.url;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/agrunke3", true);
gitHubRequest.send();
}; */

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    gitHubRequest.open("GET", url, true);
    gitHubRequest.send();
  }
  
  function loadRepoCallback(gitHubRequest) {
    //document.getElementById("githubProfile").innerHTML = gitHubRequest.responseText;
    parsed=JSON.parse(gitHubRequest.responseText);

    var x;
    for(x in parsed){
      document.getElementById('gitItems').innerHTML+="<li class='col-md-4 text-center'> <a target='_blank' href='"+parsed[x].html_url+"'> "+parsed[x].name+"</li>";
    }
  }

loadRepo('https://api.github.com/users/agrunke3/repos',loadRepoCallback);




  //   // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
  //   // Append the new list items to the element you retrieved from HTML
  // }
  function turnColor(){
    document.getElementById("original").href="style1.css";
    };