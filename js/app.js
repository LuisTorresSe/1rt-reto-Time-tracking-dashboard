const btn_daily = document.getElementById('btn_daily');
const btn_weekly = document.getElementById('btn_weekly');
const btn_monthly = document.getElementById('btn_monthly');
const list_hours = document.querySelectorAll('.hours');
const prev_li_hours = document.querySelectorAll('.info_last_hours');
const btns_time = document.querySelectorAll('.btn_time');
const info_activities = document.querySelectorAll('.info_activities');

btn_daily.addEventListener('click',()=>{
    fetch('data.json')
        .then(res => res.ok? Promise.resolve(res): Promise.reject(res))
            .then(res => res.json())
                .then( res => {
                    let i = 0;
                    list_hours.forEach(e=>{
                        let current_hours = res[i].timeframes.daily.current;
                        let last_hours = res[i].timeframes.daily.previous;
                        if(current_hours == 1){
                            e.textContent = ` ${current_hours}hr`;
                        }else{
                             e.textContent = `${current_hours}hrs`;
                        }
                        if(last_hours == 1){
                            prev_li_hours[i].textContent = `Last Day - ${last_hours}hr`;
                        }else{
                            prev_li_hours[i].textContent = `Last Day - ${last_hours}hrs`;
                        }
                        i++;
                    })
                })
})

btn_weekly.addEventListener('click',()=>{
    fetch('data.json')
        .then(res => res.ok? Promise.resolve(res): Promise.reject(res))
            .then(res => res.json())
                .then( res => {
                    let i = 0;
                    list_hours.forEach(e=>{
                        let current_hours = res[i].timeframes.weekly.current;
                        let last_hours = res[i].timeframes.weekly.previous;
                        if(current_hours == 1){
                            e.textContent = ` ${current_hours}hr`;
                        }else{
                             e.textContent = `${current_hours}hrs`;
                        }
                        if(last_hours == 1){
                            prev_li_hours[i].textContent = `Last Week - ${last_hours}hr`;
                        }else{
                            prev_li_hours[i].textContent = `Last Week - ${last_hours}hrs`;
                        }
                        i++;
                    })
                })
})

btn_monthly.addEventListener('click',()=>{
    fetch('data.json')
        .then(res => res.ok? Promise.resolve(res): Promise.reject(res))
            .then(res => res.json())
                .then( res => {
                    let i = 0;
                    list_hours.forEach(e=>{
                        let current_hours = res[i].timeframes.monthly.current;
                        let last_hours = res[i].timeframes.monthly.previous;
                        if(current_hours == 1){
                            e.textContent = ` ${current_hours}hr`;
                        }else{
                             e.textContent = `${current_hours}hrs`;
                        }
                        if(last_hours == 1){
                            prev_li_hours[i].textContent = `Last Month - ${last_hours}hr`;
                        }else{
                            prev_li_hours[i].textContent = `Last Month - ${last_hours}hrs`;
                        }
                        i++;
                    })
                })
})


btns_time.forEach( e =>{
    e.addEventListener('click',()=>{
        e.classList.add('select')
        for (const id of btns_time) {
            if(e.attributes.id != id.attributes.id){
                id.classList.remove('select');
            }
        }
    })
    e.addEventListener('mouseenter', ()=>{
        e.classList.add('active')
    })
    
    e.addEventListener('mouseleave',()=>{
        e.classList.remove('active')

    })
})


info_activities.forEach(e=>{
    e.addEventListener('mouseenter',()=>{
        e.classList.add('active_box')
    })
    
    e.addEventListener('mouseleave',()=>{
        e.classList.remove('active_box')
    })
})
