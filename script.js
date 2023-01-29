const btn = document.querySelector('.btn');

const text = document.querySelector('.more');

const about = document.querySelector('.upper');

about
    .addEventListener('click', e => {
      const current = e.target;

      const isReadMoreBtn = current.className.includes('btn');

      if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.more');

        currentText.classList.toggle('more--open');

        current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';

    });