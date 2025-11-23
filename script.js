document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const btn = document.getElementById('contactBtn');
  const span = document.querySelector('.close');
  if (btn && modal && span) {
    btn.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "flex";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
});
