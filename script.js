const allInputs = document.querySelectorAll('input');
const input1 = document.getElementById('1');
const input2 = document.getElementById('2');
const input3 = document.getElementById('3');
const input4 = document.getElementById('4');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
let count1;
let count2;
let count3;
let count4;
let id;

allInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.select();
  });
});
allInputs.forEach((input) =>
  input.addEventListener('input', (event) => {
    if (input.value) {
      if (input1.value > 5) {
        input1.value = 0;
        input.select();
        return;
      } else {
        if (event.target.id === '1') {
          console.log('yes');
          event.target.nextElementSibling.focus();
        }
      }
      if (input2.value > 9) {
        input2.value = 0;
        input.select();
        return;
      } else {
        if (event.target.id === '2') {
          event.target.nextElementSibling.nextElementSibling.focus();
        }
      }
      if (input3.value > 5) {
        input3.value = 0;
        input.select();
        return;
      } else {
        if (event.target.id === '3') {
          event.target.nextElementSibling.focus();
        }
      }
      if (input4.value > 9) {
        input4.value = 0;
        input.select();
        return;
      }
    } else {
      input.value = 0;
    }

    startBtn.addEventListener('click', () => {
      if (
        input1.value == 0 &&
        input2.value == 0 &&
        input3.value == 0 &&
        input4.value == 0
      ) {
        return;
      }
      stopBtn.disabled = false;
      startBtn.disabled = true;
      stopBtn.style.cursor = 'pointer';
      startBtn.style.cursor = 'not-allowed';
      allInputs.forEach((input) => {
        input.readOnly = true;
        input.style.cursor = 'not-allowed';
        input.style.border = 'none';
        input.style.backgroundColor = 'lightgray';
      });
      count1 = input1.value;
      count2 = input2.value;
      count3 = input3.value;
      count4 = input4.value;

      clearInterval(id);
      id = setInterval(() => {
        if (count4 == 0) {
          count4 = 9;
          if (count3 == 0) {
            count3 = 5;
            if (count2 == 0) {
              count2 = 9;
              if (count1 == 0) {
                count1 = 5;
              }
              {
                count1--;
              }
            } else {
              count2--;
            }
          } else {
            count3--;
          }
        } else {
          count4--;
        }

        input1.value = count1;
        input2.value = count2;
        input3.value = count3;
        input4.value = count4;

        if (count1 == 0 && count2 == 0 && count3 == 0 && count4 == 0) {
          clearInterval(id);
          input1.value = 0;
          input2.value = 0;
          input3.value = 0;
          input4.value = 0;
          startBtn.disabled = false;
          startBtn.style.cursor = 'pointer';
          stopBtn.disabled = true;
          stopBtn.style.cursor = 'not-allowed';
          allInputs.forEach((input) => {
            input.readOnly = false;
            input.style.cursor = 'pointer';
            input.style.border = '1px solid black';
            input.style.backgroundColor = 'white';
          });
        }
      }, 1000);
    });

    stopBtn.addEventListener('click', () => {
      clearTimeout(id);
      stopBtn.disabled = true;
      startBtn.disabled = false;
      stopBtn.style.cursor = 'not-allowed';
      startBtn.style.cursor = 'pointer';
      input1.readOnly = true;
      input1.style.cursor = 'not-allowed';
      allInputs.forEach((input) => {
        input.readOnly = false;
        input.style.cursor = 'pointer';
        input.style.border = '1px solid black';
        input.style.backgroundColor = 'white';
      });
    });
    resetBtn.addEventListener('click', () => {
      input1.value = 0;
      input2.value = 0;
      input3.value = 0;
      input4.value = 0;
      clearInterval(id);
      startBtn.disabled = false;
      startBtn.style.cursor = 'pointer';
      stopBtn.disabled = true;
      stopBtn.style.cursor = 'not-allowed';
      allInputs.forEach((input) => {
        input.readOnly = false;
        input.style.cursor = 'pointer';
        input.style.border = '1px solid black';
        input.style.backgroundColor = 'white';
      });
    });
  })
);
