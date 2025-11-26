// Danh sách link để random
const links = [
  'https://www.youtube.com/watch?v=DKykEh-XgIk',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'
];
const target = links[Math.floor(Math.random() * links.length)];

const AUTO_DELAY = 2500;

const statusText = document.getElementById('statusText');
const skipBtn = document.getElementById('skipBtn');

// Bấm nút là chuyển ngay
skipBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  window.location.href = target;
});

// Update hiệu ứng tải
setTimeout(()=>{
  statusText.textContent = 'Kết nối tới nguồn kiến thức...';
}, 600);

setTimeout(()=>{
  statusText.textContent = 'Tải mô hình (đã xong) — Chuyển hướng...';
}, 1400);

// Redirect tự động
setTimeout(()=>{
  window.location.replace(target);
}, AUTO_DELAY);

// Meta refresh dự phòng
(function addMeta(){
  const meta = document.createElement('meta');
  meta.httpEquiv = 'refresh';
  meta.content = Math.ceil(AUTO_DELAY/1000) + ';url=' + target;
  document.head.appendChild(meta);
})();
