document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('answerForm');
  if (!form) return;
  const input = document.getElementById('answerInput');
  const message = document.getElementById('formMessage');
  const success = document.getElementById('successBox');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = input.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    if (answer === 'ORIGEN') {
      message.textContent = '';
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      message.textContent = 'La señal aún no coincide. Revisa las pistas y vuelve a intentarlo.';
      input.focus();
      input.select();
    }
  });
});