

// JavaScript code to update the progress bar in radio button
// function updateProgressBar(inputField) {
    // console.log(inputField);
    // var progress = document.getElementById('progress');
    // console.log(progress);
    // var fieldValue = inputField.value.length;
    // console.log(fieldValue);
    // var maxChars = 15; // Adjust this value according to your requirement
    // var percentage = (fieldValue / maxChars) * 100;
    // console.log(percentage);
    
    // if (fieldValue === 0) {
    //     progress.style.width = '0%';
    // } else {
    //     if (percentage > 100) {
    //         percentage = 100;
    //     }
        // progress.style.width = percentage + '%';
        // progress.style.width = '40%';
        
    // }
// }

// JavaScript code to update the progress bar in dropdown Menu
// function updateProgress() {
//     var selectBox1Value = parseInt(document.getElementById("selectBox1").value);
//     console.log(selectBox1Value);
//     var selectBox2Value = parseInt(document.getElementById("selectBox2").value);
//     console.log(selectBox2Value);
//     var total = selectBox1Value + selectBox2Value;
//     document.getElementById("progress").value = total;
//     console.log(total);
//     if(selectBox1Value===0){
//         progress.style.width='0%';
//     }else{
//         if(total>100){
//             total=100;
//         }
//         progress.style.width=total+'%';
       
//     }
//   }



function myProgeress(val) {
    if(val == 1){
        var myLength = $("#Name").val().length;
        var percentage = (myLength / 20) * 100;
        if(percentage < 40 && myLength > 3){
            progress.style.width = percentage + '%';
        }
    } else if(val == 2){
        progress.style.width = '70%';
    } else if(val == 3){
        progress.style.width = '100%';
    }   
}

function updateProgeress (val) {
    if(val == 1){
        progress.style.width = '40%';
    }
    else if(val == 2){
        progress.style.width = '70%';
    } else if(val == 3){
        progress.style.width = '100%';
        location.replace("Screen2.html")
    }
}

function move() {
    var elem = document.getElementById("progress");   
    var secondScreen = document.getElementById("secondScreen");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
        secondScreen.style.left = width + '%'; // Move the second screen
      }
    }
  }
  