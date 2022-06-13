window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('#overlay');
  const delBtn = document.querySelector('#delete-btn');
  const closeBtn = document.querySelector('#close-btn');
  const cancelBtn = document.querySelector('#cancelBtn');
  updateWatchlist = document.querySelector('#updateWatchlist');

  const toggleModal = () => {
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');
  };

  updateWatchlist.addEventListener('click', () => {
    overlay.classList.remove('hidden')
  })

  cancelBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
  })
//   delBtn.addEventListener('click', toggleModal);
//   closeBtn.addEventListener('click', toggleModal);
//   cancelBtn.addEventListener('click', toggleModal);
});
