    // dom obj
    var player_span = document.querySelector('#player-score');
    var com_span = document.querySelector('#com-score');
    var message = document.querySelector('.message');
    var player_score = 0;
    var com_score = 0;
    var player_choice, com_choice;
    var choices = ['r','p','s'];
    
    // com-choice 
    function get_com_choice() {
        return choices[Math.floor(Math.random()*3)];
    }

    // expand names
    function names(ch) {
        if(ch == 'r')
            return 'Rock';
        else if(ch =='p')
            return 'Paper';
        else if(ch == 's')
            return 'Scissors';
    }

    //game
    function game(player_choice) {
        com_choice = get_com_choice();
        var total = player_choice + com_choice;
        //console.log(player_choice);
        //console.log(com_choice);
        if(total[0] == total[1]) {
            message.innerHTML = `Nice guess !!!<br> It is a draw`;
        }
        else if(total == 'rs' || total == 'pr' || total == 'sp') {
            message.innerHTML = `Player Won !!!<br> Player's ${names(player_choice)} 
            beats computer's ${names(com_choice)}`;
            player_score++;
            player_span.innerHTML = player_score;
        }
        else if(total == 'rp' || total == 'sr' || total == 'ps') {
            message.innerHTML = `Computer Won !!!<br> Computer's ${names(com_choice)} 
            beats player's ${names(player_choice)}`;
            com_score++;
            com_span.innerHTML = com_score;
        }
    }

    document.querySelector('#rock').addEventListener("click", function(){
        player_choice = 'r';
        game(player_choice);
    });
    document.querySelector('#paper').addEventListener("click", function(){
        player_choice = 'p';
        game(player_choice);
    });
    document.querySelector('#scissor').addEventListener("click", function(){
        player_choice = 's';
        game(player_choice);
    });

    //restart
    document.querySelector('#restart').addEventListener('click', function(){
        message.innerHTML = `Click the buttons to start the game<br>Paper wins over Rock`;
        com_span.innerHTML = 0;
        player_span.innerHTML = 0;
    });
