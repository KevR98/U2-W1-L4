const animation = () => {
  const parole = document.querySelectorAll('.parole i');
  const parola1 = parole[0];
  parola1.addEventListener('click', () => {
    parola1.classList.add('parola1');
  });
};

animation();
