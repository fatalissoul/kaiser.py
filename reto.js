
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('answerForm');
  if (!form) return;

  const input = document.getElementById('answerInput');
  const message = document.getElementById('formMessage');
  const success = document.getElementById('successBox');

  const WORKER_URL =
    'https://kaiserpy-validator.cl75023.workers.dev';

  success.hidden = true;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const answer = input.value
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();

    if (!answer) {
      message.textContent =
        'Escribe una respuesta antes de continuar.';
      input.focus();
      return;
    }

    const button = form.querySelector(
      'button[type="submit"], input[type="submit"]'
    );

    const originalText = button
      ? button.tagName === 'INPUT'
        ? button.value
        : button.textContent
      : null;

    if (button) {
      button.disabled = true;
      if (button.tagName === 'INPUT') {
        button.value = 'Verificando...';
      } else {
        button.textContent = 'Verificando...';
      }
    }

    message.textContent = '';

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
  'Content-Type': 'text/plain'
},
        body: JSON.stringify({ answer })
      });

      if (!response.ok) {
        throw new Error('Error del servidor');
      }

      const result = await response.json();

      if (result.correct === true) {
        message.textContent = '';
        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        success.hidden = true;
        message.textContent =
          'Respuesta incorrecta. La señal aún no coincide. Revisa las pistas y vuelve a intentarlo.';
        input.focus();
        input.select();
      }
    } catch (error) {
      console.error(error);
      message.textContent =
        'No fue posible validar la respuesta. Intenta nuevamente en unos momentos.';
    } finally {
      if (button) {
        button.disabled = false;
        if (button.tagName === 'INPUT') {
          button.value = originalText;
        } else {
          button.textContent = originalText;
        }
      }
    }
  });
});
