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
    }, 30);
    let interval3 = setInterval(function(){
        baslat3+= 1;
        if(baslat3=== 50){ 
            clearInterval(interval3);
        }
       
        document.getElementById("artansayı3").innerHTML=baslat3 +"+";
        
    }, 50);

   
      
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




    /* --------YORUM---------*/
    
    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 50,
    //     pagination: {
    //       el: ".yorumgecıs",
    //       clickable: true,
    //     },
    //   });
     

function yorum( xds){

    if(xds<1250){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 50,
            pagination: {
              el: ".yorumgecıs",
              clickable: true,
            },
          });
    }
    else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 50,
            pagination: {
              el: ".yorumgecıs",
              clickable: true,
            },
          });
    }
}

var ilkwidth=0;
let interval222222 = setInterval(function(){
    var dddd=window.innerWidth;
if(ilkwidth!=dddd){
        yorum(dddd);

}
ilkwidth=dddd;

    
}, 100);