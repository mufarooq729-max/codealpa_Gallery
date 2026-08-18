const photos = [
  ["nature", "Mountain silence", 1015, 900, 1200],
  ["city", "After-dark streets", 1076, 900, 650],
  ["portrait", "Golden hour", 1074, 900, 1150],
  ["food", "Morning ritual", 225, 900, 690],
  ["architecture", "Quiet geometry", 501, 900, 1180],
  ["nature", "Above the clouds", 1043, 900, 680],
  ["city", "Transit stories", 117, 900, 1080],
  ["portrait", "Soft focus", 64, 900, 1240],
  ["food", "Market colour", 365, 900, 760],
  ["architecture", "Glass & sky", 164, 900, 1050],
  ["nature", "Coastal air", 1044, 900, 650],
  ["city", "Rooftop view", 453, 900, 1100],
  ["architecture", "A study in steps", 1048, 900, 700],
  ["food", "Plated with care", 292, 900, 1180],
  ["nature", "Pine ridge", 1039, 900, 720],
  ["portrait", "Studio light", 1027, 900, 1100],
].map(([cat, title, id, w, h]) => ({
  cat,
  title,
  src: `https://picsum.photos/id/${id}/${w}/${h}`,
}));
const categories = ["all", ...new Set(photos.map((p) => p.cat))];
let active = "all",
  stream,
  shot = null;
const gallery = document.querySelector("#gallery"),
  filters = document.querySelector("#filters");
function drawFilters() {
  filters.innerHTML = categories
    .map(
      (c) =>
        `<button class="filter ${c === active ? "active" : ""}" data-filter="${c}">${c}</button>`,
    )
    .join("");
  filters.onclick = (e) => {
    if (!e.target.dataset.filter) return;
    active = e.target.dataset.filter;
    drawFilters();
    drawGallery();
  };
}
function drawGallery() {
  gallery.innerHTML = "";
  photos
    .filter((p) => active === "all" || p.cat === active)
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<img src="${p.src}" alt="${p.title}" loading="lazy"><span class="tag">${p.cat}</span><div class="caption"><small>${p.cat}</small><b>${p.title}</b></div>`;
      card.onclick = () => showPhoto(p);
      card.onmousemove = (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty(
          "--ry",
          `${(e.clientX - r.left - r.width / 2) / 18}deg`,
        );
        card.style.setProperty(
          "--rx",
          `${-(e.clientY - r.top - r.height / 2) / 18}deg`,
        );
      };
      card.onmouseleave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      };
      gallery.append(card);
    });
}
function showPhoto(p) {
  previewImage.src = p.src;
  previewImage.alt = p.title;
  previewTitle.textContent = `${p.title} · ${p.cat}`;
  preview.classList.add("open");
}
const actionBar = document.createElement("div");
actionBar.className = "photo-actions";
actionBar.innerHTML =
  '<button id="saveImage">Save</button><button id="shareImage">Share</button><button class="delete" id="deleteImage">Delete</button>';
preview.querySelector(".lightbox").append(actionBar);
const currentPhoto = () =>
  photos.find((p) => p.src === previewImage.src) ||
  photos.find((p) => previewImage.src.includes(p.src));
saveImage.onclick = async () => {
  const p = currentPhoto();
  if (!p) return;
  try {
    const r = await fetch(p.src);
    const b = await r.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = p.title.replace(/\\s+/g, "-") + ".jpg";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 100);
  } catch (e) {
    window.open(p.src, "_blank");
  }
};
shareImage.onclick = async () => {
  const p = currentPhoto();
  if (!p) return;
  try {
    if (navigator.share) {
      await navigator.share({ title: p.title, url: p.src });
    } else {
      await navigator.clipboard.writeText(p.src);
      alert("Photo link copied to clipboard.");
    }
  } catch (e) {}
};
deleteImage.onclick = () => {
  const p = currentPhoto();
  if (!p || !confirm("Delete this photo from the gallery?")) return;
  photos.splice(photos.indexOf(p), 1);
  preview.classList.remove("open");
  drawGallery();
};
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.querySelectorAll("button,a").forEach((el) => {
  el.onmouseenter = () => cursor.classList.add("big");
  el.onmouseleave = () => cursor.classList.remove("big");
});
document
  .querySelectorAll("[data-close]")
  .forEach((b) => (b.onclick = () => closeModal(b.dataset.close)));
function closeModal(id) {
  document.querySelector("#" + id).classList.remove("open");
  if (id === "camera" && stream) stream.getTracks().forEach((t) => t.stop());
}
openCamera.onclick = async () => {
  camera.classList.add("open");
  canvas.style.display = "none";
  video.style.display = "block";
  addPhoto.hidden = true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    video.srcObject = stream;
  } catch (e) {
    alert(
      "Camera access is needed to take a photo. Please allow it in your browser settings.",
    );
  }
};
capture.onclick = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  shot = canvas.toDataURL("image/jpeg", 0.92);
  video.style.display = "none";
  canvas.style.display = "block";
  addPhoto.hidden = false;
};
addPhoto.onclick = () => {
  photos.unshift({ cat: "portrait", title: "My new capture", src: shot });
  active = "all";
  drawFilters();
  drawGallery();
  closeModal("camera");
};
drawFilters();
drawGallery();
