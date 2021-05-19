const popup = document.querySelector('.chat-window');
const chatBtn = document.querySelector('.chat-button');
const submitBtn = document.querySelector('.submit1');
const chatArea = document.querySelector('.chatbody1');
const inputElm = document.querySelector('.input');


//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

function closechat(){
  popup.classList.toggle('show');
}

//function textToAudio(inputval)
//{
                //let msg = document.getElementById("text-to-speech").value;
              
 //               let speech = new SpeechSynthesisUtterance();
 //               speech.lang = "en-US";
                
 //               speech.text =inputval;
 //               speech.volume = 1;
 //               speech.rate = 1;
 //               speech.pitch = 1;
                
 //               window.speechSynthesis.speak(speech);
//}


// send message when click on submit button
submitBtn.addEventListener('click', ()=>{


  var aa = inputElm.value;
  if( aa === ''){return false;}
  else{
    let userInput = inputElm.value;
    var div = document.createElement("div");
    div.id="userqueries";
    div.innerHTML =`<div id="user1">${userInput}</div>`;
    chatArea.appendChild(div);

    inputElm.value = '';
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;}

});




//sedn message when press the Enter
document.addEventListener("DOMContentLoaded", () => {
  

  const inputField = document.getElementById("userinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      var bb = inputElm.value;
      if( bb === ''){return false;}
      else{
        let userInput = inputElm.value;

            var div = document.createElement("div");
            div.id="userqueries";
            div.innerHTML =`<div id="user1">${userInput}</div>`;
            chatArea.appendChild(div);

            inputElm.value = '';
            chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
      //addChat(input);
    }}
  });
});





var x = bot();

function bot(){
  
  let botInputField = "Hi! I'm Guido, University Query Assistant🤖" 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<div id="bot1">${botInputField}</div><br>
                     <button id="botbutton" onclick="sendUniversityMsg()">University👨‍🎓</button>
                     <button id="botbutton" onclick="sendHostelMsg()">Hostel🏤</button>
                     <button id="botbutton" onclick="sendMessMsg()">Mess🍲</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight; 
}


