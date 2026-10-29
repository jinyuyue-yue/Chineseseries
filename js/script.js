// ข้อมูลซีรีส์
const series = {
  changyue: {
    cn: '长月烬明', th: 'จันทราอัสดง', year: '2566', eps: '40', type: 'ย้อนยุค',
    synopsis: 'ในอนาคตอันมืดมน โลกเต็มไปด้วยซากศพและความวุ่นวายจากน้ำมือของ ถานไถจิ้น (รับบทโดย หลัวอวิ๋นซี) ผู้ที่จุติเป็นจอมมารไร้หัวใจและทำลายสำนักเซียนจนย่อยยับ',
    character: 'ถานไถจิ้น — จอมมารที่ไม่รู้จักความรัก แต่ค่อย ๆ เรียนรู้ที่จะรัก จนยอมแลกได้ทั้งชีวิต',
    look: 'งานภาพแฟนตาซีที่สวยทุกเฟรม โดยเฉพาะฉากแดนมารและชุดของหลีซูซู',
    song: '要不然我们就这样一万年 · 黄霄雲',
    sceneTitle: 'หลีซูซูพบถานไถจิ้นครั้งแรก',
    sceneText: 'ตั้งใจย้อนเวลามาเพื่อสังหาร แต่สายตาเย็นชาของตัวประกันหนุ่มคนนั้น กลับเป็นจุดเริ่มต้นของทุกอย่าง',
    channels: [
      { name: 'Netflix', url: 'https://www.netflix.com/title/81689795' },
      { name: 'Youku', url: 'https://youku.tv/' }
    ],
    related: ['sansheng', 'weiwei']
  },
  sansheng: {
    cn: '三生三世十里桃花', th: 'สามชาติสามภพป่าท้อสิบหลี่', cnSize: 58, thSize: 36, year: '2560', eps: '58', type: 'ย้อนยุค',
    synopsis: 'ไป๋เชี่ยน เทพธิดาแห่งชิงชิว ถูกผนึกพลังและความทรงจำ ลงมาใช้ชีวิตเป็นมนุษย์นามซู่ซู่ จนได้พบรักกับเย่หัว รัชทายาทแห่งสวรรค์ ความรักที่ต้องผ่านถึงสามชาติสามภพจึงเริ่มต้นขึ้น',
    character: 'เย่หัว — รัชทายาทแห่งสวรรค์ ภายนอกเย็นชา แต่รักเดียวใจเดียวมาตลอดสามชาติ',
    look: 'ป่าท้อสิบหลี่ที่ดอกท้อบานเต็มฟ้า และชุดขาวพลิ้ว ๆ ของไป๋เชี่ยน',
    song: '凉凉 · 杨宗纬 & 张碧晨',
    sceneTitle: 'ซู่ซู่พบเย่หัว',
    sceneText: 'หญิงสาวที่จำอดีตของตัวเองไม่ได้ ช่วยชายหนุ่มบาดเจ็บไว้ โดยไม่รู้เลยว่าเขาคือรัชทายาทแห่งสวรรค์',
    channels: [
      { name: 'WeTV', url: 'https://wetv.vip/th' },
      { name: 'Netflix', url: 'https://www.netflix.com/' }
    ],
    related: ['changyue', 'liuxing']
  },
  xinruan: {
    cn: '心软的神', th: 'ภพรักลิขิตสวรรค์', year: '2569', eps: '28', type: 'ย้อนยุค',
    synopsis: 'เยี่ยเจา เทพผู้เย็นชาแห่งห้วงลึก ยอมลงมาเกิดเป็นมนุษย์เพื่อความรัก ก่อนได้พบองค์หญิงฉู่ซีเหอผู้ซ่อนตัวตนอีกด้านไว้ ความรักร้อยปีของทั้งคู่จึงถูกทดสอบด้วยความแค้นและความลับ',
    character: 'เยี่ยเจา — เทพผู้เย็นชาและเคร่งครัด แต่ยอมสละทุกอย่างเพื่อคนที่รัก',
    look: 'ชุดองค์หญิงสง่างามของฉู่ซีเหอ ตัดกับบรรยากาศลึกลับของห้วงลึก',
    song: 'OST',
    sceneTitle: 'พบกันอีกครั้งหลังกลับชาติมาเกิด',
    sceneText: 'สองคนที่เคยรักกันเมื่อร้อยปีก่อน กลับมาพบกันในฐานะคู่ปรับ ทุกสายตาจึงมีทั้งความคุ้นเคยและความระแวง',
    channels: [
      { name: 'WeTV', url: 'https://wetv.vip/th' }
    ],
    related: ['yunzhiyu', 'xuwo']
  },
  yunzhiyu: {
    cn: '云之羽', th: 'เหนือเมฆาชะตาลิขิต', year: '2566', eps: '24', type: 'ย้อนยุค',
    synopsis: 'อวิ๋นเหวยซาน มือสังหารแห่งองค์กรอู๋เฟิง แฝงตัวเข้าตระกูลกงในฐานะว่าที่เจ้าสาว แต่ภารกิจกลับซับซ้อนขึ้นเมื่อได้พบกงจื่อหยวี่ คุณชายที่ต้องขึ้นเป็นผู้นำตระกูลอย่างไม่ทันตั้งตัว',
    character: 'กงจื่อหยวี่ — คุณชายที่ดูไม่เอาไหน แต่จริงใจ และเติบโตจนแบกรับทั้งตระกูลได้',
    look: 'ตระกูลกงท่ามกลางหุบเขาและสายหมอก กับชุดโทนเข้มลึกลับของเหล่ามือสังหาร',
    song: '云之羽 · 张杰',
    sceneTitle: 'ว่าที่เจ้าสาวเข้าตระกูลกง',
    sceneText: 'ภายใต้ชุดเจ้าสาวคือมือสังหารที่ถูกส่งมา ทุกก้าวของเธอจึงเต็มไปด้วยความลับ',
    channels: [
      { name: 'iQIYI', url: 'https://www.iq.com/' }
    ],
    related: ['xinruan', 'xuwo']
  },
  weiwei: {
    cn: '微微一笑很倾城', th: 'ยิ้มโลกละลาย', cnSize: 66, year: '2559', eps: '30', type: 'ปัจจุบัน',
    synopsis: 'เป้ยเวยเวย สาวคณะคอมพิวเตอร์ผู้เป็นเซียนเกมออนไลน์ ถูกสามีในเกมขอหย่า ก่อนจะได้รับคำขอแต่งงานจากเซียวไน่ เซียนเกมอันดับหนึ่ง ที่จริง ๆ แล้วคือรุ่นพี่สุดฮอตในมหาวิทยาลัยเดียวกัน',
    character: 'เซียวไน่ — รุ่นพี่อัจฉริยะที่ดูนิ่ง ๆ แต่ใส่ใจทุกรายละเอียดของเวยเวย',
    look: 'สลับไปมาระหว่างโลกจริงกับโลกในเกม ชุดจอมยุทธ์ในเกมสวยไม่แพ้ซีรีส์ย้อนยุค',
    song: '微微一笑很倾城 · 杨洋',
    sceneTitle: 'แต่งงานในเกม',
    sceneText: 'พิธีแต่งงานในโลกเกมที่ทำให้เขินทั้งที่เป็นแค่ตัวละคร ก่อนจะรู้ว่าอีกฝ่ายอยู่ใกล้กว่าที่คิด',
    channels: [
      { name: 'WeTV', url: 'https://wetv.vip/th' },
      { name: 'iQIYI', url: 'https://www.iq.com/' }
    ],
    related: ['sansheng', 'liuxing']
  },
  xuwo: {
    cn: '许我耀眼', th: 'เกมรักในเงาลวง', year: '2568', eps: '32', type: 'ปัจจุบัน',
    synopsis: 'สวี่เหยียน พิธีกรสาวที่ไต่เต้าจากเมืองเล็กจนประสบความสำเร็จ แต่งงานกับเสิ่นห่าวหมิง ทายาทตระกูลร่ำรวย ชีวิตคู่ที่ดูสมบูรณ์แบบกลับซ่อนรอยร้าว จนเธอต้องเลือกเดินออกมาเพื่อเป็นตัวของตัวเอง',
    character: 'สวี่เหยียน — นางเอกที่ทะเยอทะยาน ไม่รอให้ใครมาช่วย และกล้าเลือกชีวิตของตัวเอง',
    look: 'ลุคสาวทำงานและชุดออกงานหรู ๆ ของสวี่เหยียน',
    song: '许我耀眼',
    sceneTitle: 'สวี่เหยียนพบเสิ่นห่าวหมิง',
    sceneText: 'จุดเริ่มต้นของความสัมพันธ์ที่ดูเหมือนเทพนิยาย แต่ไม่ได้ง่ายอย่างที่ทุกคนเห็น',
    channels: [
      { name: 'WeTV', url: 'https://wetv.vip/th' }
    ],
    related: ['changyue', 'weiwei']
  },
  liuxing: {
    cn: '流星花园', th: 'รักใสใสหัวใจ 4 ดวง', year: '2561', eps: '49', type: 'ปัจจุบัน',
    synopsis: 'ต่งซานไช่ สาวธรรมดาจากครอบครัวฐานะไม่ดี เข้าเรียนที่มหาวิทยาลัยหมิงเต๋อ และกล้าลุกขึ้นสู้กับ F4 แก๊งหนุ่มรวยที่นำโดยเต้าหมิงซื่อ จากคู่กัดจึงค่อย ๆ กลายเป็นความรัก',
    character: 'เต้าหมิงซื่อ — หนุ่มรวยปากแข็ง ขี้โมโห แต่เมื่อรักแล้วก็รักหมดใจ',
    look: 'แฟชั่นหรู ๆ ของ F4 กับบรรยากาศมหาวิทยาลัยหมิงเต๋อ',
    song: '你要的爱 · 戴佩妮',
    sceneTitle: 'ซานไช่ปะทะ F4',
    sceneText: 'ความกล้าที่จะพูดต่อหน้า F4 ทำให้ชีวิตมหาวิทยาลัยธรรมดา ๆ ของเธอเปลี่ยนไปตลอดกาล',
    channels: [
      { name: 'Netflix', url: 'https://www.netflix.com/' },
      { name: 'Mango TV', url: 'https://w.mgtv.com/' }
    ],
    related: ['yunzhiyu', 'xuwo']
  }
};

