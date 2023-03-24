function navigate(origen, next)
{
    nextFrame = document.getElementById(next);
    oldFrame = document.getElementById(origen);

    if(origen == 'trivia' && next == 'pre-trivia')
    {
        oldFrame.classList.add('frame-wait');
        nextFrame.classList.remove('frame-exit');
        return;
    }
    
    nextFrame.classList.remove('frame-wait');
    oldFrame.classList.add('frame-exit');
}

document.getElementById('start').addEventListener('click', ()=>{navigate('start', 'form')});
document.getElementById('back-button').addEventListener('click', ()=>{window.location.reload()});