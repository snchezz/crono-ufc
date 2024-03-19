// Variables globales para el cronómetro
var timerDisplay = document.getElementById('timer');
var roundStatus = document.getElementById('round-status');
var rounds = document.querySelectorAll('.round');
var roundIndex = 0;
var timeLeft = 300; // 5 minutos en segundos
var timerInterval;

// Función para actualizar el cronómetro
function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  // Agrega un 0 delante si los minutos o segundos son menores que 10
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timerDisplay.textContent = minutes + ':' + seconds;

  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00'; // El tiempo ha terminado
  }
}

// Función para iniciar el cronómetro
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

// Función para reiniciar el cronómetro a un tiempo específico en minutos
function restartTimer(minutes) {
  timeLeft = minutes * 60;
  updateTimer();
  startTimer();
}

// Función para pasar al siguiente round
function nextRound() {
  roundIndex++;
  if (roundIndex >= rounds.length) {
    roundIndex = 0;
  }
  updateRoundStatus();
}

// Función para reiniciar los rounds
function setRounds(numRounds) {
  // Actualizar el número de rounds
  rounds = document.querySelectorAll('.round');
  // Reiniciar el estado del round
  roundIndex = 0;
  // Actualizar la cantidad de rounds a mostrar
  adjustRoundBoxes(numRounds);
  // Actualizar el estado del round
  updateRoundStatus();
}


// Función para aumentar el tamaño de la fuente del cronómetro
function increaseTimerSize() {
  var currentSize = parseInt(window.getComputedStyle(timerDisplay).fontSize);
  timerDisplay.style.fontSize = (currentSize + 10) + 'px';
}

// Función para disminuir el tamaño de la fuente del cronómetro
function decreaseTimerSize() {
  var currentSize = parseInt(window.getComputedStyle(timerDisplay).fontSize);
  timerDisplay.style.fontSize = (currentSize - 10) + 'px';
}



// Función para actualizar el estado del round
function updateRoundStatus() {
  rounds.forEach((round, index) => {
    if (index <= roundIndex) {
      round.classList.add('filled');
    } else {
      round.classList.remove('filled');
    }
  });
  roundStatus.textContent = 'Round ' + (roundIndex + 1);
}

// Iniciar el cronómetro cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  updateTimer();
  updateRoundStatus();
  startTimer();
});


// Variables globales para los rounds
var rounds = document.querySelectorAll('.round');
var roundIndex = 0;

// Función para pasar al siguiente round
function nextRound() {
  roundIndex++;
  if (roundIndex >= rounds.length) {
    roundIndex = 0;
  }
  updateRoundStatus();
}

// Función para reiniciar los rounds
function resetRounds() {
  roundIndex = 0;
  updateRoundStatus();
}

// Función para actualizar el estado del round

  // Variables globales para los rounds
var rounds = document.querySelectorAll('.round');
var roundIndex = 0;

// Función para pasar al siguiente round
function nextRound() {
  roundIndex++;
  if (roundIndex >= rounds.length) {
    roundIndex = 0;
  }
  updateRoundStatus();
}

// Función para reiniciar los rounds
function resetRounds() {
  roundIndex = 0;
  updateRoundStatus();
}

// Función para actualizar el estado del round
function updateRoundStatus() {
  rounds.forEach((round, index) => {
    if (index < roundIndex) {
      round.textContent = ''; // Sin texto para los rounds pasados
      round.classList.add('filled');
    } else if (index === roundIndex) {
      round.textContent = 'R' + (index + 1); // Texto "R" seguido del número del round para el round activo
      round.classList.add('filled');
    } else {
      round.textContent = ''; // Sin texto para los rounds futuros
      round.classList.remove('filled');
    }
  });
}
function adjustRoundBoxes(numRounds) {
  rounds.forEach((round, index) => {
    if (index < numRounds) {
      round.style.display = 'block'; // Mostrar los cuadrados correspondientes al nuevo número de rounds
    } else {
      round.style.display = 'none'; // Ocultar los cuadrados sobrantes
    }
  });
}

// Función para establecer la cantidad de rounds
function setRoundsCount(count) {
  if (count === 3 || count === 5) {
    setRounds(count);
  }
}

// Iniciar el cronómetro cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  updateRoundStatus();
});



// Iniciar el cronómetro cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  updateRoundStatus();
});

// Función para aumentar el margen superior
function increaseMargin(selector) {
  var container = document.querySelector(selector);
  var currentMargin = parseInt(window.getComputedStyle(container).marginTop);
  container.style.marginTop = (currentMargin + 10) + 'px';
}

// Función para disminuir el margen superior
function decreaseMargin(selector) {
  var container = document.querySelector(selector);
  var currentMargin = parseInt(window.getComputedStyle(container).marginTop);
  container.style.marginTop = (currentMargin - 10) + 'px';
}

// Función para aumentar el tamaño de los rounds
function increaseRoundSize() {
  var currentSize = parseInt(window.getComputedStyle(document.querySelector('.round')).fontSize);
  var newSize = currentSize + 5;
  document.querySelectorAll('.round').forEach(round => {
      round.style.fontSize = newSize + 'px';
  });
}

// Función para disminuir el tamaño de los rounds
function decreaseRoundSize() {
  var currentSize = parseInt(window.getComputedStyle(document.querySelector('.round')).fontSize);
  var newSize = currentSize - 5;
  document.querySelectorAll('.round').forEach(round => {
      round.style.fontSize = newSize + 'px';
  });
}


// Función para aumentar el tamaño del bloque de los rounds
function increaseRoundBlockSize() {
    var currentSize = parseInt(window.getComputedStyle(document.querySelector('.round')).width);
    var newSize = currentSize + 10;
    document.querySelectorAll('.round').forEach(round => {
        round.style.width = newSize + 'px';
        round.style.height = newSize + 'px';
    });
}

// Función para disminuir el tamaño del bloque de los rounds
function decreaseRoundBlockSize() {
    var currentSize = parseInt(window.getComputedStyle(document.querySelector('.round')).width);
    var newSize = currentSize - 10;
    document.querySelectorAll('.round').forEach(round => {
        round.style.width = newSize + 'px';
        round.style.height = newSize + 'px';
    });
}
