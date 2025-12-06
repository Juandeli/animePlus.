/* ========== DATA: 10 ANIMES ========== 
 Replace image URLs and episode URLs with your own files if needed.
 The first anime uses your local image path as requested.
*/
const animes = [
  {
    id: "naruto",
    title: "Naruto",
    description: "Naruto busca ser Hokage y proteger a sus amigos.",
    tags: "Acción, Shonen",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/naruto.jpg",
    episodes: [
      { title: "Capítulo 1", url: "https://dintezuvio.com/file/qf9x9ubzg7sl" },
      { title: "Capítulo 2", url: "videos/naruto_ep2.mp4" },
      { title: "Capítulo 3", url: "videos/naruto_ep3.mp4" },
      { title: "Capítulo 4", url: "videos/naruto_ep4.mp4" },
      { title: "Capítulo 5", url: "videos/naruto_ep5.mp4" }
    ]
  },
  {
    id: "onepiece",
    title: "One Piece",
    description: "Luffy y su tripulación buscan el tesoro legendario.",
    tags: "Aventura, Shonen",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/one-piece.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/tgb7qhjxgiuz"},{title:"Capítulo 2",url:"videos/onepiece_ep2.mp4"}]
  },
  {
    id: "aot",
    title: "Attack on Titan",
    description: "La humanidad lucha contra gigantes devoradores.",
    tags: "Acción, Drama",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/shingeki-no-kyojin.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/e1l7cz6poggp"},{title:"Capítulo 2",url:"videos/aot_ep2.mp4"}]
  },
  {
    id: "demonslayer",
    title: "Demon Slayer",
    description: "Tanjiro se convierte en cazador de demonios para salvar a su hermana.",
    tags: "Acción, Fantasía",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/kimetsu-no-yaiba.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/2cboj8kecxkt"},{title:"Capítulo 2",url:"videos/kimetsu_ep2.mp4"}]
  },
  {
    id: "jujutsu",
    title: "Jujutsu Kaisen",
    description: "Hechicería y maldiciones en batallas sobrenaturales.",
    tags: "Acción, Sobrenatural",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/jujutsu-kaisen-tv.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/8mp90nkjmal6"},{title:"Capítulo 2",url:"videos/jjk_ep2.mp4"}]
  },
  {
    id: "mha",
    title: "My Hero Academia",
    description: "Jóvenes entrenan para convertirse en héroes profesionales.",
    tags: "Acción, Shonen",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/boku-no-hero-academia.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/27fig3ayjgsw"},{title:"Capítulo 2",url:"videos/mha_ep2.mp4"}]
  },
  {
    id: "bluelock",
    title: "Blue Lock",
    description: "Competencia brutal por ser el mejor delantero de Japón.",
    tags: "Deportes, Competencia",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/blue-lock.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/wca36i637sw0"},{title:"Capítulo 2",url:"videos/bluelock_ep2.mp4"}]
  },
  {
    id: "chainsaw",
    title: "Chainsaw Man",
    description: "Un cazador recibe poderes de motosierra contra demonios.",
    tags: "Acción, Oscuro",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/chainsaw-man.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/e3fn2i780zz4"},{title:"Capítulo 2",url:"videos/chainsaw_ep2.mp4"}]
  },
  {
    id: "tokyoghoul",
    title: "Tokyo Ghoul",
    description: "Un joven debe adaptarse a ser mitad ghoul, mitad humano.",
    tags: "Drama, Horror",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/tokyo-ghoul.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/dzbsmwa6hv2c"},{title:"Capítulo 2",url:"videos/tokyoghoul_ep2.mp4"}]
  },
  {
    id: "fma",
    title: "Fullmetal Alchemist",
    description: "Dos hermanos alquimistas buscan recuperar lo perdido.",
    tags: "Aventura, Drama",
    image: "https://cdn.jkdesu.com/assets/images/animes/image/fullmetal-alchemist.jpg",
    episodes: [{title:"Capítulo 1",url:"https://dintezuvio.com/file/qygoc8eqtk5l"},{title:"Capítulo 2",url:"videos/fma_ep2.mp4"}]
  }
];

/* ========== RENDER GRID ========== */
const grid = document.getElementById('grid');
const searchResults = document.getElementById('search-results');

function createCard(anime) {
  const div = document.createElement('div');
  div.className = 'anime-card';
  div.dataset.id = anime.id;
  div.dataset.title = anime.title;
  div.innerHTML = `
    <img src="${anime.image}" alt="${anime.title}">
    <h3>${anime.title}</h3>
    <p style="display:none">${anime.description}</p>
  `;
  div.addEventListener('click', () => openAnime(anime.id));
  return div;
}

