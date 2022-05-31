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

    function hepsi(){
        alert("ttt");
        var deger=document.getElementById("resımalt1")[0];
        var özellik=document.createAttribute("class");
        özellik.value="resımalt3";
        deger.setAttributeNode(özellik);
       
    }