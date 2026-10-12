const dialog = document.querySelector('#screenshot-dialog');
let activeScreenshots = [];
let activeIndex = 0;
let activeTrigger;

function showScreenshot() {
  const screen = activeScreenshots[activeIndex];
  document.querySelector('#screenshot-title').textContent = screen.title;
  const full = document.querySelector('#screenshot-full');
  full.src = screen.file;
  full.alt = screen.alt;
  document.querySelector('#screenshot-caption').textContent = screen.caption;
  document.querySelector('#screenshot-position').textContent = `${activeIndex + 1} / ${activeScreenshots.length}`;
}

function changeScreenshot(direction) {
  if (!activeScreenshots.length) return;
  activeIndex = (activeIndex + direction + activeScreenshots.length) % activeScreenshots.length;
  showScreenshot();
}

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('#screenshot-previous').addEventListener('click', () => changeScreenshot(-1));
document.querySelector('#screenshot-next').addEventListener('click', () => changeScreenshot(1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    changeScreenshot(event.key === 'ArrowRight' ? 1 : -1);
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]')));
  activeTrigger?.focus();
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

export function createGallery(screenshots, { projectName, note, layout }) {
  const gallery = document.createElement('div');
  gallery.className = 'case-gallery';
  screenshots.forEach((screen, index) => {
    const figure = document.createElement('figure');
    figure.className = 'case-screen';
    const button = document.createElement('button');
    button.className = 'case-screen-button';
    button.type = 'button';
    button.setAttribute('aria-label', `Enlarge ${screen.title} screenshot`);
    button.setAttribute('aria-haspopup', 'dialog');
    const image = document.createElement('img');
    image.src = screen.file;
    image.alt = screen.alt;
    image.width = screen.width || 1236;
    image.height = screen.height || 2745;
    image.loading = 'lazy';
    button.append(image);
    button.addEventListener('click', () => {
      activeScreenshots = screenshots;
      activeIndex = index;
      activeTrigger = button;
      document.querySelector('#screenshot-project').textContent = `${projectName.toUpperCase()} / ${layout === 'landscape' ? 'PROJECT SCREENSHOT' : 'APP SCREENSHOT'}`;
      dialog.classList.toggle('landscape', layout === 'landscape');
      document.querySelector('#screenshot-note').textContent = note;
      showScreenshot();
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('dialog-open');
    });
    const caption = document.createElement('figcaption');
    const title = document.createElement('strong');
    title.textContent = screen.title;
    const description = document.createElement('span');
    description.textContent = screen.caption;
    caption.append(title, description);
    figure.append(button, caption);
    gallery.append(figure);
  });
  return gallery;
}
