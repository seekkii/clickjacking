document.addEventListener("DOMContentLoaded", function() {
  var iframe = document.getElementById("myIframe");
  var overlayButton = document.querySelector("#overlayButton");
  var resizeObserver = new ResizeObserver(function(entries) {
  for (var entry of entries) {
    var width = entry.contentRect.width;
    var height = entry.contentRect.height;
    overlayButton.style.top = width*1/5+ "px";
    overlayButton.style.left = height*8/10 + "px";
    
  }
}
);

resizeObserver.observe(iframe);
 
});
 