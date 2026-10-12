export const profile = {
  name: 'Yashika Kekulandala',
  email: 'kldyukekulandala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yashika-kekulandala',
};

export const projects = [
  {
    id: 'pulse', number: '01', title: 'PULSE', subtitle: 'IT Service Management Platform', sector: 'Enterprise', period: 'Dec 2024 – Present', accent: 'blue', icon: 'workflow',
    description: 'Modernising enterprise service management through platform development, data migration, and workflow automation.',
    detail: 'PULSE replaces a legacy CRM with a modern IT service management platform. The engagement combines enterprise service-data migration with platform development and automated workflows.',
    focus: 'Platform delivery & workflow automation',
    contributions: ['Led platform build-out and workflow automation.', 'Supported the migration of enterprise service data from the legacy CRM.'],
    featuredStack: ['Spring Boot', 'BPMN', 'Kafka'],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Activiti BPMN', 'Docker', 'Kafka', 'RabbitMQ', 'Jenkins'],
    motif: ['Service data', 'Workflows', 'ITSM platform'],
  },
  {
    id: 'fusionx', number: '02', title: 'LOLC FusionX', subtitle: 'Core Banking Platform', sector: 'Banking', period: 'Mar 2024 – Dec 2024', accent: 'green', icon: 'bank',
    description: 'Contributing to a next-generation core banking platform supporting enterprise financial operations.',
    detail: 'LOLC FusionX is a core banking engagement focused on enterprise financial operations and reliable transaction processing. It brings together Java/Spring Boot services, Oracle data, and Angular within a banking platform.',
    focus: 'Core banking services',
    contributions: ['Contributed to the development of a next-generation core banking platform.', 'Supported core banking transaction processing for enterprise financial operations.'],
    featuredStack: ['Java', 'Oracle', 'Angular'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Oracle DB', 'Liquibase', 'RedHat BPMN', 'Angular', 'Jira', 'Agile'],
    motif: ['Banking services', 'Transactions', 'Financial operations'],
  },
  {
    id: 'open-banking', number: '03', title: 'Open Banking', subtitle: 'Smart Addressing · Bank of Maldives', sector: 'Banking', period: 'Jan 2023 – Dec 2024', accent: 'violet', icon: 'shield',
    description: 'A smart addressing module supporting secure third-party access and financial data exchange through WSO2.',
    detail: 'The Bank of Maldives open banking engagement centres on a smart addressing module delivered through WSO2. The work supports secure third-party access to customer financial data and open banking data exchange.',
    focus: 'API management & secure integration',
    contributions: ['Delivered the smart addressing module using WSO2 technologies.', 'Supported secure access and financial data exchange with an API and identity-management stack.'],
    featuredStack: ['WSO2', 'OAuth2', 'REST APIs'],
    stack: ['WSO2 APIM', 'WSO2 ESB', 'WSO2 IS', 'Java', 'REST APIs', 'OAuth2', 'MySQL', 'Docker'],
    motif: ['Third parties', 'Secure APIs', 'Data exchange'],
  },
  {
    id: 'durdans', number: '04', title: 'Durdans Hospital', subtitle: 'Mobile Application Backend', sector: 'Healthcare', period: 'Jan 2024 – Jun 2025', accent: 'rose', icon: 'health',
    description: 'Backend services and payment gateway integration for a hospital mobile application serving staff and patients.',
    detail: 'This healthcare engagement delivers backend services for the Durdans Hospital mobile application. Its scope includes secure in-app payments for hospital staff and patients through payment gateway integration.',
    focus: 'Mobile backend & payment integration',
    contributions: ['Built backend services for the hospital mobile application.', 'Integrated a payment gateway to support secure in-app transactions for staff and patients.'],
    featuredStack: ['Spring Boot', 'MySQL', 'Payments'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Payment Gateway Integration'],
    motif: ['Mobile app', 'Backend services', 'Payments'],
  },
  {
    id: 'etfb', number: '05', title: 'Employees’ Trust Fund', subtitle: 'ETFB · Government System', sector: 'Public services', period: 'Jun 2022 – Oct 2024', accent: 'sand', icon: 'government',
    description: 'An enterprise system supporting Employees’ Trust Fund processing and administration.',
    detail: 'The Employees’ Trust Fund Board engagement involves an enterprise system for fund processing and administration. The project combines Java/Spring Boot microservices, Angular, and Oracle Database.',
    focus: 'Enterprise application development',
    contributions: ['Helped build the enterprise system from the ground up.', 'Supported reliable end-to-end fund processing and administration.'],
    featuredStack: ['Microservices', 'Angular', 'Oracle'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Angular', 'Oracle Database', 'Microservices'],
    motif: ['Fund processing', 'Administration', 'Enterprise services'],
  },
  {
    id: 'leco', number: '06', title: 'LECO', subtitle: 'Enterprise Utility Management System', sector: 'Public services', period: 'Jul 2022 – Sep 2024', accent: 'teal', icon: 'utility',
    description: 'Electricity billing and customer management software for Lanka Electricity Company.',
    detail: 'The LECO engagement delivers electricity billing and customer management capabilities for Lanka Electricity Company. Java/Spring Boot services, REST APIs, and Oracle support production utility operations.',
    focus: 'Billing & customer management',
    contributions: ['Delivered electricity billing and customer management functionality.', 'Supported reliable production billing operations and customer service.'],
    featuredStack: ['Java', 'REST APIs', 'Oracle'],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Oracle DB', 'Jira', 'Agile'],
    motif: ['Customer data', 'Billing services', 'Utility operations'],
  },
];

export const experience = [
  {
    title: 'Software Engineer', period: 'Jun 2023 – Present', current: true,
    summary: 'Enterprise delivery across banking, healthcare, government, and IT service engagements.',
    highlights: ['Re-architected core services into Docker-based microservices to support independent releases.', 'Built a central API management layer with WSO2 API Manager and Identity Server, enforcing OAuth2, JWT, and role-based access.', 'Implemented Kafka and RabbitMQ messaging and led Activiti BPMN workflow automation.', 'Designed production REST APIs in Java/Spring Boot across concurrent client engagements.'],
  },
  {
    title: 'Associate Software Engineer', period: 'Aug 2022 – Jun 2023',
    summary: 'Developing, integrating, and supporting production backend services.',
    highlights: ['Developed Java/Spring Boot modules and integrated REST APIs with Oracle and PostgreSQL.', 'Resolved production defects and change requests.', 'Collaborated with QA and frontend teams throughout Agile release cycles.'],
  },
  {
    title: 'Trainee Software Engineer', period: 'Mar 2022 – Aug 2022',
    summary: 'Building the foundations of enterprise software engineering.',
    highlights: ['Developed and tested REST API endpoints under senior engineer guidance.', 'Contributed to backend/frontend integration during Agile sprints.', 'Validated and cleaned records through SQL query development.'],
  },
];

export const skills = [
  { number: '01', title: 'Backend engineering', description: 'Enterprise services and strong application foundations.', items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate / JPA', 'Microservices', 'REST APIs', 'OOP', 'Concurrency', 'Data Structures'] },
  { number: '02', title: 'Frontend development', description: 'Interfaces that connect users to capable backend systems.', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { number: '03', title: 'APIs & integration', description: 'Secure access, event-driven flows, and workflow automation.', items: ['WSO2 APIM / IS', 'OAuth2', 'JWT', 'Kafka', 'RabbitMQ', 'Activiti / RedHat BPMN', 'Payment Gateways'] },
  { number: '04', title: 'Data & delivery', description: 'Relational data, repeatable releases, and collaborative delivery.', items: ['Oracle', 'PostgreSQL', 'MySQL', 'Liquibase', 'Docker', 'Jenkins', 'CI/CD', 'Git / GitLab / GitHub / SVN', 'Agile / Scrum', 'Jira', 'SDLC'] },
];
