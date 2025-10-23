const videoList = document.getElementById('videoList');
const videoCount = document.getElementById('videoCount');

// قائمة الفيديوهات الموجودة مسبقًا في مجلد 'videos/'
const videos = [
    'videos/6.mp4',
      'videos/5.mp4',
        'videos/4.mp4',
          'videos/3.mp4',
            'videos/2.mp4',
            'videos/1.mp4',
  // أضف المزيد من الفيديوهات هنا
];

// إضافة كل الفيديوهات عند تحميل الصفحة
window.onload = () => {
  videos.forEach(src => addVideo(src));
  updateCount();
}

function addVideo(src) {
  const container = document.createElement('div');
  container.classList.add('video-container');

  const video = document.createElement('video');
  video.src = src;
  video.controls = false;
  video.preload = "metadata";

  video.addEventListener('click', () => {
    if(video.paused) video.play();
    else video.pause();
  });

  const controls = document.createElement('div');
  controls.classList.add('controls');

  const playBtn = document.createElement('button');
  playBtn.textContent = '▶️';
  playBtn.onclick = () => video.play();

  const pauseBtn = document.createElement('button');
  pauseBtn.textContent = '⏸️';
  pauseBtn.onclick = () => video.pause();

  const muteBtn = document.createElement('button');
  muteBtn.textContent = '🔇';
  muteBtn.onclick = () => video.muted = !video.muted;

  const rotateBtn = document.createElement('button');
  rotateBtn.textContent = '🔄';
  let rotation = 0;
  rotateBtn.onclick = () => {
    rotation = (rotation + 180) % 360;
    video.style.transform = `rotate(${rotation}deg)`;
  };

  const fullScreenBtn = document.createElement('button');
  fullScreenBtn.textContent = '⛶';
  fullScreenBtn.onclick = () => {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  controls.append(playBtn, pauseBtn, muteBtn, rotateBtn, fullScreenBtn);
  container.appendChild(video);
  container.appendChild(controls);
  videoList.appendChild(container);
}

function updateCount() {
  videoCount.textContent = `عدد الفيديوهات: ${videos.length}`;
}