function botTyping(){
  var timestmp = "Typing ....... ";
  var botdiv = document.createElement("div");
  botdiv.id = "botqueries";
  botdiv.innerHTML =`<div id="timestamp">${timestmp}</div>`;
  chatArea.appendChild(botdiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


}
function sendUniversityMsg(){
  //user input append into chat area
  var admValue = "University";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
// create a fake time delay for bot is typing
  botTyping();
   
  setTimeout(function(){ 

    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove(); 

  //create element from bot side
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><p id="bot1">That's a nice pikup🤗. What would you like to<br> explore the below options🧐</p>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
     //remove the fake time delay
    

    botTyping();
    setTimeout(function(){ 
      //remove the fake time delay

      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

    //create element from bot side
    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<br><button id="botbutton" onclick="sendAdmissionMsg()">Admissions🧍🏻</button>
                     <button id="botbutton" onclick="sendAcadamicsMsg()">Academics📚</button>
                     <button id="botbutton" onclick="sendCollegeMsg()">About Campus🏫</button>
                     <button id="botbutton" onclick="sendAdministrationMsg()">Administration👨🏼‍⚖️</button>
                     <button id="botbutton" onclick="sendExaminationMsg()">Examinations & Results💯</button>
                     <button id="botbutton" onclick="sendDepartmentMsg()">Departments😊</button>
                     <button id="botbutton" onclick="sendPlacementMsg()">Placements👩‍💻</button>
                     <button id="botbutton" onclick="sendOrganizationMsg()">Organizatons🧑‍🤝‍🧑</button>
                     <button id="botbutton" onclick="sendOtherMsg()">Others🤔</button>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    

 
       
     
    },1500);

      
    
   },1500);


  
}

function sendAdmissionMsg(){
  var admValue = "Admissions";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();

   setTimeout(function(){ 
        //remove the fake time delay
       var deltimestamp = document.getElementById("timestamp");
       deltimestamp.remove(); 
  
    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<br><p id="bot1">You almost there🤗. What would you like to explore🤩</p>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;     

    botTyping();

    setTimeout(function(){ 
    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove(); 

    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<br><button id="botbutton" onclick="sendUpdatesMsg()">New Updates</button>
                  <button id="botbutton" onclick="sendHtoAMsg()">How to Apply</button>
                  <button id="botbutton" onclick="sendIDMsg()">Important Dates</button>
                  <button id="botbutton" onclick="sendCWMsg()">College Website</button>
                  <button id="botbutton" onclick="sendDocMsg()">ContactDetails</button>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    },1500);



  },1500);
}


function sendUpdatesMsg(){
  var admValue = "New Updates";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();
  setTimeout(function(){ 

    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove(); 
 //code
    var admValue = "Unfortunately, no Updates are available now😞";
    var div = document.createElement("div");
    div.id="botqueries",
    div.innerHTML =`<br><div id="bot1">${admValue}</div>`;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

     //remove the fake time delay
    botTyping();
    setTimeout(function(){ 
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 
      
      var div = document.createElement("div");
      div.id="botqueries",
      div.innerHTML =`<p id="bot1">Don't worry😊, Updates will be provided soon...🤗</p>`;
      chatArea.appendChild(div);
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    },1500);

  },1500);
}

function sendHtoAMsg(){
  var admValue = "How to Apply";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
    botTyping();
    setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
      var admValue = "Don't worry🤗, I will help you.";
      var div = document.createElement("div");
      div.id="botqueries",
      div.innerHTML =`<br><div id="bot1">${admValue}</div>`;
      chatArea.appendChild(div);
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


      botTyping();
      setTimeout(function(){ 
        var deltimestamp = document.getElementById("timestamp");
        deltimestamp.remove(); 
        var div = document.createElement("div");
        div.id="botqueries",
        div.innerHTML =`<p id="bot1">Check out the User Guide given below to fill the Online<br>  Application Form.</p>`;
        chatArea.appendChild(div);
        chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

        botTyping();
        setTimeout(function(){ 
          var deltimestamp = document.getElementById("timestamp");
          var div = document.createElement("div");
          div.id="botqueries",
          div.innerHTML =`<p id="bot1"><a id="a1" href ="http://demo.rguktcet.in/images/RGUKTCETUG.pdf" target="_blank">click here to get more Details</a></p>`;
          chatArea.appendChild(div);
          chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
        deltimestamp.remove();
      },1500);
      },1500);
    },1500);
}

function sendIDMsg(){
  var admValue = "Important Dates";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

 //code
    var admValue = "List of Important Dates";
    var div = document.createElement("div");
    div.id="botqueries",
    div.innerHTML =`<br><div id="user1">${admValue}</div>`;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

    botTyping();
    setTimeout(function(){ 
    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove();

    var div = document.createElement("div");
    div.id="botqueries",
    div.innerHTML =`<div id="user1"><a id="a1" href ="http://rguktcet.in/images/RGUKT-CET2020-ImportantDates.pdf" target="_blank">click here to get Important Dates List</a></div>`;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
},1500);
}


function sendDocMsg(){
  var admValue = "ContactDetails";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 


 //code

  var admValue = "The Convener, RGUKT CET- 2020,"+
                  "<br>RGUKT Nuzvid Campus,"+
                  "<br>Nuzvid, Krishna District,"+
                  "<br>Andhra Pradesh - 521202"+
                  "<br>Email : convener.cet@rgukt.in"+
                  "<br>Help line numbers Queries:08656-235855 (* Only from 10:30 AM to 5:00 PM in all working days)";


  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

},1500);
}

