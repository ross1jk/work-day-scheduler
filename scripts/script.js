/* What I will need:
  -rows that can be typed into: 9-5 every hour
  -times that match and change
  -css that changes color with the time
  -a save button for the event
  -running dates/times
    */
 
   $(function(){
    // Current date appended to heading 
   var currentDate = moment().format("dddd, MMMM Do, YYYY"); 
   $("#currentDay").append(currentDate); 
   var currentTime = parseInt(moment().format("H")); 
   var past; 
   var future; 
   console.log(currentTime); 
   var myPlans;
   var pos = 0;
   var row; 
   var myDay = [
     {time: "9 AM", id: "09"},
     {time: "10 AM", id: "10"}, 
     {time: "11 AM", id: "11"}, 
     {time: "12 PM", id: "12"},
     {time: "1 PM", id: "13"},
     {time: "2 PM", id: "14"},
     {time: "3 PM", id: "15"},
     {time: "4 PM", id: "16"},
     {time: "5 PM", id: "17"},
   ]; 
   var input = []; 
   var textArea; 
   
   
  //set local storage to input array 
   for (var i = 0; i < localStorage.length; i++){
   var getStorage = localStorage.getItem(localStorage.key(i));  
   var storageId = localStorage.key(i); 
   input.push({storageId, getStorage});
   } 
   
  input.sort(function(a, b) {
     return (a.storageId) - (b.storageId);
   });  
 
  console.log(input);
 
 //Create Time Forms
  function creatTimeForm(){
 
  //array for my complete day times, plans are blanks (not sure will need ids) myday.map--look into
  for (var i=0; i < myDay.length; i++) { 
    var finalTimes = myDay[pos].time; 
    myPlans = myDay[pos].id
    pos++; 
    //code that has the whole row
     row = 
      '<div class="input-group"><div class="input-group-prepend">'
      + //will display the time
      '<span class="input-group-text timeDisplay1" id="inputGroup-sizing-default timeDisplay">' + finalTimes + '</span></div>'
      + //text input goes here
      '<textarea class="form-control userInput" id="' + myPlans + '" aria-label="With textarea" aria-describedby="saveBtn">' + textArea + '</textarea>'
      + //save button is here 
      '<div class="input-group-append" id="saveBtn"><button class="btn btn-primary btn-lg saveBtn ' + myPlans + '" type="button"><i class="far fa-save"></i></button></div> </div></div>'
 
      //test that works (as needed) 
      $(".saveBtn").click(function (e) {
      var myClass = ($(this).attr("class").split(' ')[4]) 
      var dailyPlans = {text: $("#"+ myClass).val(), myClass}
      e.preventDefault(); 
      e.stopPropagation();
      localStorage.setItem(myClass, dailyPlans.text); 
      });
 
      //appends to page 
      $("#timeblock").append(row); 
     
   
   var currentInput = $("#" + myPlans).attr("id").split(' ')[0]; 
   console.log(currentInput);
 
   //Rows and Time Color Change Event 
   if (myPlans < currentTime){
    $("#" + currentInput).css("background-color", "#d3d3d3");
   }
   else if (myPlans > currentTime){
   $("#" + currentInput).css("background-color", "#77dd77");
   }
   else {
   $("#" + currentInput).css("background-color", "#ff6961");
   }
 
  
   
   //closes loop
    }
     
   //log my values
   $("#09").text(input[0].getStorage);
   $("#10").text(input[1].getStorage);
   $("#11").text(input[2].getStorage);
   $("#12").text(input[3].getStorage);
   $("#13").text(input[4].getStorage);
   $("#14").text(input[5].getStorage);
   $("#15").text(input[6].getStorage);
   $("#16").text(input[7].getStorage);
   //$("#17").text(input[8].getStorage);
    //closes create time form 
   }
 
     
   
    creatTimeForm(); 
    });