// คำอธิบายซีรีส์ม้วนอื่น
const relatedText = {
  changyue: 'ย้อนยุค · ย้อนเวลาไปเปลี่ยนชะตาจอมมาร',
  sansheng: 'ย้อนยุค · รักข้ามสามชาติใต้ป่าท้อ',
  xinruan: 'ย้อนยุค · เทพผู้ยอมเป็นมนุษย์เพื่อรัก',
  yunzhiyu: 'ย้อนยุค · มือสังหารในคราบเจ้าสาว',
  weiwei: 'ปัจจุบัน · รักใส ๆ ในโลกเกม',
  xuwo: 'ปัจจุบัน · กล้าเลือกเป็นตัวเอง',
  liuxing: 'ปัจจุบัน · สาวธรรมดาปะทะ F4'
};

// เลื่อนขึ้นบนสุด
function toTop() {
  window.scrollTo(0, 0);
  try { document.documentElement.scrollIntoView({ block: 'start', behavior: 'instant' }); } catch (e) {}
}
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
toTop();
window.addEventListener('load', toTop);
window.addEventListener('pageshow', toTop);
document.addEventListener('click', (e) => {
  if (e.defaultPrevented) return;
  const link = e.target.closest && e.target.closest('a[href$=".html"], a[href*=".html?"]');
  if (link && !link.target) toTop();
});

