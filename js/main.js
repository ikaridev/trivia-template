function navigate(origen, next)
{
    nextFrame = document.getElementById(next);
    oldFrame = document.getElementById(origen);
    
    nextFrame.classList.remove('frame-wait');
    oldFrame.classList.add('frame-exit');
}