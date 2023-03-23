document.querySelector('form').addEventListener('submit', function(event)
{
    console.log(event);
    event.preventDefault();

    //GUARDAR INFORMACIÓN.
    navigate('form', 'pre-trivia');
})