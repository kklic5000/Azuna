function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }

  // 鼠标控制
  const ball = document.querySelector('.mouse-ball');
  const clickables = document.querySelectorAll('a, button, [class*="tag"], .gallery-image');

  document.addEventListener('mousemove', (e) => {
    ball.style.left = `${e.pageX}px`;
    ball.style.top = `${e.pageY}px`;
  });

  document.addEventListener('mouseleave', () => ball.style.opacity = '0');
  document.addEventListener('mouseenter', () => ball.style.opacity = '1');

  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ball.style.transform = 'translate(-50%, -50%) scale(4)';
      ball.style.backgroundColor = '#4fa89f';
      ball.style.mixBlendMode= 'multiply';
    });
    el.addEventListener('mouseleave', () => {
      ball.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // 点击外部关闭菜单
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
  function openLightbox(imgSrc, altText) {
const overlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImage');
lightboxImg.src = imgSrc;
lightboxImg.alt = altText;
overlay.style.display = 'flex';
}

function closeLightbox() {
document.getElementById('lightboxOverlay').style.display = 'none';
}

// 點擊事件綁定
document.querySelectorAll('.gallery-image img').forEach(img => {
img.addEventListener('click', () => {
  openLightbox(img.dataset.fullsize, img.alt);
});
});

// 點擊遮罩關閉
document.getElementById('lightboxOverlay').addEventListener('click', (e) => {
if(e.target === document.getElementById('lightboxOverlay')) {
  closeLightbox();
}
});

// ESC鍵關閉
document.addEventListener('keydown', (e) => {
if(e.key === 'Escape') {
  closeLightbox();
}
});