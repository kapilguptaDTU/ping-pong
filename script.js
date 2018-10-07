//console.log('script loadedddd');
//
//var box = document.querySelector('#box');
//console.log(box)
//// dragbox
//document.addEventListener('keypress', function () {
//
//    // console.log(event.key);
//    // console.log(box.style.top, box.style.left);
//
//    var boxRect = box.getBoundingClientRect();
//    if (event.key == 'd' && (boxRect.x + boxRect.width < window.innerWidth)) {
//        box.style.left = (boxRect.x + 20);
//    }
//
//    if (event.key == 's' && (boxRect.y + boxRect.height < window.innerHeight)) {
//        box.style.top = (boxRect.y + 20);
//    }
//
//});
//
//






var box = document.querySelector('#box');
var ping_a = document.querySelector('.ping_controller_a');
var ping_b = document.querySelector('.ping_controller_b');
//var score_a=document.querySelector('.score_a');



function catchMeIfYouCan() {

    
    
  document.addEventListener('keypress', function(){

 var boxRect_a= ping_a.getBoundingClientRect();

 if(event.key == 'd'){
   ping_a.style.left = (boxRect_a.x + 20+'px');
 }



 
 if(event.key == 'a'){
 ping_a.style.left = (boxRect_a.x - 20+'px');
 }
      
      
 var boxRect_b= ping_b.getBoundingClientRect();

 if(event.key == 'l'){
   ping_b.style.left = (boxRect_b.x + 20+'px');
 }



 
 if(event.key == 'j'){
 ping_b.style.left = (boxRect_b.x - 20+'px');
 }

  })
    
    
    
    

    function randomGenerator(upper, lower) {
        return Math.floor((Math.random() * (upper - lower)) + lower);
    }

    var movement;
    let boxX = box.getBoundingClientRect().x;
        let boxY = box.getBoundingClientRect().y;
    box.addEventListener('mouseover', function () {
        // let mouseX = event.clientX;
        // let mouseY = event.clientY;
        clearInterval(movement);
        

        let newX = randomGenerator(0, window.innerWidth);
        let newY = randomGenerator(0, window.innerHeight);

        let moveX = 1;
        let moveY = 1;

        if (newX < boxX) {
            moveX = -1;
        }
        
      

        if (newY < boxY) {
            moveY = -1;
        }
        var i=1;
            var j=1;

        var score_a=document.querySelector('.score_a');
        var score_b=document.querySelector('.score_b');
        movement = setInterval(function () {
           
            
            var ping_b_x_coordinate= ping_b.getBoundingClientRect().x;
            var ping_b_y_coordinate= ping_b.getBoundingClientRect().y;
//            console.log(ping_b_y_coordinate);
            
              var ping_a_x_coordinate= ping_a.getBoundingClientRect().x;
            var ping_a_y_coordinate= ping_a.getBoundingClientRect().y;
//            console.log(ping_b_y_coordinate);
            
              if(boxX>=window.innerWidth){
            moveX=-1;
    }
        
        if(boxX<=0){
            moveX=1;
    }
            if(boxY==290 && boxX>=ping_b_x_coordinate && boxX<=ping_b_x_coordinate+100 ){
                moveY=-1;
                score_b.innerHTML =i;
                i++;
            }
            if(boxY==10 && boxX>=ping_a_x_coordinate && boxX<=ping_a_x_coordinate+100 ){
                moveY=1;
                score_a.innerHTML =j;
                j++;
            }
            console.log(boxY);
            
            if(boxY>300 ){
                
                boxX=20;
                boxY=20;
                console.log(boxX);
                score_a.innerHTML='';
                score_b.innerHTML='';
                i=0;j=0;
                window.alert("game over. A won..");
                clearInterval(movement);
                
                return;
            }
            
            if(boxY<10 ){
                boxX=20;
                boxY=20;
                console.log(boxX);
                score_a.innerHTML='';
                score_b.innerHTML='';
                i=0;j=0;
                window.alert("game over. B won...");
               clearInterval(movement);
                
                return;
            }
            
            boxX += moveX;
            boxY += moveY;
            box.style.left = boxX + 'px';
            box.style.top = boxY + 'px';

        }, 10);




        // box.style.left = newX + 'px';
        // box.style.top = newY + 'px';

    });

}

catchMeIfYouCan();



