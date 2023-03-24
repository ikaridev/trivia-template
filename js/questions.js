var questions = {
    history : [
        {
            quest: "¿En qué año se firmó la independecia?",
            a: 1800,
            b: 1810,
            c: 1946,
            d: 1816,
            answer: "d"
        }
    ],
    science : [
        {
            quest: "Si mezclamos agua y aceite en un vaso, ¿Cómo se vería?",
            a: "Agua arriba, aceite abajo",
            b: "El agua y el aceite se mezclan uniformemente",
            c: "Aceite arriba, agua abajo",
            answer: "c"
        }
    ],
    entertainment : [
        {
            quest: "¿Cuál es el color del Teletubie llamado Tinky Winky?",
            a: "Violeta",
            b: "Verde",
            c: "Amarillo",
            d: "Rojo",
            e: "Marrón",
            answer: "a"
        }
    ],
}

let questCount = 0; //Contará cada vez que participemos de responder.
let maxQuests = 3; //Límite de cuantas veces participamos antes de terminar.
var points = 0;

let readyTouch = false;

Array.from(
    document.getElementById('pre-trivia').getElementsByClassName('option-button')
    ).forEach(button => {
        button.addEventListener('click', ()=>{
            
            let category = questions[button.getAttribute('category')];
            let max = category.length - 1;
            let randomNum = Math.floor(Math.random() * (max + 1));

            setupTrivia(category[randomNum]);
        });
})


// Se encarga de establecer la pregunta y los botones para responder.

function setupTrivia(selectedQuestion)
{
    let question = Object.assign({}, selectedQuestion);

    document.getElementById('pre-trivia').querySelector('.counter').innerHTML = "Preguntas: "+ (++questCount) +" de "+maxQuests;
    let trivia = document.getElementById('trivia');
    
    //Quitamos las propiedades que no sirvan para generar los botones
    trivia.innerHTML = "";
    trivia.innerHTML += "<h2 class='quest'>"+question.quest+"</h2>";
    delete(question.quest);

    let answer = question.answer;
    delete(question.answer);

    //Generamos los botones

    for (const key in question)
    {
        let button = '';
        if (key == answer) 
        {
            button = "<button class='option-button' isCorrect>"+question[key]+"</button>";
        }else
        {
            
            button = "<button class='option-button'>"+question[key]+"</button>";
        }

        trivia.innerHTML += button;
    }

    let buttons = trivia.getElementsByClassName('option-button')
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', ()=>
        {
            if (!readyTouch) return;
            else readyTouch = false;

            if (button.getAttribute('isCorrect') != undefined) {
                button.classList.add('correct');
                points++;
                
            }else{
                button.classList.add('incorrect');
                setTimeout(()=>{
                    trivia.querySelector('[iscorrect]').classList.add('correct');
                },200);
            }

            setTimeout(()=>{
                if(questCount!=maxQuests)
                {
                    navigate('trivia', 'pre-trivia')
                }
                else
                {
                    navigate('trivia', 'endgame')
                }
            },1500);

        })
    });
    
    setTimeout(()=>
    {
        navigate('pre-trivia', 'trivia');
        setTimeout(()=>{readyTouch = true}, 350);
    }, 250);
}