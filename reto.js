document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('answerForm');
  if (!form) return;

  const input = document.getElementById('answerInput');
  const message = document.getElementById('formMessage');
  const success = document.getElementById('successBox');

  // Defensive initialization: never show the success panel before validation.
  success.hidden = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const answer = input.value
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    if (answer === 'ORIGEN') {
      message.textContent = '';
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      success.hidden = true;
      message.textContent = 'Respuesta incorrecta. La señal aún no coincide. Revisa las pistas y vuelve a intentarlo.';
      input.focus();
      input.select();
    }
  });
});