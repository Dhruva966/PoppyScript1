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
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  top: 20px;
  right: 20px;
  width: auto;
  z-index: calc(10000000 * 1000000);
}

.alert-toast-container .alert-toast {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 5px;
  background: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 350px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
}

.alert-toast-container .alert-toast .icon {
  height: 24px;
  width: 24px;
  margin-right: 10px;
}

.alert-toast-container .alert-toast .alert-time-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ccc;
}

.alert-toast-container .alert-toast .alert-content {
  display: flex;
  flex-direction: column;
}

.alert-toast-container .alert-toast .alert-title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
}

.alert-toast-container .alert-toast .alert-message {
  font-size: 12px;
  color: #666;
}

@media (max-width: 991px) {
  .alert-toast-container {
    right: 10px;
    top: 10px;
  }

  .alert-toast-container .alert-toast {
    max-width: calc(100% - 20px);
    margin: 5px 0;
  }
}
`;

const headForAppendingAlertism = document.head || document.getElementsByTagName('head')[0];
const styleForAppendingAertism = document.createElement('style');
headForAppendingAlertism.appendChild(styleForAppendingAertism);
styleForAppendingAertism.type = 'text/css';
if (styleForAppendingAertism.styleSheet) {
  styleForAppendingAertism.styleSheet.cssText = AlertismCss;
} else {
  styleForAppendingAertism.appendChild(document.createTextNode(AlertismCss));
}
