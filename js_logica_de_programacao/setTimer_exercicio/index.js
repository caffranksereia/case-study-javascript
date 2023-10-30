function crono(){
    const container_timer = document.querySelector('.timerZero');
    document.addEventListener('click',function(e){{
        const el = e.target;
        if(el.classList.contains('zero')){
            container_timer.classList.remove('pause');
            zeroInterval();
            container_timer.innerHTML = '00:00:00';
            sec = 0;
        }
        if(el.classList.contains('pause')){
            container_timer.classList.add('pause');
            pauseInterval();
        }
        if(el.classList.contains('start'))
        {
            container_timer.classList.remove('pause');
            clearInterval(timer);
            startInterval();
        }
    }})
    let sec = 0;
    let timer;


    function getTimeSeconds(sec){
        const data = new Date(sec*1000);
        return data.toLocaleTimeString('pt-br', {
            hour12:false,
            timeZone: 'GMT'
        })
    }
    function startInterval() 
    {
        timer  = setInterval(function() {
            sec ++;
            container_timer.innerHTML =getTimeSeconds(sec);
        },1000)
    }
    function pauseInterval()
    {
        clearInterval(timer);
    }

    function zeroInterval()
    {
        clearInterval(timer);
    }

}
crono();

