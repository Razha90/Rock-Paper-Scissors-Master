// RULES FOR PLAYER
var bRulesOf = document.getElementById('byClose');
var bRulesOn = document.getElementsByClassName('play-rules');

bRulesOf.addEventListener('click', () => {
        document.getElementsByClassName('rules')[0].style.display = 'none';
        document.getElementsByClassName('black-screen')[0].style.display = 'none';
});
bRulesOn[0].addEventListener('click', () => {
    document.getElementsByClassName('rules')[0].style.display = 'block';
        document.getElementsByClassName('black-screen')[0].style.display = 'block';
});

// Select Card

const Valuegunting = document.getElementsByClassName('gunting')[0];
const Valuecyan = document.getElementsByClassName('cyan1')[0];
const Valuepaper = document.getElementsByClassName('paper1')[0];
const Valuecicak = document.getElementsByClassName('cicak1')[0];
const Valuerock = document.getElementsByClassName('rock1')[0];


const displayChose = document.getElementsByClassName('play')[0];
const displayBattle = document.getElementsByClassName('flex3')[0];
const displayBattle2 = document.getElementsByClassName('picked')[0];
const cardPlayerColor = document.getElementsByClassName('gambar')[0];
const cardPplayerIMG = document.querySelectorAll('.gambar img')[0];
const cardHouseColor = document.getElementsByClassName('house')[0];
const cardGouseIMG = document.querySelectorAll('.house img')[0];

var ValueOfPlayer;

function Battle(src, color) {
        displayChose.style.display = 'none';
        displayBattle.style.display = 'flex';
        displayBattle2.style.display = 'flex';
        cardPplayerIMG.src = src;
        cardPlayerColor.style.backgroundImage = color;
};

function House(src, color) {
        cardGouseIMG.src = src;
        cardHouseColor.style.backgroundImage = color;
};

Valuegunting.addEventListener('click', () => {
        Battle('./images/icon-scissors.svg', 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))');
        randomi();
        ValueOfPlayer = 1;
});

Valuecyan.addEventListener('click', () => {
        Battle('./images/icon-spock.svg', 'linear-gradient(hsl(189, 59%, 53%) , hsl(189, 58%, 57%))');
        randomi();
        ValueOfPlayer = 5;
});

Valuecicak.addEventListener('click', () => {
        Battle('./images/icon-lizard.svg', 'linear-gradient(hsl(261, 73%, 60%) , hsl(261, 72%, 63%))');
        randomi();
        ValueOfPlayer = 4;
});

Valuepaper.addEventListener('click', () => {
        Battle('./images/icon-paper.svg', 'linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))');
        randomi();
        ValueOfPlayer = 2;
});

Valuerock.addEventListener('click', () => {
        Battle('./images/icon-rock.svg', 'linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))');
        randomi();
        ValueOfPlayer = 3;
});


// Randomize House Picked 
function rock() {
        House('./images/icon-rock.svg', 'linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))');
};
function paper() {
        House('./images/icon-paper.svg', 'linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))');
};
function scissors() {
        House('./images/icon-scissors.svg', 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))');
};
function lizard() {
        House('./images/icon-lizard.svg', 'linear-gradient(hsl(261, 73%, 60%) , hsl(261, 72%, 63%))');
};
function cyan() {
        House('./images/icon-spock.svg', 'linear-gradient(hsl(189, 59%, 53%) , hsl(189, 58%, 57%))');
};


