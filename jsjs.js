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
    var deger=document.getElementById("yrm1");
    var özellik=document.createAttribute("class");
    özellik.value="yorumgrp1";
    deger.setAttributeNode(özellik);
    var deger=document.getElementById("yrm2");
    var özellik=document.createAttribute("class");
    özellik.value="yorumgrp1";
    deger.setAttributeNode(özellik);
    var deger=document.getElementById("yrm3");
    var özellik=document.createAttribute("class");
    özellik.value="yorumgrp1";
    deger.setAttributeNode(özellik);

    
    var deger=document.getElementById("yrmbtn1");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs";
        deger.setAttributeNode(özellik);
        var deger=document.getElementById("yrmbtn2");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgecıs2";
        deger.setAttributeNode(özellik);
    }
   
    function yorumdegıstır(){
        var deger=document.getElementById("yrm1");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgrp2";
        deger.setAttributeNode(özellik);
        var deger=document.getElementById("yrm2");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgrp2";
        deger.setAttributeNode(özellik);
        var deger=document.getElementById("yrm3");
        var özellik=document.createAttribute("class");
        özellik.value="yorumgrp2";
        deger.setAttributeNode(özellik);

        //////////
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
    let baslat1z= 0;
    function ddd(){
        hpsyk();
        modal.style.display = "block";
        let interval = setInterval(function(){
            baslat1z+= 1;
            if(baslat1z=== 50){ 
                modal.style.display = "none";
                hps();
                clearInterval(interval);
            }
           
            document.getElementById("deger").innerHTML=baslat1z +"+";
            
        }, 100);
    }

    function hps(){
        
        var deger=document.getElementById("r-1");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt1";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-2");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt2";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-3");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt3";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-4");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt4";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-5");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt5";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-6");
         var özellik=document.createAttribute("class");
         özellik.value="resımalt6";
         deger.setAttributeNode(özellik);
     }
     function hpsyk(){
        
        var deger=document.getElementById("r-1");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-2");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-3");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-4");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-5");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
 
         var deger=document.getElementById("r-6");
         var özellik=document.createAttribute("class");
         özellik.value="";
         deger.setAttributeNode(özellik);
     }
    function mbl(){
       var deger=document.getElementById("r-1");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt1";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-2");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt2-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-3");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt3-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-4");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt4-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-5");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt5-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-6");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt6-2";
        deger.setAttributeNode(özellik);

    }
       
    
    function Design(){
        var deger=document.getElementById("r-1");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt1-3";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-2");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt2-3";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-3");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt3-3";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-4");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt4-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-5");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt5-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-6");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt6-2";
        deger.setAttributeNode(özellik);
    }

    
    function dev(){
        var deger=document.getElementById("r-1");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt1-4";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-2");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt2-4";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-3");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt3-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-4");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt4-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-5");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt5-2";
        deger.setAttributeNode(özellik);

        var deger=document.getElementById("r-6");
        var özellik=document.createAttribute("class");
        özellik.value="resımalt6-2";
        deger.setAttributeNode(özellik);
    }
    

    var modal = document.getElementById("myModal"); 

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
    