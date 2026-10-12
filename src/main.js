import { profile, projects, skills, skinSafeCaseStudy } from './content.js';
import { renderCaseStudy } from './case-study.js';
import { createGallery } from './gallery.js';

for (const element of document.querySelectorAll('[data-profile]')) {
  const value = profile[element.dataset.profile];
  if (value) element.textContent = value;
}
for (const element of document.querySelectorAll('[data-link]')) {
  const key = element.dataset.link;
  element.href = key === 'email' ? `mailto:${profile.email}` : profile[key];
}
document.querySelector('#year').textContent = new Date().getFullYear();

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const caseDialog = document.querySelector('#case-study-dialog');
let activeProjectButton;

const previews = {
  database: `<div class="preview-label">ADBMS / ACTUAL PROJECT SCREEN</div><img class="database-card-screen" src="./assets/database/dashboard.jpeg" alt="" width="1206" height="789" loading="lazy" /><div class="database-preview-caption"><strong>Hardware Shop</strong><span>SQL &amp; business intelligence</span></div>`,
  dolk: `<div class="preview-label">DO.LK / ACTUAL APP SCREENS</div><div class="dolk-card-screens"><img src="./assets/dolk/home.png" alt="" width="500" height="1052" loading="lazy" /><img src="./assets/dolk/service-packages.png" alt="" width="499" height="1003" loading="lazy" /></div><div class="dolk-preview-caption"><strong>Do.lk</strong><span>Freelance marketplace</span></div>`,
  skinsafe: `<div class="preview-label">SKINSAFE / ACTUAL APP SCREENS</div><div class="skinsafe-card-screens"><img src="./assets/skinsafe/home.png" alt="" width="1236" height="2745" loading="lazy" /><img src="./assets/skinsafe/scan.png" alt="" width="1236" height="2745" loading="lazy" /></div><div class="skinsafe-preview-caption"><strong>SkinSafe</strong><span>Flutter · On-device AI</span></div>`,
  marketplace: `<div class="preview-label">DO.LK / INTERFACE CONCEPT</div><div class="phone"><div class="phone-camera"></div><div class="phone-content"><div class="phone-brand">do<span>.lk</span> <span class="phone-avatar">P</span></div><small>Good help is closer than you think.</small><strong>Find your<br />local expert.</strong><div class="phone-search">⌕ &nbsp; What do you need?</div><div class="phone-categories"><span>⌘<small>Tech</small></span><span>⌂<small>Home</small></span><span>✳<small>Creative</small></span></div><div class="provider"><span class="provider-avatar">↗</span><span>Skills around you<small>Discover local services</small></span></div></div></div><div class="preview-annotation">Connecting local talent<span>↗</span></div>`,
  luxury: `<div class="preview-label">LUXURY WEAR / INTERFACE CONCEPT</div><div class="shop-window"><div class="shop-navigation"><strong>LUXURY.</strong><span>COLLECTION &nbsp; ABOUT &nbsp; BAG (0)</span></div><div class="shop-body"><div><small>THE EVERYDAY COLLECTION</small><strong>A little<br />more refined.</strong><span class="shop-cta">EXPLORE COLLECTION ↗</span></div><div class="fashion-art"><div class="shirt"></div></div></div><div class="shop-footer">CONSIDERED PIECES. TIMELESS STYLE.</div></div><span class="preview-watermark">L.</span>`,
  research: `<div class="preview-label">SKIN LESION / RESEARCH EXPLORATION</div><div class="research-visual"><div class="research-orbit orbit-one"></div><div class="research-orbit orbit-two"></div><div class="research-core">✳</div><span class="research-node node-one"></span><span class="research-node node-two"></span><span class="research-node node-three"></span><div class="research-tag">CNN <span>→</span> CLASSIFICATION</div></div><div class="research-caption"><span>Curiosity meets computation.</span><small>FINAL-YEAR RESEARCH</small></div>`,
  cloth: `<div class="preview-label">ACLOTH / INTERFACE CONCEPT</div><div class="cloth-window"><div class="cloth-nav"><strong>a<span>cloth</span></strong><span>Shop &nbsp; Collections &nbsp; ⌕</span></div><div class="cloth-banner"><span>Made for<br /><strong>your everyday.</strong></span><span class="cloth-flower">✳</span></div><div class="cloth-products"><div><span class="mini-shirt shirt-one"></span><small>THE ESSENTIAL</small></div><div><span class="mini-shirt shirt-two"></span><small>THE EVERYDAY</small></div><div><span class="mini-shirt shirt-three"></span><small>THE CLASSIC</small></div></div></div>`,
};