function sendCWMsg(){
  var admValue = "College Website";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
   botTyping();
   //textToAudio(admValue)
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1"><a id="a1" href ="https://rguktn.ac.in/" target="_blank">RGUKT NUZVID WEBSITE</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}

function sendAcadamicsMsg(){
  var admValue = "Academics";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 

    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove(); 


    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<p id="bot1">You are almost there🤗. What would you like to<br> explore from the below</p>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


     //remove the fake time delay
     botTyping();
     setTimeout(function(){ 
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 


      var botDiv = document.createElement("div");
      botDiv.id = "botqueries";
      botDiv.innerHTML =`<br><button id="botbutton" onclick="sendProgramsMsg()">Programs📘</button>
                     <button id="botbutton" onclick="sendARMsg()">Academic Regulations👌</button>
                     <button id="botbutton" onclick="sendACMsg()">Academic Calander📅</button>
                     <button id="botbutton" onclick="sendEatCMsg()">Education at Campus📝</button>`;
      chatArea.appendChild(botDiv);
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    },1500);
  },1500);
}

function sendProgramsMsg(){
  var admValue = "Programs";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<p id="bot1">One step ahead🤏</p>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
  setTimeout(function(){ 
    //remove the fake time delay
     var deltimestamp = document.getElementById("timestamp");
     deltimestamp.remove(); 
//code
 var botDiv = document.createElement("div");
 botDiv.id = "botqueries";
 botDiv.innerHTML =`<br><button id="botbutton" onclick="under_graduate()">UnderGraduate✌️</button>
                    <button id="botbutton" onclick="post_graduate()">PostGraduate🙌</button>`;
 chatArea.appendChild(botDiv);
 chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
},1500);
}



function under_graduate()
{
     var admValue = "UnderGraduate";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   //textToAudio(admValue)
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code

     var admValue = " Six - Years Integrated Course";
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


   botTyping();
   //textToAudio(admValue)
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code

     var admValue = "The program offers six year integrated course<br> consists of Two Year Pre University Course(PUC)<br> equivalent to Intermediate plus Four Year B-Tech.";
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

},1500);
  
},1500);
}


function post_graduate()
{
     var admValue = "PostGraduate";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();
  setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue ="M.Tech"+
                "<br>This course has been designed incorporating advanced Computing Techniques and Tools to suit for the people seeking TEACHING/RESEARCH CAREER in computational Engineering/Sciences competing with world class curricula.";
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
  setTimeout(function(){ 
    var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="user1"><a id="a1" href ="https://admissions.rguktn.ac.in/" target="_blank">Complete Details of Masters Program</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
},1500);
}


function sendARMsg(){
  var admValue = "Academic Regulations";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
       var admValue = "Rajiv Gandhi University of Knowledge Technologies-AP"+
                      "<br>Academic Rules and Regulations for the Six Year Integrated B. Tech Program";
      var div = document.createElement("div");
       div.id="botqueries",
      div.innerHTML =`<br><div id="user1">${admValue}</div>`;
      chatArea.appendChild(div);
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

   botTyping();
   setTimeout(function(){ 
    var deltimestamp = document.getElementById("timestamp");
    deltimestamp.remove(); 

  

  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="user1"><a id="a1" href ="https://rguktn.ac.in/academics/academic-regulations/Academic-Regulations-2019.pdf" target="_blank">Academic Regulations</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
},1500);
}



function sendACMsg(){
  var admValue = "Acadamic Calander";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">The schedule of events occurring in the academic year including term times, examination dates, etc.</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<a href ="https://rguktn.ac.in/academics/academic_calendar/" target="_blank" id="bot1">Academic Calander</a>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

},1500);
},1500);
}



