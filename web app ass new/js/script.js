const openBtn = document.getElementById('openSidebarBtn');
const closeBtn = document.getElementById('closeSidebarBtn');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
