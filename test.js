const button = document.getElementById('button');

button.addEventListener('click', function() {
  let message = document.getElementById('message');
  if(event.target.id === 'button'){
    if(message.className == 'mes'){
    message.removeAttribute('class');
    message.setAttribute('class', 'mestwo')
    }
    else if(message.className == 'mestwo'){
    message.removeAttribute('class');
    message.setAttribute('class', 'mes')
    }
  }
})


const events = [
  {name: 'Interview at The Portal', date: 'Feb 23, 2017', startTime: '1500', endTime: '1630'},
  {name: 'Dinner with John', date: 'Feb 24, 2017', startTime: '1700', endTime: '1730'},
  {name: 'Conference', date: 'Feb 24, 2017', startTime: '1100', endTime: '1730'},
  {name: 'Lunch with Cindy', date: 'Feb 25, 2017', startTime: '1200', endTime: '1730'},
  {name: 'New Event1', date: 'Feb 25, 2017', startTime: '1400', endTime: '2030'},
  {name: 'New Event2', date: 'Feb 26, 2017', startTime: '1100', endTime: '1630'},
  {name: 'New Event3', date: 'Feb 26, 2017', startTime: '1400', endTime: '1630'},
  {name: 'New Event4', date: 'Feb 27, 2017', startTime: '900', endTime: '1930'}
]

const eventChecker = (events) => {
  for(i = 0; i < events.length; i++) {
    if(events[i].date == events[i+1].date){
      if (events[i].startTime <= events[i+1].startTime || events[i].endTime <= events[i+1].startTime){
        console.log(events[i].name, events[i+1].name)
      }
    }
  }
}