function renderGrid(list, container) {
  container.innerHTML = '';
  list.forEach(a => container.appendChild(createCard(a)));
}

renderGrid(animes, grid);

/* ========== OPEN ANIME INFO (single page) ========== */
const animeInfo = document.getElementById('animeInfo');
const animeBanner = document.getElementById('animeBanner');
const animeTitle = document.getElementById('animeTitle');
const animeDescription = document.getElementById('animeDescription');
const animeTags = document.getElementById('animeTags');
const episodeList = document.getElementById('episodeList');
const playerWrapper = document.getElementById('playerWrapper');
const playerArea = document.getElementById('playerArea');
const playerTitle = document.getElementById('playerTitle');

function openAnime(id) {
  const data = animes.find(a => a.id === id);
  if (!data) return;

  document.getElementById('home').scrollIntoView({behavior:'smooth'});
  document.getElementById('animes').classList.add('hidden');
  document.getElementById('search-results').style.display = 'none';
  animeInfo.classList.remove('hidden');

  animeBanner.src = data.image;
  animeTitle.textContent = data.title;
  animeDescription.textContent = data.description;
  animeTags.textContent = data.tags;

  episodeList.innerHTML = '';
  data.episodes.forEach((ep, idx) => {
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = `${ep.title}`;
   a.addEventListener('click', (e) => {
  e.preventDefault();
  loadEpisodeWithNavigation(data.id, idx);
    });
    episodeList.appendChild(a);
  });

  animeInfo.scrollIntoView({behavior:'smooth'});
}

/* ========== BACK BUTTON ========== */
document.getElementById('backBtn').addEventListener('click', () => {
  animeInfo.classList.add('hidden');
  document.getElementById('animes').classList.remove('hidden');
  playerWrapper.classList.add('hidden');
  playerArea.innerHTML = '';
});

/* ========== PLAYER ========== */
function openPlayer(title, url) {
  playerWrapper.classList.remove('hidden');
  playerTitle.textContent = title;
  playerArea.innerHTML = '';

  if (url.toLowerCase().endsWith('.mp4') || url.includes("http")) {
    const v = document.createElement('video');
    v.controls = true;
    v.autoplay = true;
    v.src = url;
    playerArea.appendChild(v);
  } else {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.setAttribute('allowfullscreen','');
    playerArea.appendChild(iframe);
  }

  playerWrapper.scrollIntoView({behavior:'smooth'});
}

/* =============================
   🚀 NAVEGACIÓN ENTRE CAPÍTULOS
   ============================= */
function loadEpisodeWithNavigation(animeId, episodeIndex) {
  const anime = animes.find(a => a.id === animeId);
  if (!anime) return;

  const episode = anime.episodes[episodeIndex];
  if (!episode) return;

  openPlayer(`${episode.title} — ${anime.title}`, episode.url);

  const nav = document.createElement("div");
  nav.className = "episode-navigation";

  if (episodeIndex > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "ep-nav-btn";
    prevBtn.textContent = "⟵ Capítulo Anterior";
    prevBtn.onclick = () => loadEpisodeWithNavigation(animeId, episodeIndex - 1);
    nav.appendChild(prevBtn);
  }

  if (episodeIndex < anime.episodes.length - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "ep-nav-btn highlight";
    nextBtn.textContent = "Capítulo Siguiente ⟶";
    nextBtn.onclick = () => loadEpisodeWithNavigation(animeId, episodeIndex + 1);
    nav.appendChild(nextBtn);
  }

  playerArea.appendChild(nav);
}

/* ========== SEARCH FIX ========== */
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();

    if (q === "") {
        searchResults.style.display = "none";
        grid.style.display = "grid";
        renderGrid(animes, grid);
        return;
    }

    const found = animes.filter(a =>
        a.title.toLowerCase().includes(q)
    );

    searchResults.innerHTML = "";
    renderGrid(found, searchResults);

    grid.style.display = "none";
    searchResults.style.display = "grid";
});

/* ========= NAVBAR HOME ========= */
const navInicio = document.getElementById('navInicio');
const homeLink = document.getElementById('homeLink');

navInicio.addEventListener('click', (e) => {
  e.preventDefault();
  animeInfo.classList.add('hidden');
  document.getElementById('animes').classList.remove('hidden');
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('home').scrollIntoView({behavior:'smooth'});
});

homeLink.addEventListener('click', () => {
  animeInfo.classList.add('hidden');
  document.getElementById('animes').classList.remove('hidden');
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('home').scrollIntoView({behavior:'smooth'});
});

