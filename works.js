function filterPortfolio(tag) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      const itemTags = item.getAttribute('data-tags');
      if (tag === 'all' || itemTags.includes(tag)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    const title = document.getElementById('portfolio-title');
    title.textContent = tag === 'all' ? '全部作品' : tag;

    const buttons = document.querySelectorAll('.tag-button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
  }


  
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

  //TOP按鈕
  document.addEventListener("DOMContentLoaded", function () {
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        // 計算滾動距離的百分比
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercentage > 20) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    // 平滑滾動回頂部
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});