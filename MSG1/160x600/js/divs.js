banner.setUpDivs = function(){
    B.div('btn_div',{},{
        mouseover:function(){
            if(B.adState === "ended"){
                A.to('btn', 0.3, {scale:1.1, transformOrigin:B.tOrigin});
            }
        },
        mouseout:function(){
            if(B.adState === "ended"){
                A.to('btn', 0.3, {scale:1.0, transformOrigin:B.tOrigin});
            }
        }
    }, true);
    B.div('legal_div', {},{
      mouseover:
        function(){
          A.visible('bubble');
        },
      mouseout:
        function(){
          A.invisible('bubble');
        },
      click:
        function(){
          window.open(clickTag, '_blank');
        }
    }, true);
}