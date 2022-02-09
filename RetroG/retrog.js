(function() {
$( document ).ready(function() {
 

var primary = $("body").find('.hdtb-mitem.hdtb-msel').text();
console.log(primary);
if(primary === "All"){
     

setTimeout(function() { 
 var origin = window.location.href;
    var site = "https://www.google.com/search?q=";
    var chk = origin.includes(site);
      if (chk == true){
        $('span').each(function(){
        var sbox = $(this);
        var sboxtxt = sbox.text();
        var match = "·";
        var match2 = "People also ask";
        var match3 = "View all";
        var match4 = "Related searches";
        var match5 = "More news";
         var match6 = "More places";
          if(sboxtxt === match){
              var container = $(this).parent().parent().parent().parent().parent();
              container.html("");
              console.log("nogged");
          }
          if(sboxtxt === match2){
              var container = $(this).parent().parent().parent();
              container.html("");
              console.log("nogged2");
          }
          if(sboxtxt === match3){
              var container = $(this).parent().parent().parent().parent().parent().parent();
              container.html("");
              console.log("nogged3");
          }
          if(sboxtxt === match4){
              var container = $(this).parent().parent().parent().parent().parent().parent();
              container.html("");
              console.log("nogged3");
          }
          if(sboxtxt === match5){
              var container = $(this).parent().parent().parent().parent();
              container.html("");
              console.log("nogged3");
          }
          if(sboxtxt === match6){
              var container = $(this).parent().parent().parent().parent().parent().parent().parent();
              container.html("");
              console.log("nogged3");
          }
      });
      $('div').each(function(){
        var match3 = "Popular products";
        var sdiv = $(this);
        var sdivtxt = sdiv.text();
        if(sdivtxt === match3){
          var sdivbox = $(this);
          var sdivcontainer = $(this).parent().parent().parent().parent();
              sdivcontainer.html("");
              console.log("nogged4 div");
        }  
      });
      $('div').each(function(){
        var match5 = "Discover more places";
        var match8 = "Refine by brand";
        var sdiv = $(this);
        var sdivtxt = sdiv.text();
        if(sdivtxt === match5){
          var sdivbox = $(this);
          var sdivcontainer = $(this).parent().parent().parent().parent();
              sdivcontainer.html("");
              console.log("nogged5 div");
        }  
        if(sdivtxt === match8){
          var sdivbox = $(this);
          var sdivcontainer = $(this).parent().parent().parent();
              sdivcontainer.html("");
              console.log("nogged5 div");
        }  
      });
      $('g-img').each(function(){
        var gimg = $(this);
        var sdivcontainer = $(this).parent().parent().parent();
              sdivcontainer.html("");
        });
      $('g-tray-header').each(function(){
        var gtray= $(this);
        var sdivcontainer = $(this).parent().parent().parent();
              sdivcontainer.html("");
        });
  
      }
}, 1);

}else{
  return false;
}
});
})();

