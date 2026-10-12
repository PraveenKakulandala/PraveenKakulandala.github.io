import { profile, projects, experience, skills } from './content.js';

const icons = {
  workflow: '<rect x="3" y="3" width="8" height="7" rx="1.5"/><rect x="21" y="22" width="8" height="7" rx="1.5"/><path d="M7 10v8a7 7 0 0 0 7 7h7M11 6h7a7 7 0 0 1 7 7v9"/>',
  bank: '<path d="m3 10 13-7 13 7H3Zm3 4v11m7-11v11m6-11v11m7-11v11M3 29h26M5 25h22"/>',
  shield: '<path d="M16 3 27 8v9c0 6-11 12-11 12S5 23 5 17V8Z"/><path d="m11 16 4 4 7-8"/>',
  health: '<path d="M11 3h10v8h8v10h-8v8H11v-8H3V11h8Z"/>',
  government: '<path d="M5 12h22v17H5Zm-2 0L16 3l13 9M11 17v7m5-7v7m5-7v7"/>',
  utility: '<path d="m18 2-13 17h10l-1 11 13-18H17Z"/>',
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function tags(items) {
  const group = element('div', 'tags');
  group.append(...items.map(item => element('span', '', item)));
  return group;
}

const dialog = document.querySelector('#project-dialog');
let activeProjectButton;

function openProject(project, trigger) {
  activeProjectButton = trigger;
  document.querySelector('#dialog-sector').textContent = `${project.sector.toUpperCase()} / ${project.number}`;
  document.querySelector('#dialog-title').textContent = `${project.title} — ${project.subtitle}`;
  document.querySelector('#dialog-description').textContent = project.detail;
  document.querySelector('#dialog-period').textContent = project.period;
  document.querySelector('#dialog-focus').textContent = project.focus;
  document.querySelector('#dialog-contributions').replaceChildren(...project.contributions.map(text => element('li', '', text)));
  document.querySelector('#dialog-stack').replaceChildren(...tags(project.stack).children);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}

function renderProjects(filter = 'All') {
  const visible = projects.filter(project => filter === 'All' || project.sector === filter);
  const cards = visible.map(project => {
    const card = element('article', `project-card ${project.accent}`);
    const top = element('div', 'project-top');
    const icon = element('div', 'project-icon');
    icon.innerHTML = `<svg viewBox="0 0 32 32" aria-hidden="true">${icons[project.icon]}</svg>`;
    top.append(icon, element('p', 'project-sector', project.sector), element('span', 'project-number', project.number));
    const heading = element('h3');
    const trigger = element('button', 'project-title', project.title);
    trigger.type = 'button';
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.append(element('span', 'project-arrow', '↗'));
    trigger.lastChild.setAttribute('aria-hidden', 'true');
    trigger.addEventListener('click', () => openProject(project, trigger));
    heading.append(trigger);
    const motif = element('div', 'project-motif');
    motif.setAttribute('aria-hidden', 'true');
    project.motif.forEach((item, index) => {
      if (index) motif.append(element('span', 'motif-arrow', '→'));
      motif.append(element('span', 'motif-node', item));
    });
    const bottom = element('div', 'project-bottom');
    const more = element('button', 'project-details', 'Explore project');
    more.type = 'button';
    more.setAttribute('aria-label', `Explore ${project.title} project`);
    more.setAttribute('aria-haspopup', 'dialog');
    const arrow = element('span', '', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    more.append(arrow);
    more.addEventListener('click', () => openProject(project, more));
    bottom.append(element('p', 'project-period', project.period), more);
    card.append(top, heading, element('p', 'project-subtitle', project.subtitle), element('p', 'project-description', project.description), motif, tags(project.featuredStack), bottom);
    return card;
  });
  document.querySelector('#project-grid').replaceChildren(...cards);
  document.querySelector('#filter-status').textContent = `${visible.length} ${filter === 'All' ? '' : filter + ' '}projects shown.`;
}

document.querySelector('#project-count').textContent = String(projects.length).padStart(2, '0');
renderProjects();
for (const filter of document.querySelectorAll('.filter')) {
  filter.addEventListener('click', () => {
    for (const button of document.querySelectorAll('.filter')) {
      button.classList.toggle('active', button === filter);
      button.setAttribute('aria-pressed', String(button === filter));
    }
    renderProjects(filter.dataset.filter);
  });
}

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  activeProjectButton?.focus();
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

for (const role of experience) {
  const entry = element('article', `experience-entry${role.current ? ' current' : ''}`);
  const meta = element('div', 'experience-meta');
  meta.append(element('span', '', role.period), element('span', 'role-indicator', role.current ? 'CURRENT ROLE' : 'INOVA IT SYSTEMS'));
  const highlights = element('ul');
  highlights.append(...role.highlights.map(text => element('li', '', text)));
  entry.append(meta, element('h3', '', role.title), element('p', 'experience-company', 'Inova IT Systems (Pvt) Ltd · Sri Lanka'), element('p', 'experience-summary', role.summary), highlights);
  document.querySelector('#experience-list').append(entry);
}

for (const skill of skills) {
  const group = element('article', 'skill-group');
  group.append(element('span', 'skill-number', skill.number), element('h3', '', skill.title), element('p', '', skill.description), tags(skill.items));
  document.querySelector('#skills-grid').append(group);
}

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header-inner')) closeMenu(); });
window.matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(profile.email);
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = `Email: ${profile.email}`;
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