// ปรับขนาดตามจอ
function fitScreen() {
  const z = Math.max(1, window.innerWidth / 1280);
  document.documentElement.style.setProperty('--z', z);
  document.body.style.zoom = z;
}
fitScreen();
window.addEventListener('resize', fitScreen);

// เมนู
const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = [...document.querySelectorAll('.nav a')];
const bead = document.querySelector('.nav-bead');
const activeLink = document.querySelector('.nav a.active') || navLinks[0];

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  if (header.classList.contains('open')) header.classList.remove('open');
});

menuBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});

header.style.setProperty('--accent', activeLink.dataset.color);

function beadTo(link, animate = true) {
  if (!bead || !link) return;
  bead.style.width = link.offsetWidth + 'px';
  bead.style.transform = `translateX(${link.offsetLeft}px)`;
  header.style.setProperty('--accent', link.dataset.color);
  navLinks.forEach((a) => a.classList.toggle('lit', a === link));
  if (animate) {
    bead.classList.remove('moving');
    void bead.offsetWidth;
    bead.classList.add('moving');
  }
}

if (bead) {
  bead.style.transition = 'none';
  beadTo(activeLink, false);
  requestAnimationFrame(() => (bead.style.transition = ''));
  navLinks.forEach((a) => a.addEventListener('mouseenter', () => beadTo(a)));
  document.querySelector('.nav').addEventListener('mouseleave', () => beadTo(activeLink));
  if (document.fonts) document.fonts.ready.then(() => beadTo(activeLink, false));
  window.addEventListener('resize', () => beadTo(activeLink, false));
  header.addEventListener('transitionend', () => beadTo(document.querySelector('.nav a.lit') || activeLink, false));
}

// เพลง
const bgm = document.querySelector('#bgm');
const musicBtn = document.querySelector('#music-btn');

if (bgm && musicBtn) {
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem('bgm') || '{}'); } catch (e) {}
  if (saved.time) bgm.currentTime = saved.time;
  bgm.volume = 0.5;

  function setIcon() {
    const on = !bgm.paused;
    musicBtn.classList.toggle('playing', on);
    musicBtn.querySelector('.music-icon').textContent = on ? '❚❚' : '▶';
  }

  function play() {
    bgm.play().then(setIcon).catch(setIcon);
  }

  const startEvents = ['pointerdown', 'touchstart', 'keydown'];
  function firstTouch(e) {
    if (e.target.closest && e.target.closest('#music-btn')) return;
    stopWaiting();
    if (!off && bgm.paused) play();
  }
  function stopWaiting() {
    startEvents.forEach((ev) => document.removeEventListener(ev, firstTouch));
  }

  let off = !!saved.off;

  musicBtn.addEventListener('click', () => {
    stopWaiting();
    if (bgm.paused) {
      off = false;
      play();
    } else {
      off = true;
      bgm.pause();
    }
  });

  bgm.addEventListener('play', setIcon);
  bgm.addEventListener('pause', setIcon);

  window.addEventListener('pagehide', () => {
    try {
      sessionStorage.setItem('bgm', JSON.stringify({ time: bgm.currentTime, off: off }));
    } catch (e) {}
  });

  setIcon();
  if (!off) {
    play();
    startEvents.forEach((ev) => document.addEventListener(ev, firstTouch));
  }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ตัวอักษรจีน
document.querySelectorAll('.big, .juan, .wo, .yi').forEach((el) => {
  const chars = [...el.textContent];
  el.textContent = '';
  chars.forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'ink';
    span.textContent = ch;
    span.style.animationDelay = 0.3 + i * 0.35 + 's';
    el.appendChild(span);
  });
});

