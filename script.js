let round = 1;
let totalRounds = 5;
let timeLeft = 300; // 5 minutos en segundos
let timerInterval;
let fontSizeCounter = 0; // Contador para el tamaño del texto del round
let timerSizeCounter = 0; // Contador para el tamaño del cronómetro
let timerSize = 140; // Tamaño predeterminado del cronómetro
let roundSize = 30; // Tamaño predeterminado del texto del round

function resetRounds() {
  location.reload(); // Recargar la página para reiniciar los rounds
}

function increaseFontSize() {
  fontSizeCounter++;
  roundSize += 2; // Aumentar el tamaño del texto del round en 2px
  updateFontSize();
}

function decreaseFontSize() {
  fontSizeCounter--;
  roundSize -= 2; // Disminuir el tamaño del texto del round en 2px
  updateFontSize();
}

function updateFontSize() {
  const roundStatus = document.getElementById('round-status');
  roundStatus.style.fontSize = `${roundSize}px`;
  document.getElementById('round-size').textContent = `${roundSize}px`;
}

function increaseTimerSize() {
  timerSizeCounter++;
  timerSize += 10; // Aumentar el tamaño del cronómetro en 10px
  updateTimerSize();
}

function decreaseTimerSize() {
  timerSizeCounter--;
  timerSize -= 10; // Disminuir el tamaño del cronómetro en 10px
  updateTimerSize();
}

function updateTimerSize() {
  const timer = document.getElementById('timer');
  timer.style.fontSize = `${timerSize}px`;
  document.getElementById('timer-size').textContent = `${timerSize}px`;
}

// Resto del código JavaScript...


window.onload = function() {
  updateRoundStatus();
  updateTimerDisplay();

  // Iniciar el cronómetro cuando la página cargue
  timerInterval = setInterval(updateTimer, 1000);
};

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    // El tiempo ha terminado, podrías agregar aquí lo que necesites hacer al finalizar el tiempo
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function restartTimer(minutes) {
  clearInterval(timerInterval);
  timeLeft = minutes * 60;
  updateTimerDisplay();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateRoundStatus() {
  document.getElementById(`round${round}`).style.backgroundColor = '#d4b741';
  document.getElementById(`round${round}`).textContent = 'R' + round;
}

function nextRound() {
  if (round < totalRounds) {
    round++;
    updateRoundStatus();
    document.getElementById('round-status').textContent = 'Round ' + round;
  }
}
