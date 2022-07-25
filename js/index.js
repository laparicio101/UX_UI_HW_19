console.log("Your Index.js file is loaded correctly!");
$("li").hover(function(){
    $(this).css({"text-decoration-line":"underline", "text-decoration-color": "#ad69ae", "text-decoration-thickness": "5px"});
}, function(){
    $(this).css({"text-decoration-line":"none"});
})

$("button").hover(function(){
    $(this).css({"border-bottom-color":"#ad69ae", "border-bottom-width":"5px"});
},function(){
    $(this).css({"border-bottom-color":"black","border-bottom-width":"2px"});

})