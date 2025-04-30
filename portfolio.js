/* 
1. Variables
2. Functions (Arguments, returns)
3. Data Types
4. Conditional Statements ( Flow Control )
5. Loops
6. Pops Ups - Confirm, Prompt, alert
7. Error Handling - TRY CATCH..



alert("HI. you have successfully talked to me! To who? The BROWSER BRO!!!")


if (80 > 100) {
  alert("Farhan")
}

else if ( 30 > 20){
  alert("Pawan")
}

else if (1 >5) {
  alert("Ravi")
}
else {
  alert("None of the conditions were true!")
}

*/





/* let, const, var 
const userInput = 


const name_of_user = "Farhan"
alert("Hello "+ name_of_user)



const userName = prompt("Hello! What is your name: ")
alert("Welcome to my webiste, "+ userName)

*/

//1. User Defined functions - YOU define them and use as well
//2. In built functions - YOU DO NOT define them, you just use/call them.

//Function with or without argument and returns




/*
function getUserInput(){ // argument/parameters
  alert("This is the start of getUserInput Function");
  alert("I will now ask you your name in the next pop up, please let me know :)");
  const userName = prompt("Hello! What is your name: ");
  
  return userName; // can also have/not have a return
  
}
 const response_from_function = getUserInput();

const name="";
function displayCustomGreetings(name){ //argument/parameter
  alert("Thankyou for giving me your name!");
  alert("Welcome to my webiste, "+ name)
}

displayCustomGreetings(response_from_function);

*/

//1.Toggle Theme button. [DONE]
//2.Admin Login Button [DONE]
//3.For the right credentials, UserResponses Section should be visible. [DONE]
//4. Contact me Form should store responses on the backend. [DONE] 
//5. Display the user Responses when the right Credentials are entered. 

const themeToggleBtn = document.getElementById("toggle-theme");

themeToggleBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark-mode");
});

//Admin Login Button code starts here.
/*
const adminLoginBtn = document.getElementById("admin-login-btn");

adminLoginBtn.addEventListener("click", function(){
  //adminLoginBtn.style.display = "block"; //trying to change the sytle property of the button.
  // We are supposed to change the style property of the section which is on 131.
  
  document.getElementById("admin-login").style.display = "block";
});
*/
function showAdminSection(){
  document.getElementById("admin-login").style.display = "block";
}

//Admin login Credentials code

document.getElementById("admin-form").addEventListener('submit', function(e){
  //The default behaviour of SUBMIT event, is to expect a server to take a REQUEST and give a RESPONSE.
  //In our case, we are not hitting any Database/Server.
  //Therefore, we have to stop the default behavior of submit event
  //by using 
  e.preventDefault();
  
  const usernameJS = document.getElementById("username").value;
  const passwordJS = document.getElementById("password").value;
  
  const storedUsername = "admin"; //hardcoding-directly putting value ina var.
  const storedPassword = "password"; //Hardcoded Password - written directly.
  
  //Conditional statement to verify the creds
  //Why do we use double equal signs? == ??
  //Do not get scared if you see === sometimes! 
  //The difference between == === is that
  //Both will do comparisons, but 1 === "1" -> False, for 1 == "1" -> True
  // === sign will check for the TYPE as well.
  
  //LOGIC GATES?????
  //True AND False -> ??
  if (usernameJS == storedUsername && passwordJS == storedPassword ){
    alert("Welcome Admin");
    
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-section").style.display = "block";  
    
    displayStoredUserResponses();
    //FUNCTION CALL TO DISPLAY ALL THE USER RESPONSES.
  
  }
  else{
    alert("Invalid Credentials, please try again!");
  }
   
});

//Saving Contact me Form Responses

document.getElementById("contact-form").addEventListener('submit', function(e){
   e.preventDefault();
  
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;
  
  //Store these values in the local Database - LocalStorage
  
  //JSON?
  // It is a format that is widely and extensively used in APIs/ For backend and frontend communication
  
  //You need to prepare a format that you will send from the frontend to the backend
  //Why?
  //So that you have consistency in the data for all the responses.
  // Date() will give you a datetime DATATYPE, to convert that into a string we use toISOString()
  
  const response = { nameValue, emailValue, messageValue, date: new Date().toISOString() };


// We will create a LIST to store all of the responses from the frontend.
//You can think of this LIST as you DATABASE.

//When frontend sends the data to backend, it does that in JSON format. 
// We need to then change that JSON into a string to store into our Database( responses list right now )
//JSON.parse will help you convert JSON to String. 

  // Here we are trying to get the DummyData into DummyData Javascript Variable if it exists already.
  //if not then just create an empty list. 
const DummyDatabase = JSON.parse(localStorage.getItem('DummyDatabase')) || [ ];

//Response is the collection of 4 things, name, email, message and datetime.
//You will get a response object when a user clicks on the submit button on the contact form. 

//Responses is the LIST(Dummy Database) in which you will store all of those response Objects.

//Where do you push the response? Into a Database. 
//That is why we are doing 
DummyDatabase.push(response); 

//Until this point responses LIST is only in our CODEBASE,
//We need to send the LIST to localStorage.
  
  //1. Your app will try to load (using getItem()) the DummyDatabase into your codebase javascript variable.
  //2. The user responses if any, will be pushed into the javascript variable list.
  //3. Then from the list to DummyDatabase back again using setItem()  

localStorage.setItem("DummyDatabase", JSON.stringify(DummyDatabase));

alert('Thank you for your message, I will get in touch with you ASAP!');

this.reset();
  
});

//Display all the responses sent by users
//inside the already created div block in HTML. - user-responses.

function displayStoredUserResponses(){
  //fetch the user responses from the dummy database
  //write appropriate code to display on the UI.
  
  const responseContainer = document.getElementById("user-responses");
  const DummyDatabase = JSON.parse(localStorage.getItem('DummyDatabase')) || [ ];
  
  responseContainer.innerHTML = '';
  
  
  //Extracts the responses from Dummy Database.
  // For loop to run through the dummy database and get the responses.
  
  DummyDatabase.forEach(response=>{
    const responseElement = document.createElement('div');
    //this is not single quote, it is a backtick(found on the left of 1)
    responseElement.innerHTML = ` 
    <p> Name: ${response.nameValue} </p>
    <p> Email: ${response.emailValue} </p>
    <p> Message: ${response.messageValue} </p>
    <p> Date: ${response.date} </p>
    <hr>
    `
    responseContainer.append(responseElement);
  });
}

/*var datecheck = new Date();
console.log(datecheck);
console.log(typeof(datecheck));

var stringdate = datecheck.toISOString();
console.log(stringdate);
console.log(typeof(stringdate));


let exampleList = [ ]; 

console.log(exampleList);

exampleList.push("Farhan");

console.log(exampleList);

exampleList.push(3000);

console.log(exampleList);

//LISTNAME.push(WHATEVER YOU WANT TO PUSH)
*/