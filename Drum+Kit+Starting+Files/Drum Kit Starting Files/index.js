// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got click");
// }
/**
 * OR
 * document.querySelector("button").addEventListener("click", function(){
 *      alert("i got click")
 * })
 * 
 * 
 *Select only the first button is found in the HTML file
 */



// var drum_buttons = document.querySelectorAll(".drum");//Select all the button of drum -> an array, assign it with variable arr
// for (var i = 0; i < drum_buttons.length; i++)// call each elements(drum button) in the array
// {
//     drum_buttons[i].addEventListener("click", function(){ // add Event for each elements(drum buttons) in the array
//         var inner = this.innerHTML;

//         switch (inner) {
//             case "w":
//                 var crash = new Audio("./sounds/crash.mp3")
//                 crash.play();
//                 break;
//             case "a":
//                 var kick = new Audio("./sounds/kick-bass.mp3")
//                 kick.play();
//                 break;
//             case "s":
//                 var snare = new Audio("./sounds/snare.mp3")
//                 snare.play();
//                 break;
//             case "d":
//                 var tom_1 = new Audio("./sounds/tom-1.mp3");
//                 tom_1.play();
//                 break;
//             case "j":
//                 var tom_2 = new Audio("./sounds/tom-2.mp3")
//                 tom_2.play();
//                 break;
            
//             case "k":
//                 var tom_3 = new Audio("./sounds/tom-3.mp3")
//                 tom_3.play();
//                 break;  
        
//             case "l":
//                 var tom_4 = new Audio("./sounds/tom-4.mp3")
//                 tom_4.play();
//                 break;
//             default:
//                 break;
//         }

   
//     })

// }

//      document.addEventListener("keydown", function(event){ // add Event for each elements(drum buttons) in the array
//         var key = event.key;

//         switch (key) {
//             case "w":
//                 var crash = new Audio("./sounds/crash.mp3")
//                 crash.play();
//                 break;
//             case "a":
//                 var kick = new Audio("./sounds/kick-bass.mp3")
//                 kick.play();
//                 break;
//             case "s":
//                 var snare = new Audio("./sounds/snare.mp3")
//                 snare.play();
//                 break;
//             case "d":
//                 var tom_1 = new Audio("./sounds/tom-1.mp3");
//                 tom_1.play();
//                 break;
//             case "j":
//                 var tom_2 = new Audio("./sounds/tom-2.mp3")
//                 tom_2.play();
//                 break;
            
//             case "k":
//                 var tom_3 = new Audio("./sounds/tom-3.mp3")
//                 tom_3.play();
//                 break;  
        
//             case "l":
//                 var tom_4 = new Audio("./sounds/tom-4.mp3")
//                 tom_4.play();
//                 break;
//             default:
//                 break;
//         }
//     }
//     )

   
    
// Catching the key is typed
//event -> list of in for containing "key"
//-> using event.key
//    document.addEventListener("keydown", function(event){
//     console.log(event.key)
//    })



// function by_click(){
//     var drum_buttons = document.querySelectorAll(".drum");
//     for(var i = 0; i < length.drum_buttons; i++){
//         drum_buttons[i].addEventListener("click", function(){
//             alert("i got click");
//         })
//     }
    
// }

function make_sound(key){
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3")
            tom_2.play();
            break;
        
        case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3")
            tom_3.play();
            break;  
    
        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3")
            tom_4.play();
            break;
        default:
            console.log("No related sound");
            break;
    }

}

// by_click();

function got_click(){
    var key_buttons = document.querySelectorAll(".drum");
    for(var i = 0; i < key_buttons.length; i++){
        key_buttons[i].addEventListener("click",function(){
            make_sound(this.innerHTML);
            animation(this.innerHTML);
        });
    }
}

function got_type(){
    document.addEventListener("keydown", function(event){
        make_sound(event.key);
        animation(event.key);
    })
}

function animation(key){
    var key_buttons = document.querySelector("." + key);
    key_buttons.classList.add("pressed");
    setTimeout(function(){
        key_buttons.classList.remove("pressed");
    }, 100);
 
}




got_click();
got_type();
