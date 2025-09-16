const display = document.getElementById('display');

function append(nilai) {
  if (display.textContent === '0' || display.textContent === 'Error') {
    display.textContent = nilai;
  } else {
    display.textContent += nilai;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  let isiDisplay = display.textContent;
  display.textContent = isiDisplay.slice(0, -1);
  if (display.textContent === '') {
    display.textContent = '0';
  }
}

function calculate() {
  try {
    let ekspresi = display.textContent.replace(/%/g, '/100');
    display.textContent = eval(ekspresi);
  } catch {
    display.textContent = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/\d|[+\-*/%.]/.test(key)) {
    append(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c' || key === 'Escape') {
    clearDisplay();
  }
  
  alert("Welcome to calculator");
});
