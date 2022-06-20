window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('#overlay');
  // const messageModalOverlay = document.querySelector('#messageModalOverlay');
  // const messageCloseBtn = document.querySelector('#messageCloseBtn');

  // const delBtn = document.querySelector('#delete-btn');
  // const closeBtn = document.querySelector('#close-btn');
  const cancelBtn = document.querySelector('#cancelBtn');
  const updateWatchlist = document.querySelector('#updateWatchlist');

  // ! NAVBAR
  const navButtonsDiv = document.querySelector('#navButtons');
  const hamburger = document.querySelector('#hamburger');

  if (updateWatchlist) {
    updateWatchlist.addEventListener('click', () => {
      overlay.classList.remove('hidden');
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      overlay.classList.add('hidden');
    });
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navButtonsDiv.classList.toggle('hidden');
    });
  }

  // messageCloseBtn.addEventListener('click', () => {
  //   messageModalOverlay.classList.add('hidden')
  //   console.log('WTTT')
  // })
});
