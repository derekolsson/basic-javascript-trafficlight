/*

state = 0: red
state = 1: yellow
state = 2: green

*/

// Modelo / estado
var state = {
  hour: 12,
  minute: 59,
  second: 58,
  display: 'digital'
}

var viewport = document.getElementById("viewport");
var selector = document.getElementById("selector");

state.display = selector.options[selector.selectedIndex].value;

selector.addEventListener("change", function(){
  state.display = selector.options[selector.selectedIndex].value;
  viewport.innerHTML = render(state);
});

var timer = setInterval(incrementor, 1000);
function incrementor(){
  state.second++;
  if (state.second >= 60){
    state.second = 0;
    state.minute++;
    if (state.minute >= 60){
      state.minute = 0;
      state.hour++;
      if (state.hour >=13){
        state.hour = 1;
      }
    }
  }
  viewport.innerHTML = render(state);
}
function twoDigits(number){
  return number >= 10 ? number : "0" + number.toString();
}

function render(state){
  var html = "";

  html += '<div class="clock-container">';

  if(state.display === 'digital'){
    var hours=twoDigits(state.hour);
    var minutes=twoDigits(state.minute);
    var seconds=twoDigits(state.second);
    html += '<div class="digital">';
    html += ''+hours+':'+minutes+':'+seconds;
    html += '</div>';
  }

  else{
    html += '<div class="analog">';
    html += '<div id="hourHand" class="hand hour-hand section-'+(state.hour * 5)+'">';
    html += '<div class="spacing"></div><div class="marker"></div><div class="spacing2"></div></div>';
    html += '<div id="minuteHand" class="hand minute-hand section-'+state.minute+'">';
    html += '<div class="spacing"></div><div class="marker"></div><div class="spacing2"></div></div>';
    html += '<div id="secondHand" class="hand second-hand section-'+state.second+'">';
    html += '<div class="spacing"></div><div class="marker"></div><div class="spacing2"></div></div>';
    html += '<div class="hour-label hour-1"><div class="number">1</div></div>';
    html += '<div class="hour-label hour-2"><div class="number">2</div></div>';
    html += '<div class="hour-label hour-3"><div class="number">3</div></div>';
    html += '<div class="hour-label hour-4"><div class="number">4</div></div>';
    html += '<div class="hour-label hour-5"><div class="number">5</div></div>';
    html += '<div class="hour-label hour-6"><div class="number">6</div></div>';
    html += '<div class="hour-label hour-7"><div class="number">7</div></div>';
    html += '<div class="hour-label hour-8"><div class="number">8</div></div>';
    html += '<div class="hour-label hour-9"><div class="number">9</div></div>';
    html += '<div class="hour-label hour-10"><div class="number">10</div></div>';
    html += '<div class="hour-label hour-11"><div class="number">11</div></div>';
    html += '<div class="hour-label hour-12"><div class="number">12</div></div>';


  }


  html += '</div>';



  return html;
}

viewport.innerHTML = render(state);