function renderProjects(filter = 'All') {
  grid.replaceChildren();
  const visible = projects.filter(project => filter === 'All' || (project.categories || [project.category]).includes(filter));
  for (const project of visible) {
    const article = document.createElement('article');
    article.className = 'project-card';
    const preview = document.createElement('div');
    preview.className = `project-preview ${project.visual}`;
    preview.setAttribute('aria-hidden', 'true');
    preview.innerHTML = previews[project.visual];
    const content = document.createElement('div');
    content.className = 'project-content';
    const category = document.createElement('p');
    category.className = 'project-category';
    category.textContent = `${project.number} / ${project.status}`;
    const heading = document.createElement('h3');
    const button = document.createElement('button');
    button.className = 'project-title';
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.textContent = project.name;
    const arrow = document.createElement('span');
    arrow.textContent = '↗';
    arrow.className = 'project-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    button.append(arrow);
    button.addEventListener('click', () => openProject(project, button));
    heading.append(button);
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    const tags = createTags(project.stack);
    content.append(category, heading, description, tags);
    if (project.caseStudy || project.screenshots) {
      const detailsButton = document.createElement('button');
      detailsButton.type = 'button';
      detailsButton.className = 'project-case-link text-link';
      detailsButton.setAttribute('aria-haspopup', 'dialog');
      detailsButton.textContent = project.screenshots ? `View ${project.screenshots.length} ${project.screenshotLabel || 'app screenshots'} ↗` : 'Project details & screenshots ↗';
      detailsButton.addEventListener('click', () => {
        openProject(project, detailsButton);
        if (project.screenshots) document.querySelector('#dialog-gallery-section').scrollIntoView({ block: 'start', behavior: 'smooth' });
      });
      content.append(detailsButton);
    }
    article.append(preview, content);
    grid.append(article);
  }
  document.querySelector('#filter-status').textContent = `${visible.length} ${filter === 'All' ? '' : filter + ' '}projects shown.`;
}

function createTags(items) {
  const tags = document.createElement('div');
  tags.className = 'tags';
  for (const item of items) {
    const tag = document.createElement('span');
    tag.textContent = item;
    tags.append(tag);
  }
  return tags;
}

function openProject(project, button) {
  activeProjectButton = button;
  if (project.caseStudy) {
    caseDialog.showModal();
    caseDialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    return;
  }
  document.querySelector('#dialog-title').textContent = project.name;
  document.querySelector('#dialog-status').textContent = project.status;
  document.querySelector('#dialog-description').textContent = project.details;
  const list = document.querySelector('#dialog-highlights');
  list.replaceChildren(...project.highlights.map(text => { const item = document.createElement('li'); item.textContent = text; return item; }));
  document.querySelector('#dialog-stack').replaceChildren(...createTags(project.stack).children);
  const source = document.querySelector('#dialog-source');
  source.textContent = `${project.sourceLabel || 'View source on GitHub'} ↗`;
  source.hidden = !project.source;
  if (project.source) source.href = project.source;
  else source.removeAttribute('href');
  document.querySelector('#dialog-source-note').hidden = !project.sourcePrivate;
  const gallerySection = document.querySelector('#dialog-gallery-section');
  const galleryMount = document.querySelector('#dialog-gallery');
  gallerySection.hidden = !project.screenshots;
  galleryMount.replaceChildren();
  gallerySection.querySelector('h3').textContent = project.galleryLayout === 'landscape' ? 'Project screenshots' : 'App screenshots';
  gallerySection.dataset.layout = project.galleryLayout || 'portrait';
  if (project.screenshots) galleryMount.append(createGallery(project.screenshots, { projectName: project.name, note: project.screenshotNote, layout: project.galleryLayout }));
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}

for (const projectDialog of [dialog, caseDialog]) {
  projectDialog.querySelector('.dialog-close').addEventListener('click', () => projectDialog.close());
  projectDialog.addEventListener('click', event => { if (event.target === projectDialog) { const rect = projectDialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) projectDialog.close(); } });
  projectDialog.addEventListener('close', () => { document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]'))); activeProjectButton?.focus(); });
}

for (const button of document.querySelectorAll('.filter')) {
  button.addEventListener('click', () => {
    for (const filter of document.querySelectorAll('.filter')) {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    }
    renderProjects(button.dataset.filter);
  });
}

for (const group of skills) {
  const card = document.createElement('div');
  card.className = 'skill-group';
  const title = document.createElement('h3');
  title.textContent = group.title;
  card.append(title, createTags(group.items));
  document.querySelector('#skills-grid').append(card);
}

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(profile.email);
    status.textContent = 'Email copied. Say hello!';
  } catch {
    status.textContent = `Email: ${profile.email}`;
  }
});

document.querySelector('#project-count').textContent = String(projects.length).padStart(2, '0');
renderProjects();
renderCaseStudy(skinSafeCaseStudy);
