var scoreCount = 0;
    var sec = 75;
    var scores = [];
    document.getElementById('timer').innerHTML= sec;
        function startTimer(){
            console.log('The quiz has started');
            var timer = setInterval(function(){
                sec--;
                document.getElementById('timer').innerHTML= sec;
                if (sec < 1) {
                    clearInterval(timer);
                    console.log("Time is up!");
                    document.getElementById('firstQuestion').style.display = 'none';
                    document.getElementById('secondQuestion').style.display = 'none';
                    document.getElementById('thirdQuestion').style.display = 'none';
                    document.getElementById('fourthQuestion').style.display = 'none';
                    document.getElementById('fifthQuestion').style.display = 'none';
                    document.getElementById('enterHighScore').style.display = 'block';
                    document.getElementById('mainNav').style.display = "none";
                    document.getElementById('answerHr').style.display = "none";
                    document.getElementById('wrongText').style.display = "none";
                    document.getElementById('highScores').style.display = "none";
                    document.getElementById('finalScore').innerHTML = scoreCount;
                }
                var fifthClass = document.getElementsByClassName('fifthAnswer');
        for (var i = 0; i < fifthClass.length; i++) {
            fifthClass[i].addEventListener("click", function(){
                clearInterval(timer);
             })
        };
            }, 1000);
        }

        document.getElementById('startQuizButton').onclick = function () {
                startTimer();
                document.getElementById('homePage').style.display  = "none";
                document.getElementById('firstQuestion').style.display = "block";
        };
        var firstClass = document.getElementsByClassName('firstAnswer');
        for (var i = 0; i < firstClass.length; i++) {
            firstClass[i].addEventListener("click", function(){ 
                if(this.innerHTML == "Sources"){
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('rightText').style.display = "block";
                    scoreCount += 5;
                    console.log(scoreCount);
                    setTimeout(function(){ 
                        document.getElementById('firstQuestion').style.display = 'none';
                        document.getElementById('secondQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('rightText').style.display = "none";
                    }, 1000);
                }
                else{
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('wrongText').style.display = "block";
                    sec -= 5;
                    document.getElementById('timer').innerHTML=sec;
                    setTimeout(function(){ 
                        document.getElementById('firstQuestion').style.display = 'none';
                        document.getElementById('secondQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('wrongText').style.display = "none";
                    }, 1000);
                }
            });
        }
        var secondClass = document.getElementsByClassName('secondAnswer');
        for (var i = 0; i < secondClass.length; i++) {
            secondClass[i].addEventListener("click", function(){ 
                if(this.innerHTML == "All of the above"){
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('rightText').style.display = "block";
                    scoreCount += 5;
                    console.log(scoreCount);
                    setTimeout(function(){ 
                        document.getElementById('secondQuestion').style.display = 'none';
                        document.getElementById('thirdQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('rightText').style.display = "none";
                    }, 1000);
                }
                else{
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('wrongText').style.display = "block";
                    sec -= 5;
                    document.getElementById('timer').innerHTML=sec;
                    setTimeout(function(){ 
                        document.getElementById('secondQuestion').style.display = 'none';
                        document.getElementById('thirdQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('wrongText').style.display = "none";
                    }, 1000);
                }
            });
        }
        var thirdClass = document.getElementsByClassName('thirdAnswer');
        for (var i = 0; i < thirdClass.length; i++) {
            thirdClass[i].addEventListener("click", function(){ 
                if(this.innerHTML == "Curly brackets"){
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('rightText').style.display = "block";
                    scoreCount += 5;
                    console.log(scoreCount);
                    setTimeout(function(){ 
                        document.getElementById('thirdQuestion').style.display = 'none';
                        document.getElementById('fourthQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('rightText').style.display = "none";
                    }, 1000);
                }
                else{
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('wrongText').style.display = "block";
                    sec -= 5;
                    document.getElementById('timer').innerHTML=sec;
                    setTimeout(function(){ 
                        document.getElementById('thirdQuestion').style.display = 'none';
                        document.getElementById('fourthQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('wrongText').style.display = "none";
                    }, 1000);
                }
            });
        }
        var fourthClass = document.getElementsByClassName('fourthAnswer');
        for (var i = 0; i < fourthClass.length; i++) {
            fourthClass[i].addEventListener("click", function(){ 
                if(this.innerHTML == "All of the above"){
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('rightText').style.display = "block";
                    scoreCount += 5;
                    console.log(scoreCount);
                    setTimeout(function(){ 
                        document.getElementById('fourthQuestion').style.display = 'none';
                        document.getElementById('fifthQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('rightText').style.display = "none";
                    }, 1000);
                }
                else{
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('wrongText').style.display = "block";
                    sec -= 5;
                    document.getElementById('timer').innerHTML=sec;
                    setTimeout(function(){ 
                        document.getElementById('fourthQuestion').style.display = 'none';
                        document.getElementById('fifthQuestion').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('wrongText').style.display = "none";
                    }, 1000);
                }
            });
        }
        var fifthClass = document.getElementsByClassName('fifthAnswer');
        for (var i = 0; i < fifthClass.length; i++) {
            fifthClass[i].addEventListener("click", function(){ 
                if(this.innerHTML == "Visual studio code"){
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('rightText').style.display = "block";
                    scoreCount += 5;
                    console.log(scoreCount);
                    setTimeout(function(){ 
                        document.getElementById('fifthQuestion').style.display = 'none';
                        document.getElementById('enterHighScore').style.display = 'block';
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('rightText').style.display = "none";
                    }, 1000);
                }
                else{
                    document.getElementById('answerHr').style.display = "block";
                    document.getElementById('wrongText').style.display = "block";
                    sec -= 5;
                    document.getElementById('timer').innerHTML=sec;
                    setTimeout(function(){ 
                        document.getElementById('fifthQuestion').style.display = 'none';
                        document.getElementById('enterHighScore').style.display = 'block';
                        document.getElementById('timerNav').style.display = "none";
                        document.getElementById('answerHr').style.display = "none";
                        document.getElementById('wrongText').style.display = "none";
                    }, 1000);
                }
                document.getElementById('finalScore').innerHTML = scoreCount;
            });
        }

        document.getElementById('submitInitials').addEventListener("click", function(){
            var initials = document.getElementById('enterInitials').value;
            if(initials.match(/[A-Z]{2,3}$/)){
                scores.push((initials + '-' + scoreCount).toString());
                var newArray = scores.concat(JSON.parse(localStorage.getItem('highScores')));
                localStorage.setItem('highScores', JSON.stringify(newArray));
                document.getElementById('homePage').style.display = "none";
                document.getElementById('firstQuestion').style.display = "none";
                document.getElementById('secondQuestion').style.display = "none";
                document.getElementById('thirdQuestion').style.display = "none";
                document.getElementById('fourthQuestion').style.display = "none";
                document.getElementById('fifthQuestion').style.display = "none";
                document.getElementById('mainNav').style.display = "none";
                setTimeout(function(){ 
                    var items = (localStorage.getItem("highScores"));
                    var allScores = JSON.parse(items);
            
                    console.log(allScores.length);
                    var ol = document.createElement('ol');
                    document.getElementById('highScoreList').appendChild(ol);
                    allScores.forEach(function (item, index) {
                        if(item != null){
                            let li = document.createElement('li');
                            ol.appendChild(li);

                            li.innerHTML += item;
                        }
                    });
                    document.getElementById('enterHighScore').style.display = "none";
                    document.getElementById('highScores').style.display = "block";
                }, 1000);
            }
            else{
                alert("Please enter two or three uppercase letters for your initials and try again.");
            }
        });

        document.getElementById('viewScores').addEventListener("click", function(){
            var newArray = scores.concat(JSON.parse(localStorage.getItem('highScores')));
            console.log(newArray);
            document.getElementById('homePage').style.display = "none";
            document.getElementById('firstQuestion').style.display = "none";
            document.getElementById('secondQuestion').style.display = "none";
            document.getElementById('thirdQuestion').style.display = "none";
            document.getElementById('fourthQuestion').style.display = "none";
            document.getElementById('fifthQuestion').style.display = "none";
            document.getElementById('mainNav').style.display = "none";
            document.getElementById('enterHighScore').style.display = "none";
            document.getElementById('highScores').style.display = "block";
            var items = (localStorage.getItem("highScores"));
                    var allScores = JSON.parse(items);
            
                    console.log(allScores.length);
                    var ol = document.createElement('ol');
                    document.getElementById('highScoreList').appendChild(ol);
                    allScores.forEach(function (item, index) {
                        if(item != null){
                            let li = document.createElement('li');
                            ol.appendChild(li);

                            li.innerHTML += item;
                        }
                    });
        });

        document.getElementById('clearScores').addEventListener("click", function(){
            var element = document.getElementById("highScoreList");
            element.innerHTML = '';
            localStorage.clear();
        })