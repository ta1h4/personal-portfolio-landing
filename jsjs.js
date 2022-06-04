    let baslat1= 0;
    let baslat2= 0;
    let baslat3= 0;
    let interval = setInterval(function(){
        baslat1+= 1;
        if(baslat1=== 5){ 
            clearInterval(interval);
        }
       
        document.getElementById("artansayı1").innerHTML=baslat1 +"+";
        
    }, 100);
    let interval2 = setInterval(function(){
        baslat2+= 1;
        if(baslat2=== 100){ 
            clearInterval(interval2);
        }
       
        document.getElementById("artansayı2").innerHTML=baslat2 +"+";
    }, 100);
    let interval3 = setInterval(function(){
        baslat3+= 1;
        if(baslat3=== 50){ 
            clearInterval(interval3);
        }
       
        document.getElementById("artansayı3").innerHTML=baslat3 +"+";
        
    }, 100);

    function yorumdegıstır1(){
        
    document.getElementById("yrm6").src='ttt.png';
    document.getElementById("yrm5").src='ttt.png';
    document.getElementById("yrm4").src='ttt.png';
    document.getElementById("yrm3").src='yorum.png';
    document.getElementById("yrm2").src='yorum.png';
    document.getElementById("yrm1").src='yorum.png';
    
    var deger=document.getElementById("yrmbtn1");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs";
        deger.setAttributeNode(özellik);
        var deger=document.getElementById("yrmbtn2");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs2";
        deger.setAttributeNode(özellik);
       
    }
   
    function yorumdegıstır2(){
         document.getElementById("yrm1").src='ttt.png';
    document.getElementById("yrm2").src='ttt.png';
    document.getElementById("yrm3").src='ttt.png';
    document.getElementById("yrm4").src='yorum.png';
    document.getElementById("yrm5").src='yorum.png';
    document.getElementById("yrm6").src='yorum.png';
    
    var deger=document.getElementById("yrmbtn1");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs-1";
        deger.setAttributeNode(özellik);
        var deger=document.getElementById("yrmbtn2");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs2-1";
        deger.setAttributeNode(özellik);
        
    }

      
    // var baslat=0;
    // function hepsı(){
    //     let interval = setInterval(function(){
    //         baslat+= 1;
    //         if(baslat=== 100){ 
    //             clearInterval(interval);
    //         }
           
    //         document.getElementById("yukle").innerHTML=baslat +"+";
            
    //     }, 10);
        
        
    //  }
    // let baslat1z= 0;
    // function ddd(){
    //     hpsyk();
    //     modal.style.display = "block";
    //     let interval = setInterval(function(){
    //         baslat1z+= 1;
    //         if(baslat1z=== 50){ 
    //             modal.style.display = "none";
    //             hps();
    //             clearInterval(interval);
    //         }
           
    //         document.getElementById("deger").innerHTML=baslat1z +"+";
            
    //     }, 100);
    // }
        var eskıseçilibutton=1;
    function active(id){
      
      console.log("ilk     "+eskıseçilibutton);
        var dng=0;
        if(eskıseçilibutton<id){dng=id;}
        else{dng=eskıseçilibutton;}
        for(var x=1;x<=dng;x++){
            
            var idvalue="b-"+x;
            if(x==id){
                
                var deger=document.getElementById(idvalue);
            var özellik=document.createAttribute("class");
            özellik.value=" button active";
            deger.setAttributeNode(özellik);
            }
            else{
                var deger=document.getElementById(idvalue);
                var özellik=document.createAttribute("class");
                özellik.value=" button";
                deger.setAttributeNode(özellik);
            }
        }
       eskıseçilibutton=id;
     }
 
    

  
    // let baslat1z= 0;
    // function ddd(){
    //     modal.style.display = "block";
    //     let interval = setInterval(function(){
    //         baslat1z+= 1;
    //         if(baslat1z=== 50){ 
    //             modal.style.display = "none";
    //             clearInterval(interval);
    //         }
           
    //         document.getElementById("deger").innerHTML=baslat1z +"+";
            
    //     }, 100);
    // }
    


/*-------- RESİMLER------*/
var $grid = $('.grid').isotope({
    
});

var filterFns = {
 
  ium: function() {
  
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');

  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});






    /* --------YORUM---------*/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      