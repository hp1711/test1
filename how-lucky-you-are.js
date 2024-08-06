//by Harsh Panchal

var luckynumber= Math.floor(Math.random()*20)
console.log(luckynumber)

var userguess=document.getElementById('guessing')
var checkbutton=document.getElementById('check')
var mainsection=document.getElementById('main')
var marker=document.getElementById('marker')
var message=document.getElementById('message')
var scoresection=document.getElementById('score')
var againbutton=document.getElementById('btn2')
var leftSection=document.getElementById('left')
var rightSection=document.getElementById('right')

var score=10

// function clicked(){
//     console.log('button clicked')
// }
// checkbutton.addEventListener('click',clicked)


function checkYourGuess(){
    //console.log(userguess.value)====> string 
    var guessedNumber=parseInt(userguess.value)//parseInt=number
    console.log(guessedNumber)

    if(guessedNumber>20 || guessedNumber<1){
    alert('Please guess number between 1 to 20 only!')
    userguess.value=''
    }else{

        if(guessedNumber==luckynumber){
        mainsection.style.backgroundColor='green'
        marker.innerText='😎'
        message.innerText='you wonn!!!!'
        leftSection.style.visibility='hidden'
        }
    else if(guessedNumber>luckynumber){
        mainsection.style.backgroundColor='red'
        marker.innerText='📈'
        message.innerText='your guess is too high...'
        score--
        scoresection.innerText=score;
        if(score==0){
            alert('please press again to resart the game')

            leftSection.style.visibility='hidden'
            
        }
    }
    else if(guessedNumber<luckynumber){
        mainsection.style.backgroundColor='red'
        marker.innerText='📉'
        message.innerText='your guess is too low...'
        score--
        scoresection.innerText=score;
        if(score==0){
            alert('please press again to resart the game')
            leftSection.style.visibility='hidden'

        }

        
    }
    }
    }
    checkbutton.addEventListener('click', () => {
    const message = checkYourGuess(Number(userguess.value));
    message.textContent = message;
    scoreProcess(message);
  });

    
    
againbutton.addEventListener('click',()=>{
        luckynumber=Math.floor(Math.random()*20);
        console.log(luckynumber)
        score=10
        scoresection.textContent=score

        mainsection.style.backgroundColor = '#222';


  message.textContent = 'Start Guessing...';
  leftSection.style.visibility='visible'
          
    userguess.value= '';
    marker.textContent='?'


    })
    



