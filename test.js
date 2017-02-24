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
  {name: 'Interview at The Portal', date: 'Feb 23, 2017', startTime: 1500, endTime: 1630},
  {name: 'Dinner with John', date: 'Feb 24, 2017', startTime: 1700, endTime: 1730},
  {name: 'Conference', date: 'Feb 24, 2017', startTime: 1100, endTime: 1730},
  {name: 'Lunch with Cindy', date: 'Feb 25, 2017', startTime: 1200, endTime: 1730},
  {name: 'New Event1', date: 'Feb 25, 2017', startTime: 1400, endTime: 2030},
  {name: 'New Event2', date: 'Feb 26, 2017', startTime: 1100, endTime: 1630},
  {name: 'New Event3', date: 'Feb 26, 2017', startTime: 1630, endTime: 1830},
  {name: 'New Event4', date: 'Feb 27, 2017', startTime: 900, endTime: 1930},
]

const eventConflicts = (event1, event2) => {
  const $results = document.getElementById('results');

  const $eventOne = document.createElement('p');
  const $eventTwo = document.createElement('p');
  $eventOne.textContent = `${events[i].name}`
  $eventTwo.textContent = `${events[j].name}`

  $results.appendChild($eventOne);
  $results.appendChild($eventTwo);

  return $results
}

const eventChecker = (events) => {
  const object = []
  for(i = 0; i < events.length; i++){
    for(j = 0; j < events.length; j++) {
      if(events[i].date != events[j].date || events[i].name === events[j].name){
        console.log('nothing')
      }
      else if(events[i].startTime >= events[j].endTime){
        console.log('nothing')
      }
      else if(events[i].endTime <= events[j].startTime){
        console.log('nothing')
      }
      else if(events[i].endTime <= events[j].endTime && events[i].startTime >= events[j].startTime){
        eventConflicts(events[i], events[j])
        //console.log(events[i], events[j])
      }
      else if(events[i].startTime > events[j].startTime && events[i].endTime < events[j].endTime){
        eventConflicts(events[i], events[j])
        //console.log(events[i], events[j])
      }
      else if(events[i].startTime > events[j].startTime && events[i].endTime > events[j].endTime){
        eventConflicts(events[i], events[j])
        //console.log(events[i], events[j])
      }

    }
  }
}

eventChecker(events)
