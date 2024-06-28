// Ensure CSS is only declared once
if (typeof AlertismCss === 'undefined') {
  const AlertismCss = `
  @import url('https://fonts.googleapis.com/css2?family=Sofia+Sans+Semi+Condensed:ital,wght@0,1000;1,1000&display=swap');
  
  .alert-toast-container * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Sofia Sans Semi Condensed', sans-serif;
  }
  
  .alert-toast-container *::-webkit-scrollbar {
    display: none;
  }
  
  .alert-toast-container {
    position: fixed;
    z-index: 2147483647;
    top: 3rem;
    left: 3rem;
    right: 3rem;
    bottom: 16px;
    user-select: none;
    pointer-events: none;
  }
  
  @media (max-width: 640px) {
    .alert-toast-container {
      left: 1.5rem;
      right: 1.5rem;
    }
  }
  
  .alert-toast {
    background: transparent;
    padding: 0 0 16px 0;
    display: flex;
    justify-content: flex-end;
    animation: slideIn 0.3s ease-in-out;
  }
  
  .alert-toast-content {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 12px;
    background-color: rgb(229 231 235 / 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  
    border-radius: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    z-index: 50;
    color: rgb(47, 48, 60);
    box-sizing: border-box;
    font-family: 'Sofia Sans Semi Condensed', ui-sans-serif, system-ui, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    text-align: left;
  }
  
  @media (min-width: 640px) {
    .alert-toast-content {
      max-width: 350px;
    }
  }
  
  .toast-hide {
    animation: fadeOut 0.4s forwards;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0.8;
      transform: translateX(5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  `;
  
  const headForAppendingAlertism = document.head || document.getElementsByTagName('head')[0];
  const styleForAppendingAlertism = document.createElement('style');
  headForAppendingAlertism.appendChild(styleForAppendingAlertism);
  styleForAppendingAlertism.type = 'text/css';
  if (styleForAppendingAlertism.styleSheet) {
    styleForAppendingAlertism.styleSheet.cssText = AlertismCss;
  } else {
    styleForAppendingAlertism.appendChild(document.createTextNode(AlertismCss));
  }
}

// Define Toast function
function Toast(config) {
  const AlertismToastContainer = document.createElement('div');
  const AlertismToast = document.createElement('div');
  const AlertismToastGlassMorphism = document.createElement('div');
  const AlertismToastIcon = document.createElement('div');
  const AlertismToastText = document.createElement('h4');
  const AlertismToastTimerCountDown = document.createElement('div');
  
  AlertismToastContainer.className = 'alert-toast-container';
  AlertismToast.className = 'alert-toast';
  AlertismToastGlassMorphism.className = 'alert-glassmorphism alert-hide';
  AlertismToastIcon.classList.add('alert-hide');
  AlertismToastIcon.innerHTML = checkIcon.tickIcon;
  AlertismToastTimerCountDown.className = 'alert-time-line alert-hide';
  document.body.appendChild(AlertismToastContainer);
  AlertismToastText.innerText = config.text || 'Hello, I am a toast from Alertism V2.0.0';
  AlertismToast.style.background = config.background || '#333';
  AlertismToast.style.color = config.color || '#fff';
  
  if (config.position !== undefined) {
    AlertismToastContainer.classList.add('alert-' + config.position);
  } else {
    AlertismToastContainer.className = 'alert-toast-container';
  }
  
  if (config.enableIcon !== undefined) {
    if (config.enableIcon === true) {
      AlertismToastIcon.classList.remove('alert-hide');
    } else {
      AlertismToastIcon.classList.add('alert-hide');
    }
  } else {
    AlertismToastIcon.classList.add('alert-hide');
  }
  
  if (config.icon !== undefined) {
    if (config.icon.type !== undefined) {
      AlertismToastIcon.innerHTML = checkIcon[config.icon.type + 'Icon'];
    }
    if (config.icon.color !== undefined) {
      document.querySelectorAll('.alert-toast-container .alert-toast svg path').forEach((path) => {
        path.style.fill = config.icon.color;
      });
      if (config.icon.type === 'warning') {
        document.querySelector('.alert-toast-container .alert-toast svg circle').style.fill = config.icon.color;
      }
    }
  }
  
  if (config.theme !== undefined) {
    if (config.theme === 'glass') {
      AlertismToastGlassMorphism.classList.remove('alert-hide');
    } else {
      AlertismToastGlassMorphism.classList.add('alert-hide');
    }
    AlertismToast.classList.add('alert-' + config.theme);
  } else {
    AlertismToast.className = 'alert-toast';
  }
  
  if (config.showTimeLine !== undefined) {
    if (config.showTimeLine === true) {
      AlertismToastTimerCountDown.classList.remove('alert-hide');
      AlertismToastTimerCountDown.style.animation = 'closeTimeLine ' + (Number(config.timer || 1500) / 1000) + 's linear';
      AlertismToastTimerCountDown.onanimationend = () => {
        AlertismToastTimerCountDown.classList.add('alert-hide');
      };
    } else {
      AlertismToastTimerCountDown.classList.add('alert-hide');
    }
  } else {
    AlertismToastTimerCountDown.classList.add('alert-hide');
  }
  
  if (config.animation !== undefined) {
    AlertismToast.style.animation = config.animation + ' 0.5s, ' + config.animation + '-out 0.5s ' + (Number(config.timer || 1500) / 1000) + 's';
  } else {
    AlertismToast.style.animation = 'Bottom 0.5s, Bottom-out 0.5s ' + (Number(config.timer || 1500) / 1000) + 's';
  }
  setTimeout(() => {
    AlertismToastContainer.remove();
    if (config.onClose) {
      config.onClose();
    }
  }, Number(config.timer || 1500) + 500);
}