var ValueOfHosted;
function randomi() { 
        
        setTimeout(() => {
               var a = setInterval(() => {
                        rock();
                        ValueOfHosted = 3;
                }, 200);
                setTimeout(() => {
                        clearInterval(a);
                }, 5000);
        }, Math.floor(Math.random() * 250) + 1 );
        setTimeout(() => {
                var b = setInterval(() => {
                        paper();
                        ValueOfHosted = 2;
                }, 200);
                setTimeout(() => {
                        clearInterval(b);
                }, 5000);
        }, Math.floor(Math.random() * 250) + 1 );
        setTimeout(() => {
                var c = setInterval(() => {
                        scissors();
                        ValueOfHosted = 1;
                }, 200);
                setTimeout(() => {
                        clearInterval(c);
                }, 5000);
        }, Math.floor(Math.random() * 250) + 1 );
        setTimeout(() => {
                var d = setInterval(() => {
                        lizard();
                        ValueOfHosted = 4;
                }, 200);
                setTimeout(() => {
                        clearInterval(d);
                }, 5000);
        }, Math.floor(Math.random() * 250) + 1 );
        setTimeout(() => {
                var e = setInterval(() => {
                        cyan();
                        ValueOfHosted = 5;
                }, 200);
                setTimeout(() => {
                        clearInterval(e);
                }, 5000);
        }, Math.floor(Math.random() * 250) + 1 );
        setTimeout(() => {
               winning(); 
        }, 7000);
}

// Winning Checked
var scoring = 0;
function winning() {
        
        if (
                ValueOfPlayer == 1 && ValueOfHosted == 2 || 
                ValueOfPlayer == 1 && ValueOfHosted == 4 ||
                ValueOfPlayer == 2 && ValueOfHosted == 3 ||
                ValueOfPlayer == 2 && ValueOfHosted == 5 ||
                ValueOfPlayer == 3 && ValueOfHosted == 4 ||
                ValueOfPlayer == 3 && ValueOfHosted == 1 ||
                ValueOfPlayer == 4 && ValueOfHosted == 5 ||
                ValueOfPlayer == 4 && ValueOfHosted == 2 ||
                ValueOfPlayer == 5 && ValueOfHosted == 1 ||
                ValueOfPlayer == 5 && ValueOfHosted == 3) {
                        document.querySelectorAll('.winMessage h1')[0].innerHTML = 'YOU WIN';
                document.getElementsByClassName('winMessage')[0].style.display = 'block';
                        scoring++;
                        document.getElementById('score').innerHTML = scoring;
        }

        if (
                ValueOfPlayer == 1 && ValueOfHosted == 5 ||
                ValueOfPlayer == 1 && ValueOfHosted == 3 ||
                ValueOfPlayer == 2 && ValueOfHosted == 1 ||
                ValueOfPlayer == 2 && ValueOfHosted == 4 ||
                ValueOfPlayer == 3 && ValueOfHosted == 2 ||
                ValueOfPlayer == 3 && ValueOfHosted == 5 ||
                ValueOfPlayer == 4 && ValueOfHosted == 3 ||
                ValueOfPlayer == 4 && ValueOfHosted == 1 ||
                ValueOfPlayer == 5 && ValueOfHosted == 4 ||
                ValueOfPlayer == 5 && ValueOfHosted == 2
        ) {
                document.querySelectorAll('.winMessage h1')[0].innerHTML = 'YOU LOSE';
                document.getElementsByClassName('winMessage')[0].style.display = 'block';
 
        }

        if (
                ValueOfPlayer == 1 && ValueOfHosted == 1 ||
                ValueOfPlayer == 2 && ValueOfHosted == 2 ||
                ValueOfPlayer == 3 && ValueOfHosted == 3 ||
                ValueOfPlayer == 4 && ValueOfHosted == 4 ||
                ValueOfPlayer == 5 && ValueOfHosted == 5
        ) {
                document.querySelectorAll('.winMessage h1')[0].innerHTML = 'DRAW :)';
                document.getElementsByClassName('winMessage')[0].style.display = 'block';

        }
}

// Play Again 
document.getElementById('playAgain').addEventListener('click' ,() => {
        displayChose.style.display = 'block';
        displayBattle.style.display = 'none';
        displayBattle2.style.display = 'none';
        document.getElementsByClassName('winMessage')[0].style.display = 'none';
});

// Saved Score
document.getElementById('score').innerHTML = scoring;

