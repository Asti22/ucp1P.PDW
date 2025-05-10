window.onload = function () {
    const popup = document.getElementById('popupPromo');
    if (popup) {
      popup.style.display = 'flex';
    }
  };
  
  function tutupPopup() {
    const popup = document.getElementById('popupPromo');
    if (popup) {
      popup.style.display = 'none';
    }
  }
  