import { createGallery } from './gallery.js';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function image(screen, className = '') {
  const node = element('img', className);
  node.src = screen.file;
  node.alt = screen.alt;
  node.width = 1236;
  node.height = 2745;
  node.loading = 'lazy';
  return node;
}

function textSection(title, paragraphs) {
  const section = element('div', 'case-text-section');
  section.append(element('h3', '', title));
  for (const paragraph of paragraphs) section.append(element('p', '', paragraph));
  return section;
}

export function renderCaseStudy(study) {
  const mount = document.querySelector('#skinsafe-case-study');
  if (!mount) return;
  const header = element('div', 'case-header');
  const introduction = element('div', 'case-introduction');
  introduction.append(element('p', 'eyebrow section-number', 'PROJECT CASE STUDY / MOBILE & APPLIED AI'));
  const title = element('h2', '', study.title);
  title.id = 'skinsafe-title';
  title.append(element('span', 'case-title-dot', '.'));
  introduction.append(title, element('p', 'case-tagline', study.tagline), element('p', 'case-summary', study.summary));
  const tags = element('div', 'case-tags');
  for (const name of ['Flutter', 'On-device AI', 'Firebase', 'Research prototype']) tags.append(element('span', '', name));
  const repository = element('a', 'button case-repository', 'GitHub repository ↗');
  repository.href = study.repository;
  repository.target = '_blank';
  repository.rel = 'noopener noreferrer';
  introduction.append(tags, repository, element('p', 'repository-note', 'Private repository · GitHub access is required.'));
  const phones = element('div', 'case-hero-screens');
  phones.setAttribute('aria-hidden', 'true');
  for (const screen of study.screenshots.slice(0, 2)) {
    const frame = element('div', 'case-hero-phone');
    const shot = image(screen);
    shot.alt = '';
    frame.append(shot);
    phones.append(frame);
  }
  header.append(introduction, phones);

  const meta = element('dl', 'case-meta');
  for (const [name, value] of [['Project', study.type], ['Platform', study.platform], ['Focus', study.focus]]) {
    const item = element('div');
    item.append(element('dt', '', name), element('dd', '', value));
    meta.append(item);
  }

  const overview = element('div', 'case-overview-grid');
  const questions = element('div', 'case-problem-solution');
  questions.append(textSection('The problem', [study.problem]), textSection('The approach', [study.solution]));
  overview.append(textSection('Project overview', study.overview), questions);

  const features = element('div', 'case-subsection');
  features.append(element('p', 'eyebrow', 'THE EXPERIENCE'), element('h3', 'case-section-title', 'More than a single scan.'));
  const featureGrid = element('div', 'case-feature-grid');
  study.features.forEach((feature, index) => {
    const item = element('article', 'case-feature');
    item.append(element('span', 'case-feature-number', String(index + 1).padStart(2, '0')), element('h4', '', feature.title), element('p', '', feature.description));
    featureGrid.append(item);
  });
  features.append(featureGrid);

  const gallerySection = element('div', 'case-subsection');
  gallerySection.append(element('p', 'eyebrow', 'A LOOK INSIDE'), element('h3', 'case-section-title', 'The actual app, screen by screen.'), element('p', 'case-gallery-note', 'Captured from the Flutter interface with demonstration data. Select a screen to view it at a larger size.'));
  const gallery = createGallery(study.screenshots, { projectName: study.title, note: 'Actual Flutter interface · demonstration data' });
  gallerySection.append(gallery);

  const technical = element('div', 'case-subsection');
  technical.append(element('p', 'eyebrow', 'BEHIND THE INTERFACE'), element('h3', 'case-section-title', 'An end-to-end mobile workflow.'));
  const workflow = element('ol', 'case-workflow');
  study.workflow.forEach((step, index) => {
    const item = element('li');
    item.append(element('span', 'case-workflow-number', String(index + 1).padStart(2, '0')), element('h4', '', step.title), element('p', '', step.description));
    workflow.append(item);
  });
  const architecture = element('div', 'case-architecture');
  for (const component of study.architecture) {
    const item = element('div', 'case-architecture-row');
    item.append(element('h4', '', component.title), element('p', '', component.description));
    architecture.append(item);
  }
  const stack = element('div', 'case-tech-stack');
  stack.append(element('h4', '', 'Technology stack'));
  const stackTags = element('div', 'tags');
  for (const technology of study.stack) stackTags.append(element('span', '', technology));
  stack.append(stackTags);
  technical.append(workflow, architecture, stack);

  const engineering = element('div', 'case-engineering');
  engineering.append(element('h3', '', 'Engineering considerations'));
  const engineeringList = element('ul');
  for (const item of study.engineering) engineeringList.append(element('li', '', item));
  engineering.append(engineeringList);
  const scope = element('div', 'case-scope');
  scope.append(element('p', 'eyebrow', 'PROJECT STATUS & SCOPE'), element('p', '', study.limitations));
  mount.replaceChildren(header, meta, overview, features, gallerySection, technical, engineering, scope);
}
