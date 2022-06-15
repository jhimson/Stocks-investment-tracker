window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('#overlay');
  const messageModalOverlay = document.querySelector('#messageModalOverlay');
  const messageCloseBtn = document.querySelector('#messageCloseBtn');
  
  // const delBtn = document.querySelector('#delete-btn');
  // const closeBtn = document.querySelector('#close-btn');
  const cancelBtn = document.querySelector('#cancelBtn');
  updateWatchlist = document.querySelector('#updateWatchlist');

  updateWatchlist.addEventListener('click', () => {
    overlay.classList.remove('hidden')
  })

  cancelBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
  })

  messageCloseBtn.addEventListener('click', () => {
    messageModalOverlay.classList.add('hidden')
    console.log('WTTT')
  })


});
