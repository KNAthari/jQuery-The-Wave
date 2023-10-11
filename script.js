$(document).ready(function(){
    //var HEIGHT will be use to capture the height of the browser window
    var HEIGHT = $(window).height();
    //next we set the intervals of the entire animation
    setInterval(down, 5300)
    //Then, we call the function down to animate the div going down across our screen
    function down(){
        $("#div1").animate({bottom: '-=642px'}, "slow", function(){
            $("#div2").animate({bottom: '-=642px'}, "slow", function(){
                $("#div3").animate({bottom: '-=642px'}, "slow", function(){
                    $("#div4").animate({bottom: '-=642px'}, "slow", function(){
                        $("#div5").animate({bottom: '-=642px'}, "slow", function(){
                            $("#div6").animate({bottom: '-=642px'}, "slow", function(){
                                $("#div7").animate({bottom: '-=642px'}, "slow", function(){
                                    $("#div8").animate({bottom: '-=642px'}, "slow")
                                });
                            });
                        });
                    });
                }); 
            });
        });

    
    }

    setInterval(top, 5300)

    function top(){
        $("#div1").animate({bottom: '+=642px'}, "slow", function(){
            $("#div2").animate({bottom: '+=642px'}, "slow", function(){
                $("#div3").animate({bottom: '+=642px'}, "slow", function(){
                    $("#div4").animate({bottom: '+=642px'}, "slow", function(){
                        $("#div5").animate({bottom: '+=642px'}, "slow", function(){
                            $("#div6").animate({bottom: '+=642px'}, "slow", function(){
                                $("#div7").animate({bottom: '+=642px'}, "slow", function(){
                                    $("#div8").animate({bottom: '+=642px'}, "slow");
                                });
                            });
                        });
                    });
                });
            });
        });
    }
})