function sendEatCMsg(){
  var admValue = "Education at Campus";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 
 //code
   var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1"><strong>The Pre University Part:</strong><br>This is equivalent to the two year Intermediate (AP) education. The program provides a qualitative plus two education in itself and further lays a stronger foundation for the technical and professional courses ahead. It has an inbuilt system for remedial education for the students who are relatively weak.There is a permitted exit after Pre-University if the student chooses to go for a career in other professional programs.<br><br><strong>Degree Programs at IIITs:</strong><br>Upon completion of 6 years of education, each year consisting of 3 semesters, and the prescribed requirements, the graduates will be awarded a B.Tech. degree in any one of the following engineering disciplines given below

        Chemical Engineering,Civil Engineering,Computer Science and Engineering,Electronics & Communications Engineering,Materials Science and Metallurgical Engineering,Mechanical Engineering.<br><a href ="https://rguktn.ac.in/about/EducationSystem/" target="_blank" id="bot1">About RGUKT</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="user1"><a id="a1" href ="https://www.quora.com/What-is-your-review-of-IIIT-Nuzvid#:~:text=IIIT%20Nuzvid%20is%20a%20very,laptops%20and%20internet%20for%20studying.&text=IIIT%20Nuzvid%20offers%206%20years,after%20completion%20of%20their%20SSC%20." target="_blank">Education at RGUKT(N) - Quora</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
},1500);
}


function sendCollegeMsg(){
  var admValue = "About Campus";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
      var botDiv = document.createElement("div");
        botDiv.id = "botqueries";
        botDiv.innerHTML =`<br><p id="bot1">You almost there🤗. What would you like to explore</p>`
                     
        chatArea.appendChild(botDiv);
        chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


      botTyping();
      setTimeout(function(){ 
        //remove the fake time delay
         var deltimestamp = document.getElementById("timestamp");
         deltimestamp.remove();
        var botDiv = document.createElement("div");
        botDiv.id = "botqueries";
        botDiv.innerHTML =`<br><button id="botbutton" onclick="sendACLMsg()">About Campus Life👨‍💼</button>
                    <button id="botbutton" onclick="sendESMsg()">Gallery🖼️</button>
                    <button id="botbutton" onclick="events()">Events & Activities🎪</button>
                     <button id="botbutton" onclick="address()">Address & Directons🗺️</button>
                     <button id="botbutton" onclick="sendAandAMsg()">Achievements and Awards🏆🏅</button>`
                     
        chatArea.appendChild(botDiv);
        chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
},1500);
}


function sendACLMsg(){
  var admValue = "About Campus Life";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //codechatArea.appendChild(botDiv);
  var admValue ="RGUKT is a fully residential environment. This is necessary because most of the rural students come from a geographically distributed wide area and would not be able to commute to the campus. Thus, it is essential to provide a fully residential campus with all of the facilities included such as a shops, hospitals, bank, laundry, barbershops, etc. appropriate for a community of about 20,000 people consisting of 12,000 students, 3000 faculty and staff and 5000 service providers of various types.RGUKT provides its students and staff all the necessary medical facilities.Students are encouraged to get involved in arts, music, drama, debate, paintings and other elated skills. RGUKT provides facilities for both indoor games.  "
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}<a id="a1" href ="https://rguktn.ac.in/about/CampusLife/" target = _blank>Click here to know more...</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;



},1500);
}


function sendESMsg(){
  var admValue = "Gallery";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
      //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1"><a id="a1" href ="https://rguktn.ac.in/gallery/" target = _blank>Click here to know more...</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

},1500);
}


function sendAandAMsg(){
  var admValue = "Achievements and Awards";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">RGUKT Nuzvid students prove themseleves in many<br> competitions.<br>Click the below link to know about the achievements<br> of RGUKT.<br><a id="a1" href ="https://rguktn.ac.in/about/achievements/" target="_blank">Achievements & Awards</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}


function events(){
  var admValue = "Events & Activities";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">News, Events & Activities of RGUKT <br><a id="a1" href ="https://rguktn.ac.in/events/" target="_blank">Click Here....</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}


function address(){
  var admValue = "Address & Directions";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1"><a id="a1" href ="https://rguktn.ac.in/contactus/" target="_blank">Address and Directons</a></div>
                  <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.712354818649!2d80.81862701470244!3d16.790980588438522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e53fa3b4fb%3A0xfd1e193c90e4643!2sRajiv%20Gandhi%20University%20of%20Knowledge%20and%20Technology%20%2C%20Nuzvid!5e0!3m2!1sen!2sin!4v1621344509970!5m2!1sen!2sin" width="200" height="200" style="border:1px solid blue;" allowfullscreen="" loading="lazy"></iframe></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
}






function sendAdministrationMsg(){
  var admValue = "Administration";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><p id="bot1">You almost there🤗. What would you like to explore</p>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><button id="botbutton" onclick="chancellorMsg()">Chancellor</button>
                     <button id="botbutton" onclick="vcMsg()">Vice Chancellor</button>
                     <button id="botbutton" onclick="directorMsg()">Director</button>
                     <button id="botbutton" onclick="sendAdminMsg()">Administration</button>
                     <button id="botbutton" onclick="sendDFMsg()">Department Heads</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
},1500);
}


