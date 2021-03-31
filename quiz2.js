var tags = "%22%E6%9D%8E%E7%9F%A5%E6%81%A9%22"; 
var dataUrl = "https://api.flickr.com/services/feeds/photos\_public.gne?tags="+ tags +"&tagmode=any&format=json&per_page=400&jsoncallback=?"; 
var data = $.getJSON(dataUrl); 
data.done( function( msg ) {
  $.each(msg.items,function(i,item){
    $("#contain").html();
    $("#contain").append($("<img/>").attr("src",item.media.m));
  });
}); 
 data.fail( function( msg ) { 
 console.log(msg);
  $("#contain").html("fail getting data");
  });
