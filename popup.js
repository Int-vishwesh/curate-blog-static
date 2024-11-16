document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const trigger = document.querySelector('.register-link'); // Ensure this matches your trigger

  // Show popup when the register link is clicked
  if (trigger) {
      trigger.addEventListener('click', (e) => {
          e.preventDefault();
          if (popup) {
              popup.style.display = 'flex'; // Show the popup
          }
      });
  }

  // Close popup when clicking outside the popup
  popup.addEventListener('click', (e) => {
      if (e.target === popup) {
          popup.style.display = 'none'; // Hide the popup
      }
  });
});