function chancellorMsg()
{
  var admValue = "Chancellor";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  //code
  
  var admValue = "Prof. K.C.Reddy"+
                  "<br>Chancellor &"+
                  "Chairman of the Governing Council,"+
                  "<br> RGUKT - A.P.";
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var botDiv = document.createElement("div");
  //botDiv.id = "botqueries";
  botDiv.innerHTML = `<div><a id="aa1" href ="https://rguktn.ac.in/administration/chancellor/" target="_blank"><img src ="kc-reddy.jpg" width="250px" height ="250px" id="aa1"></a></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var admValue = "Click on Image for more info..."
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML = `<div id="bot1">${admValue}</div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);

  },1500);

},1500);
}


function vcMsg()
{
  var admValue = "Vice Chancellor";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
 var admValue = "Prof. K Hemachandra Reddy"+
                "Vice Chancellor (i/c),"+
                "<br>RGUKT - A.P."
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  //botDiv.id = "botqueries";
  botDiv.innerHTML = `<div ><a id="aa1" href ="https://rguktn.ac.in/administration/vice-chancellor/" target="_blank"><img src ="vc.jpg" width="250px" height ="250px" id="aa1"></a></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

    var admValue = "Click on Image for more info..."
    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML = `<div id="user1">${admValue}</div>`;
    chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

},1500);
},1500);


},1500);
}



function directorMsg()
{
  var admValue = "Director";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue = "Prof. G.V.R.Srinivasa Rao<br>Director , RGUKT Nuzvid"
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
  var botDiv = document.createElement("div");
  //botDiv.id = "botqueries";
  botDiv.innerHTML = `<div id="pic"><a id="aa1" href ="https://rguktn.ac.in/administration/director/" target="_blank"><img src ="director.jpg" width="250px" height ="250px" id="aa1"></a></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
  var admValue = "Click on Image for more info..."
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML = `<div id="user1">${admValue}</div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;



},1500);
},1500);


},1500);
}



function sendAdminMsg(){
  var admValue = "Administration";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML = `<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/administration/" target="_blank" >Administration of RGUKT</a></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;




 //code





},1500);
}



