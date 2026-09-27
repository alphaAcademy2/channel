// ALPHA ACADEMI - Website settings
// Replace the YouTube IDs below with your real video IDs.
// Example: https://www.youtube.com/watch?v=ABC123XYZ -> "ABC123XYZ"

const latestVideos = [
  {
    id: "VIDEO_ID_1",
    title: "Latest Lesson - Add Your YouTube Video Title",
    description: "Add your latest lesson details here."
  },
  {
    id: "VIDEO_ID_2",
    title: "New Class / Exam Preparation Video",
    description: "Add your video description here."
  },
  {
    id: "VIDEO_ID_3",
    title: "Important Study Tips for Students",
    description: "Add your video description here."
  }
];

const popularVideos = [
  {
    id: "VIDEO_ID_4",
    title: "Popular Lesson - Add Your Video Title",
    description: "A useful lesson from ALPHA ACADEMI."
  },
  {
    id: "VIDEO_ID_5",
    title: "Exam-Oriented Class",
    description: "Concept clarity and smart learning."
  },
  {
    id: "VIDEO_ID_6",
    title: "Easy Explanation for Students",
    description: "Learn difficult topics in a simple way."
  }
];

function thumbnailUrl(id) {
  if (!id || id.startsWith("VIDEO_ID_")) {
    return "https://placehold.co/1280x720/ede9fe/5b21b6?text=ALPHA+ACADEMI";
  }
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function videoUrl(id) {
  if (!id || id.startsWith("VIDEO_ID_")) {
    return "https://youtube.com/@alpha_academy_54/videos";
  }
  return `https://www.youtube.com/watch?v=${id}`;
}

function renderVideos(targetId, videos) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = videos.map(video => `
    <article class="video-card">
      <a class="thumbnail" href="${videoUrl(video.id)}" target="_blank" rel="noopener">
        <img src="${thumbnailUrl(video.id)}" alt="${escapeHtml(video.title)}" loading="lazy">
        <span class="play-badge">▶</span>
      </a>
      <div class="video-info">
        <h3>${escapeHtml(video.title)}</h3>
        <p>${escapeHtml(video.description)}</p>
      </div>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderVideos("latestVideos", latestVideos);
renderVideos("popularVideos", popularVideos);

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.boxShadow = window.scrollY > 10
    ? "0 8px 30px rgba(20, 12, 40, .07)"
    : "none";
});