// กลีบดอกตามเมาส์
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  let lastPetal = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastPetal < 70) return;
    lastPetal = now;
    const petal = document.createElement('span');
    petal.className = 'cursor-petal' + (Math.random() < 0.5 ? ' soft' : '');
    const z = parseFloat(document.body.style.zoom) || 1;
    petal.style.left = e.clientX / z + 'px';
    petal.style.top = e.clientY / z + 'px';
    petal.style.setProperty('--dx', (Math.random() * 50 - 30) + 'px');
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 1300);
  });
}

// ปรากฏตอนเลื่อน
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// พารัลแลกซ์
const parallaxItems = document.querySelectorAll('[data-speed]');
const heroScene = document.querySelector('.hero-scene');
const fadeItems = document.querySelectorAll('[data-fade]');

function parallax() {
  const y = window.scrollY;
  parallaxItems.forEach((el) => {
    el.style.transform = `translateY(${y * el.dataset.speed}px)`;
  });
  fadeItems.forEach((el) => {
    el.style.opacity = Math.max(0, 1 - y / el.dataset.fade);
  });
  if (heroScene) heroScene.style.setProperty('--fh', Math.min(340, 40 + y * 1.4) + 'px');
}

if (parallaxItems.length || fadeItems.length) {
  window.addEventListener('scroll', () => requestAnimationFrame(parallax));
  parallax();
}

// ดาวตก
const meteorBox = document.querySelector('.meteors');

if (meteorBox && !reduceMotion) {
  function shoot() {
    const m = document.createElement('span');
    m.className = 'meteor';
    m.style.left = 25 + Math.random() * 70 + '%';
    m.style.top = 4 + Math.random() * 30 + '%';
    m.style.setProperty('--a', 140 + Math.random() * 20 + 'deg');
    m.style.setProperty('--len', 110 + Math.random() * 110 + 'px');
    m.style.setProperty('--dist', 380 + Math.random() * 320 + 'px');
    m.style.setProperty('--dur', 0.9 + Math.random() * 0.7 + 's');
    meteorBox.appendChild(m);
    m.addEventListener('animationend', () => m.remove());
  }
  function loop() {
    shoot();
    if (Math.random() < 0.3) setTimeout(shoot, 250 + Math.random() * 400);
    setTimeout(loop, 2200 + Math.random() * 3800);
  }
  setTimeout(loop, 1200);
}

// ม่านลูกปัด
const curtain = document.querySelector('#curtain');
const pavLayer = document.querySelector('#pavilion-layer');