function sendDFMsg(){
  var admValue = "Department Heads";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML = `<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/academics/departments/department-heads.php" target="_blank">Head of the Departments</a></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;







},1500);
}



function sendExaminationMsg(){
  var admValue = "Examinations & Results";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code

  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1">To know News & Updates about Exams, Visit Examcell :<br><a id="a1" href ="https://examcell.rguktn.ac.in/" target="_blank">Examination CELL</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;





},1500);

}


function sendDepartmentMsg(){
  var admValue = "Departments";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
 //code
  var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<br><p id="bot1">You are almost there🤗. What would you like to explore.</p>`;
   chatArea.appendChild(botDiv);
   chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight; 


   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
 //code
  var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<br><button id="botbutton" onclick = "cse_fn()">CSE</button>
                       <button id="botbutton" onclick = "ece_fn()">ECE</button>
                       <button id="botbutton" onclick = "chem_fn()">CHEM</button>
                       <button id="botbutton" onclick = "civil_fn()">CIVIL</button>
                       <button id="botbutton" onclick = "mme_fn()">MME</button>
                       <button id="botbutton" onclick = "mech_fn()">MECH</button>`;
   chatArea.appendChild(botDiv);
   chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight; 
  },1500);
},1500);
}



function cse_fn()
{
  var admValue = "CSE";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/cse" target="_blank">click here to know more info about CSE</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight
},1500);
}



function ece_fn()
{
  var admValue = "ECE";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
  var deltimestamp = document.getElementById("timestamp");
  deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/ece" target="_blank">click here to know more info about ECE</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


 //code
},1500);
}



function chem_fn()
{
    var admValue = "CHEM";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/che" target="_blank">click here to know more info about CHEMICAL</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

 //code
},1500);
}



function mech_fn()
{
    var admValue = "MECH";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/me" target="_blank">click here to know more info about MECHANICAL</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


 //code
},1500);
}



function civil_fn()
{
    var admValue = "CIVIL";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/ce" target="_blank">click here to know more info about CIVIL</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


 //code
},1500);
}



function mme_fn()
{
  var admValue = "MME";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
      var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<br><div id="bot1"><a id="a1" href ="https://rguktn.ac.in/departments/mme" target="_blank">click here to know more info about MME</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 //code
 },1500);
}



function sendPlacementMsg(){
  var admValue = "Placements";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="Placement refers to the process of connecting the selected person and the employer in order to establish an ongoing employment relationship. In this step the employee is given the activities he/she needs to perform and is told about his/her duties. Placement is usually followed by the orientation process."
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();

  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://cdpc.rguktn.ac.in/cdpc/login" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
},1500);
}



function sendOrganizationMsg(){
  var admValue = "Organizations";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
//code
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><button id="botbutton" onclick="sendSWMsg()">Student Welfare🧍🏻‍♂️</button>
		                 <button id="botbutton" onclick="sendNccMsg()">NCC👨🏻‍✈️</button>
                     <button id="botbutton" onclick="sendNssMsg()">NSS🤗</button>
                     <button id="botbutton" onclick="sendHHMsg()">Helping Hands🧑🏻‍🤝‍🧑🏻</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  },1500);
}



function sendSWMsg(){
  var admValue = "Student Welfare";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="About student welfare"
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();

  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://rguktn.ac.in/student_affairs/student_welfare/" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendNccMsg(){
  var admValue = "NCC";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens."
  var div=document.createElement("div");
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;

  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://rguktn.ac.in/student_affairs/ncc/" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendNssMsg(){
  var admValue = "NSS";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="The National Service Scheme is an Indian government-sponsored flagship for public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India."
  var div=document.createElement("div");
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://rguktn.ac.in/student_affairs/nss/" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendHHMsg(){
  var admValue = "Helping Hands";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<p id="bot1">Helping Hands aims to help the prople who are in need.</p>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
}


function sendOtherMsg(){
  var admValue = "Others";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<p id="user1">${admValue}</p><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
//code
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><p id="bot1">You almost there🤗. What would you like to explore</p>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 
    botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
//code
  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><button id="botbutton" onclick="sendCcMsg()">Convocation👨🏻‍🎓</button>
                     <button id="botbutton" onclick="sendAluMsg()">Alumni👩🏻‍💻👨🏻‍🏫👩🏻‍🏭</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
},1500);
}



function sendCcMsg(){
  var admValue = "Convocation";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
 var admValue="A convocation is a group of people formally assembled for a special purpose, mostly ecclesiastical or academic."
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove();
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://rguktn.ac.in/convocation/" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendAluMsg(){
  var admValue = "Alumni";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="An alumni a former student or pupil of a school, college, or university. Commonly, but not always, the word refers to a graduate of the educational institution in question."
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
  var div = document.createElement("div");
  div.id="botqueries",
  div.innerHTML =`<div id="bot1"><a id="a1" href ="https://alumni.rguktn.ac.in/" target="_blank">click here to get detail information</a></div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendHostelMsg(){
  var admValue = "Hostel";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
  botTyping();

   setTimeout(function(){ 
   var deltimestamp = document.getElementById("timestamp");
   deltimestamp.remove(); 

    var botDiv = document.createElement("div");
    botDiv.id = "botqueries";
    botDiv.innerHTML =`<p id="bot1">That's a nice pikup🤗. What would you like to<br> explore the below options🧐</p>`;
    chatArea.appendChild(botDiv);
    chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
    
    botTyping();

   setTimeout(function(){
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><button id="botbutton" onclick="sendHLifeMsg()">Hostel life🧑🏻‍🤝‍🧑🏻🛌🏻</button>
                     <button id="botbutton" onclick="sendHDetailsMsg()">Hostel Details🏫</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendHLifeMsg(){
  var admValue = "Hostel Life";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
 var admValue="Hostel life teaches  them a responsibility and they become self independent.Hostel life teaches many lessons,self dependence,self-reliance,descpline.Hostel life is a good platform for the student to become a good human being and skillful person.It improves mutual co-operation,sympathy,discipline,persnolity development."
 var div=document.createElement("div")
 div.id="botqueries",
 div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
 chatArea.appendChild(div);
 chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
}



function sendHDetailsMsg(){
  var admValue = "Hostel Details";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<br><div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
 var admValue="There are 5 blocks for boys and girls.Boys are staying in I1,I2 blocks.Girls are staying in K2,K3,K4.I2 for PUC and E1 boys,I1 for E2,E3,E4 students.K4 for PUC girls,K3 for E1,E2 girls,K2 for E3,E4 girls.Each block contains free wifi all over the block,Fresh drinking water.Each block contains separate wardens and care takers.Separate washing machines for P.H students and washing area for the students."
 var div=document.createElement("div")
 div.id="botqueries",
 div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
 chatArea.appendChild(div);
 chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
}



function sendMessMsg(){
  var admValue = "Mess";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)

  botTyping();

   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

      var botDiv = document.createElement("div");
      botDiv.id = "botqueries";
      botDiv.innerHTML =`<p id="bot1">That's a nice pikup🤗. What would you like to<br> explore the below options🧐</p>`;
      chatArea.appendChild(botDiv);
      chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();

   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 

  var botDiv = document.createElement("div");
  botDiv.id = "botqueries";
  botDiv.innerHTML =`<br><button id="botbutton" onclick="sendDiningMsg()">Dining Halls👩🏻‍🍳</button>
                     <button id="botbutton" onclick="sendMenuMsg()">Mess Menu📜</button>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}



function sendDiningMsg(){
  var admValue = "Dining Halls";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="Total 8 dining halls in campus (DH-1 TO DH-8).DH-1 to DH-6 for nuzvid campus,DH-7,DH-8 for srikakulam campus.Every month batch changes in a circle form.Breakfast,launch,supper serves as for the time table.Dining halls are good and neat."
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
 },1500);
}



function sendMenuMsg(){
  var admValue = "Mess Menu";
  var div = document.createElement("div");
  div.id="userqueries",
  div.innerHTML =`<div id="user1">${admValue}</div><img src=mee.PNG width="30px" height="30px" id="av1"></img>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
  //textToAudio(admValue)
   botTyping();
   setTimeout(function(){ 
     //remove the fake time delay
      var deltimestamp = document.getElementById("timestamp");
      deltimestamp.remove(); 
 //code
  var admValue="Check out the Mess time table."
  var div=document.createElement("div")
  div.id="botqueries",
  div.innerHTML = `<br><div id="bot1">${admValue}</div>`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;


  botTyping();
  setTimeout(function(){ 
    //remove the fake time delay
     var deltimestamp = document.getElementById("timestamp");
     deltimestamp.remove(); 
  var botDiv = document.createElement("div");
  //botDiv.id = "botqueries";
  botDiv.innerHTML = `<div id="pic"><img src ="mess.jpeg" width="300px" height ="300px" id="aa1"></div>`;
  chatArea.appendChild(botDiv);
  chatArea.scrollTop = chatArea.scrollHeight - chatArea.clientHeight;
},1500);
 },1500);
}