if (curtain && pavLayer) {
  const NS = 'http://www.w3.org/2000/svg';
  const X0 = 722, Y0 = 352, W = 276, H = 232;
  const COLS = 44, ROWS = 16;
  const gx = W / COLS, seg = H / (ROWS - 1);
  const STEP = 6.4;
  const palette = [['#E8452C', '#FFB98A'], ['#F59AAC', '#C3263E'], ['#FFE3B0', '#E8452C'], ['#C3263E', '#F59AAC']];

  const SWING = (2 * Math.PI / 2.4) ** 2;
  const DAMP = 0.85;
  const SPREAD = 1.6;
  const FOLLOW = 16;
  const REACH = 55;

  const strands = [];
  for (let c = 0; c < COLS; c++) {
    const pair = palette[(c * 3) % palette.length];
    const a = document.createElementNS(NS, 'path');
    const b = document.createElementNS(NS, 'path');
    [[a, pair[0], 0], [b, pair[1], STEP]].forEach(([el, color, off]) => {
      el.setAttribute('fill', 'none');
      el.setAttribute('stroke', color);
      el.setAttribute('stroke-width', '3.4');
      el.setAttribute('stroke-linecap', 'round');
      el.setAttribute('stroke-dasharray', `0 ${STEP * 2}`);
      el.setAttribute('stroke-dashoffset', off + (c % 2) * 3);
      curtain.appendChild(el);
    });
    strands.push({
      a, b,
      x: X0 + gx * (c + 0.5),
      th: 0, w: 0,
      ang: new Array(ROWS).fill(0),
      pts: []
    });
  }

  let px = -999, py = -999, vx = 0, vy = 0, lastT = 0;
  const hero = document.querySelector('.hero-home');
  hero.addEventListener('pointermove', (e) => {
    const r = pavLayer.getBoundingClientRect();
    const k = Math.max(r.width / 1920, r.height / 940);
    const nx = -320 + (e.clientX - r.left - (r.width - 1920 * k) / 2) / k;
    const ny = (e.clientY - r.top - (r.height - 940 * k)) / k;
    const now = performance.now();
    const dt = Math.max(8, now - lastT) / 1000;
    if (px > -999 && now - lastT < 120) {
      vx = vx * 0.5 + ((nx - px) / dt) * 0.5;
      vy = vy * 0.5 + ((ny - py) / dt) * 0.5;
    }
    px = nx; py = ny; lastT = now;
  });
  hero.addEventListener('pointerleave', () => { px = -999; vx = 0; vy = 0; });

  function step(time, dt) {
    if (performance.now() - lastT > 80) { vx *= 0.8; vy *= 0.8; }

    strands.forEach((st, c) => {
      let push = 0;
      if (py > Y0 - 10 && py < Y0 + H + 10) {
        const row = Math.max(0, Math.min(ROWS - 1, Math.round((py - Y0) / seg)));
        const sx = st.pts.length ? st.pts[row][0] : st.x;
        const d = Math.abs(sx - px);
        if (d < REACH) {
          const lever = Math.max(0.2, (py - Y0) / H);
          push = vx * 0.08 * (1 - d / REACH) ** 2 * lever * dt;
        }
      }
      const breeze = Math.sin(time * 0.6 + c * 0.25) * 0.012 + Math.sin(time * 0.37 - c * 0.11) * 0.008;
      const left = c > 0 ? strands[c - 1].th : st.th;
      const right = c < COLS - 1 ? strands[c + 1].th : st.th;
      const acc = -SWING * (st.th - breeze) - DAMP * st.w + SPREAD * (left + right - 2 * st.th);
      st.w += acc * dt + push;
      st.th = Math.max(-0.75, Math.min(0.75, st.th + st.w * dt));
    });

    const f = 1 - Math.exp(-FOLLOW * dt);
    strands.forEach((st) => {
      st.ang[0] = st.th;
      for (let r = 1; r < ROWS; r++) st.ang[r] += (st.ang[r - 1] - st.ang[r]) * f * (1 - r / (ROWS * 3));
    });
  }

  function draw() {
    strands.forEach((st) => {
      let x = st.x, y = Y0;
      const pts = [[x, y]];
      for (let r = 1; r < ROWS; r++) {
        x += Math.sin(st.ang[r]) * seg;
        y += Math.cos(st.ang[r]) * seg;
        pts.push([x, y]);
      }
      st.pts = pts;
      let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 1; i < pts.length - 1; i++) {
        const qx = (pts[i][0] + pts[i + 1][0]) / 2, qy = (pts[i][1] + pts[i + 1][1]) / 2;
        d += ` Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${qx.toFixed(1)} ${qy.toFixed(1)}`;
      }
      const last = pts[pts.length - 1];
      d += ` L${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
      st.a.setAttribute('d', d);
      st.b.setAttribute('d', d);
    });
  }

  let heroOnScreen = true;
  new IntersectionObserver(([en]) => (heroOnScreen = en.isIntersecting)).observe(hero);

  let acc = 0, prev = null, simTime = 0;
  const DT = 1 / 120;
  function tick(t) {
    if (!heroOnScreen) {
      prev = null;
      requestAnimationFrame(tick);
      return;
    }
    if (prev !== null) acc += Math.min(0.1, (t - prev) / 1000);
    prev = t;
    while (acc >= DT) {
      simTime += DT;
      step(simTime, DT);
      acc -= DT;
    }
    draw();
    if (!reduceMotion) requestAnimationFrame(tick);
  }
  draw();
  requestAnimationFrame(tick);
}

// กลีบดอกร่วง
document.querySelectorAll('.petals').forEach((box) => {
  const count = Number(box.dataset.count) || 12;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = Math.random() * 110 + '%';
    petal.style.animationDuration = 9 + Math.random() * 8 + 's';
    petal.style.animationDelay = -Math.random() * 14 + 's';
    petal.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    if (i % 2) petal.style.background = '#FAC9D1';
    box.appendChild(petal);
  }
});

// ดาวและหิ่งห้อย
function addDots(box, count, opt) {
  if (!box) return;
  for (let i = 0; i < count; i++) {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('class', opt.cls);
    dot.setAttribute('cx', opt.x[0] + Math.random() * (opt.x[1] - opt.x[0]));
    dot.setAttribute('cy', opt.y[0] + Math.random() * (opt.y[1] - opt.y[0]));
    dot.setAttribute('r', opt.r[0] + Math.random() * (opt.r[1] - opt.r[0]));
    dot.setAttribute('fill', opt.color);
    dot.style.animationDelay = -Math.random() * opt.delay + 's';
    if (opt.dur) dot.style.animationDuration = opt.dur[0] + Math.random() * (opt.dur[1] - opt.dur[0]) + 's';
    box.appendChild(dot);
  }
}

addDots(document.querySelector('.stars'), 26, {
  cls: 'star', color: '#FFE3D2', x: [440, 1260], y: [85, 280], r: [0.8, 1.6], delay: 4
});
addDots(document.querySelector('.flies'), 14, {
  cls: 'fly', color: '#FFE3B0', x: [180, 1080], y: [390, 620], r: [1.7, 3], delay: 10, dur: [8, 13.5]
});

// ตอนจบหน้า Story
document.querySelectorAll('.sky-lans').forEach((box) => {
  for (let i = 0; i < 16; i++) {
    const lan = document.createElement('span');
    const near = Math.random();
    lan.className = 'sky-lan';
    lan.style.left = 4 + Math.random() * 92 + '%';
    lan.style.animationDuration = 22 - near * 10 + Math.random() * 4 + 's';
    lan.style.animationDelay = -Math.random() * 22 + 's';
    lan.style.scale = 0.45 + near * 0.8;
    if (near < 0.4) lan.style.filter = 'blur(1.5px)';
    lan.style.opacity = 0.55 + near * 0.45;
    box.appendChild(lan);
  }
  for (let i = 0; i < 18; i++) {
    const em = document.createElement('span');
    em.className = 'ember';
    em.style.left = 10 + Math.random() * 80 + '%';
    em.style.animationDuration = 6 + Math.random() * 6 + 's';
    em.style.animationDelay = -Math.random() * 12 + 's';
    em.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
    box.appendChild(em);
  }
});

document.querySelectorAll('.ending-stars').forEach((box) => {
  for (let i = 0; i < 40; i++) {
    const st = document.createElement('i');
    st.style.left = Math.random() * 100 + '%';
    st.style.top = Math.random() * 60 + '%';
    st.style.animationDelay = -Math.random() * 3 + 's';
    st.style.scale = 0.6 + Math.random();
    box.appendChild(st);
  }
});

// ปุ่มปล่อยโคม
const releaseBtn = document.querySelector('#release');
const sealHang = document.querySelector('.seal-hang');

if (releaseBtn && sealHang) {
  releaseBtn.addEventListener('click', (e) => {
    if (reduceMotion) return;
    e.preventDefault();
    if (sealHang.classList.contains('fly')) return;
    sealHang.classList.add('fly');
    const box = document.querySelector('.ending .sky-lans');
    for (let i = 0; i < 10; i++) {
      const lan = document.createElement('span');
      lan.className = 'sky-lan burst';
      lan.style.left = 38 + Math.random() * 24 + '%';
      lan.style.bottom = 160 + Math.random() * 60 + 'px';
      lan.style.scale = 0.6 + Math.random() * 0.6;
      lan.style.setProperty('--dx', (Math.random() * 300 - 150) + 'px');
      lan.style.setProperty('--d', 1.8 + Math.random() * 1.4 + 's');
      lan.style.animationDelay = Math.random() * 0.5 + 's';
      box.appendChild(lan);
    }
    setTimeout(() => {
      toTop();
      window.location.href = releaseBtn.href;
    }, 1900);
  });
}

// เส้นเวลา
const tlItems = document.querySelectorAll('.tl-item');
const tlObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('lit', entry.isIntersecting);
  });
}, { rootMargin: '-35% 0px -35% 0px' });

tlItems.forEach((item) => tlObserver.observe(item));

// ม้วนภาพ
const board = document.querySelector('.board');

if (board) {
  const items = [...board.querySelectorAll('.stage .hang-item')];
  const glow = board.querySelector('.board-glow');
  const info = board.querySelector('.board-info');
  const pauseBtn = document.querySelector('#pause');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const SPEED = 0.22;

  let list = items;
  let pos = 0;
  let target = null;
  let cur = -1;
  let focus = false;
  let auto = true;
  let hover = false;

  const wrap = (v, n) => ((v % n) + n) % n;

  function offset(i) {
    const n = list.length;
    let d = i - pos;
    d = wrap(d + n / 2, n) - n / 2;
    return d;
  }

  function place() {
    const gap = Math.min(210, board.clientWidth / 5.2);
    const n = list.length;
    list.forEach((el, i) => {
      if (focus) return;
      const d = offset(i);
      const a = Math.abs(d);
      const near = Math.max(0, 1 - a);
      el.style.transform = `translateX(${d * gap}px) translateY(${a * 26}px) translateZ(${-a * 200}px) rotateY(${-d * 26}deg) scale(${1 + near * 0.2})`;
      el.style.opacity = Math.max(0, Math.min(1 - a * 0.2, (n / 2 - a) * 1.5, (3.6 - a) * 1.5));
      el.style.filter = `brightness(${1 - a * 0.16}) saturate(${1 - a * 0.15})`;
      el.style.zIndex = Math.round(50 - a * 10);
      el.style.pointerEvents = a > 3 ? 'none' : '';
    });
  }

  function setCenter(i) {
    if (i === cur) return;
    cur = i;
    const el = list[cur];
    list.forEach((x, k) => x.classList.toggle('is-center', k === cur));
    glow.style.backgroundColor = el.dataset.color;
    el.style.setProperty('--glow', el.dataset.color);

    if (!el.dataset.id) {
      const count = list.filter((x) => x.dataset.id && x.dataset.type === el.dataset.type).length;
      document.querySelector('#b-cn').textContent = el.dataset.cn;
      document.querySelector('#b-th').textContent = el.dataset.th;
      document.querySelector('#b-meta').textContent = `${count} เรื่อง`;
    } else {
      const s = series[el.dataset.id];
      document.querySelector('#b-cn').textContent = s.cn;
      document.querySelector('#b-th').textContent = s.th;
      document.querySelector('#b-meta').textContent = `${s.type} · ${s.year} · ${s.eps} ตอน`;
      document.querySelector('#f-cn').textContent = s.cn;
      document.querySelector('#f-th').textContent = s.th;
      document.querySelector('#f-meta').textContent = `${s.type} · ${s.year} · ${s.eps} ตอน`;
      document.querySelector('#f-syn').textContent = s.synopsis;
      document.querySelector('#f-link').href = `detail.html?id=${el.dataset.id}`;
    }
    info.classList.remove('swap');
    void info.offsetWidth;
    info.classList.add('swap');
  }

  function go(i) {
    const n = list.length;
    let d = wrap(i - pos + n / 2, n) - n / 2;
    target = pos + d;
  }

  function setFocus(on) {
    focus = on;
    board.classList.toggle('focus', on);
    target = null;
    pos = Math.round(pos);
    const el = list[wrap(pos, list.length)];
    list.forEach((x) => (x.style.transition = 'transform .8s cubic-bezier(.2, .8, .2, 1), opacity .5s'));
    if (on) {
      const small = board.clientWidth < 900;
      list.forEach((x) => { if (x !== el) x.style.opacity = 0; });
      el.style.transform = small
        ? 'translateY(0) scale(.9)'
        : `translateX(${-board.clientWidth * 0.2}px) translateY(20px) translateZ(80px) scale(1.25)`;
      el.style.opacity = 1;
      el.style.filter = 'none';
    } else {
      place();
      setTimeout(() => { if (!focus) list.forEach((x) => (x.style.transition = 'none')); }, 850);
    }
  }

  function build(filter) {
    items.forEach((el) => el.classList.toggle('hide', filter !== 'all' && el.dataset.type !== filter));
    list = items.filter((el) => !el.classList.contains('hide'));
    list.forEach((el) => (el.style.transition = 'none'));
    focus = false;
    board.classList.remove('focus');
    pos = 0;
    target = null;
    cur = -1;
  }

  let dragged = false;
  let openWhenArrive = -1;
  items.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (dragged) { e.preventDefault(); return; }
      if (focus) return;
      e.preventDefault();
      const i = list.indexOf(el);
      if (!el.dataset.id) { go(i); return; }
      if (Math.abs(offset(i)) < 0.15) { setFocus(true); return; }
      go(i);
      openWhenArrive = i;
    });
  });

  document.querySelector('#focus-close').addEventListener('click', () => { openWhenArrive = -1; setFocus(false); });
  document.querySelector('#prev').addEventListener('click', () => { if (focus) setFocus(false); go(Math.round(pos) - 1); });
  document.querySelector('#next').addEventListener('click', () => { if (focus) setFocus(false); go(Math.round(pos) + 1); });

  pauseBtn.addEventListener('click', () => {
    auto = !auto;
    pauseBtn.classList.toggle('on', !auto);
    pauseBtn.textContent = auto ? '❚❚' : '▶';
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      build(btn.dataset.filter);
    });
  });

  let boardOnScreen = false;
  new IntersectionObserver(([en]) => (boardOnScreen = en.isIntersecting)).observe(board);
  document.addEventListener('keydown', (e) => {
    if (!boardOnScreen) return;
    if (e.key === 'ArrowRight') { if (focus) setFocus(false); go(Math.round(pos) + 1); }
    if (e.key === 'ArrowLeft') { if (focus) setFocus(false); go(Math.round(pos) - 1); }
    if (e.key === 'Escape') setFocus(false);
  });

  let startX = null, startPos = 0;
  board.addEventListener('pointerdown', (e) => {
    if (focus) return;
    startX = e.clientX;
    startPos = pos;
    dragged = false;
  });
  board.addEventListener('pointermove', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 16) dragged = true;
    if (dragged) {
      target = null;
      pos = startPos - dx / Math.min(210, board.clientWidth / 5.2);
    }
  });
  const endDrag = () => {
    if (startX === null) return;
    startX = null;
    if (dragged) target = Math.round(pos);
    setTimeout(() => (dragged = false), 0);
  };
  board.addEventListener('pointerup', endDrag);
  board.addEventListener('pointercancel', endDrag);
  board.addEventListener('mouseenter', () => (hover = true));
  board.addEventListener('mouseleave', () => { hover = false; endDrag(); });

  let prev = null;
  function frame(t) {
    const dt = prev === null ? 0 : Math.min(0.05, (t - prev) / 1000);
    prev = t;
    if (!focus && boardOnScreen) {
      if (target !== null) {
        pos += (target - pos) * Math.min(1, dt * 6);
        if (Math.abs(target - pos) < 0.002) { pos = target; target = null; }
        if (openWhenArrive >= 0 && Math.abs(offset(openWhenArrive)) < 0.08) {
          openWhenArrive = -1;
          pos = Math.round(pos);
          target = null;
          place();
          setCenter(wrap(pos, list.length));
          setFocus(true);
        }
      } else if (auto && !hover && startX === null && !reduceMotion) {
        pos += SPEED * dt;
      }
      pos = wrap(pos, list.length);
      if (target !== null) {
        const n = list.length;
        target = pos + (wrap(target - pos + n / 2, n) - n / 2);
      }
      place();
      setCenter(wrap(Math.round(pos), list.length));
    }
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', place);
  build('all');
  boardOnScreen = true;
  place();
  setCenter(0);
  requestAnimationFrame(frame);
}

// คลี่ม้วน 3 อันดับ
const seriesColor = {
  changyue: '#E8452C', sansheng: '#F59AAC', xinruan: '#9B6BE0', yunzhiyu: '#4FB3A9',
  weiwei: '#F2846A', xuwo: '#E9B949', liuxing: '#6B9BEF'
};
const topCards = document.querySelectorAll('.top3 .poster-card');

if (topCards.length) {
  const box = document.createElement('div');
  box.className = 'unroll';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = `
    <div class="unroll-glow"></div>
    <button class="unroll-close" aria-label="ปิด">×</button>
    <div class="unroll-in">
      <div class="unroll-hang">
        <div class="string"></div>
        <div class="scrollcard">
          <div class="rod"></div>
          <div class="paper">
            <img src="" alt="">
            <p class="cn"></p>
            <p class="th"></p>
            <p class="meta"></p>
          </div>
          <div class="rod"></div>
        </div>
      </div>
      <div class="unroll-panel">
        <p class="cn"></p>
        <h2></h2>
        <p class="meta"></p>
        <p class="syn"></p>
        <a class="btn btn-cream" href="#">ดูรายละเอียด <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>`;
  document.body.appendChild(box);

  const $ = (sel) => box.querySelector(sel);

  function openScroll(id) {
    const s = series[id];
    const meta = `${s.type} · ${s.year} · ${s.eps} ตอน`;
    box.style.setProperty('--c', seriesColor[id]);
    $('.paper img').src = `images/poster-${id}.jpg`;
    $('.paper img').alt = 'โปสเตอร์ ' + s.th;
    $('.paper .cn').textContent = s.cn;
    $('.paper .th').textContent = s.th;
    $('.paper .meta').textContent = `${s.type} · [${s.year}]`;
    $('.unroll-panel .cn').textContent = s.cn;
    $('.unroll-panel h2').textContent = s.th;
    $('.unroll-panel .meta').textContent = meta;
    $('.unroll-panel .syn').textContent = s.synopsis;
    $('.unroll-panel .btn').href = `detail.html?id=${id}`;
    box.classList.remove('open');
    box.style.setProperty('--ph', $('.paper').offsetHeight + 'px');
    void box.offsetWidth;
    box.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeScroll() {
    box.classList.remove('open');
    document.documentElement.style.overflow = '';
  }

  topCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openScroll(new URL(card.href).searchParams.get('id'));
    });
  });
  $('.unroll-close').addEventListener('click', closeScroll);
  box.addEventListener('click', (e) => {
    if (e.target === box || e.target.classList.contains('unroll-in')) closeScroll();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box.classList.contains('open')) closeScroll();
  });
}

// หน้ารายละเอียด
const detail = document.querySelector('#detail');

if (detail) {
  const params = new URLSearchParams(window.location.search);
  const id = series[params.get('id')] ? params.get('id') : 'changyue';
  const s = series[id];

  document.title = s.th + ' · 瑾玥剧集合集';
  // ขนาดชื่อเรื่อง
  const title = document.querySelector('.dt-title');
  if (s.cnSize) title.style.setProperty('--cn', s.cnSize);
  if (s.thSize) title.style.setProperty('--th', s.thSize);

  document.querySelector('#d-cn').textContent = s.cn;
  document.querySelector('#d-th').textContent = s.th;
  document.querySelector('#d-poster').src = `images/poster-${id}.jpg`;
  document.querySelector('#d-poster').alt = 'โปสเตอร์ ' + s.th;
  document.querySelector('#d-year').textContent = s.year;
  document.querySelector('#d-eps').textContent = s.eps;
  document.querySelector('#d-type').textContent = s.type;
  document.querySelector('#d-character').textContent = s.character;
  document.querySelector('#d-look').textContent = s.look;
  document.querySelector('#d-song').textContent = s.song;
  document.querySelector('#d-scene-img').src = `images/scene-${id}.jpg`;
  document.querySelector('#d-scene-img').alt = s.sceneTitle;
  document.querySelector('#d-scene-title').textContent = s.sceneTitle;
  document.querySelector('#d-scene-text').textContent = s.sceneText;

  // ช่องทางการดู
  const channelList = document.querySelector('#d-channels');
  s.channels.forEach((ch) => {
    channelList.innerHTML += `
      <a class="channel" href="${ch.url}" target="_blank" rel="noopener">
        <span>▶</span>${ch.name}
      </a>`;
  });

  // สลับโคม
  const lanBtns = document.querySelectorAll('.lan-btn');
  const panels = document.querySelectorAll('[data-panel]');
  const sceneCn = document.querySelector('#scene-cn');
  const sceneTh = document.querySelector('#scene-th');

  lanBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      lanBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      panels.forEach((p) => {
        p.classList.toggle('is-hidden', p.dataset.panel !== btn.dataset.show);
        [p, ...p.children].forEach((el) => {
          el.style.animation = 'none';
          el.offsetHeight;
          el.style.animation = '';
        });
      });
      sceneCn.textContent = btn.dataset.cn;
      sceneTh.textContent = btn.dataset.th;
    });
  });

  // ซีรีส์ม้วนอื่น
  const relatedBox = document.querySelector('#d-related');
  s.related.forEach((key) => {
    const r = series[key];
    relatedBox.innerHTML += `
      <a class="shelfcard" href="detail.html?id=${key}">
        <img src="images/poster-${key}.jpg" alt="โปสเตอร์ ${r.th}">
        <span>
          <span class="cn">${r.cn}</span>
          <span class="th">${r.th}</span>
          <span class="desc">${relatedText[key]}</span>
        </span>
      </a>`;
  });
}
