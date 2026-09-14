/* =========================================================
   MATTHEW AMIO PORTFOLIO
   Main Stylesheet
========================================================= */


/* =========================================================
   01. ROOT VARIABLES
========================================================= */

:root {
    --bg: #08090d;
    --bg-soft: #0e1017;
    --bg-card: #11131b;

    --text: #f4f5f7;
    --text-soft: #a5a9b5;
    --text-muted: #6f7482;

    --accent: #8b7cff;
    --accent-light: #b3aaff;
    --accent-dark: #6658e8;

    --border: rgba(255, 255, 255, 0.09);
    --border-light: rgba(255, 255, 255, 0.15);

    --gradient: linear-gradient(
        135deg,
        #8b7cff 0%,
        #b9a7ff 50%,
        #7f9cff 100%
    );

    --max-width: 1200px;

    --radius-small: 8px;
    --radius-medium: 16px;
    --radius-large: 24px;

    --transition: 0.3s ease;
}


/* =========================================================
   02. RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

body.modal-open {
    overflow: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}

img {
    max-width: 100%;
    display: block;
}

::selection {
    background: var(--accent);
    color: white;
}


/* =========================================================
   03. GLOBAL
========================================================= */

.container {
    width: min(100% - 48px, var(--max-width));
    margin: 0 auto;
}

.section {
    position: relative;
    padding: 140px 0;
}

.section-heading {
    margin-bottom: 70px;
}

.section-number {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: var(--accent-light);
    margin-bottom: 20px;
}

.section-heading h2 {
    max-width: 850px;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
}

.section-heading h2 span,
.hero h1 span,
.about-section .large-text strong,
.philosophy-card h2 span,
.contact-content h2 span {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}


/* =========================================================
   04. NAVIGATION
========================================================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(8, 9, 13, 0.72);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    border-bottom: 1px solid transparent;

    transition:
        background var(--transition),
        border-color var(--transition);
}

.navbar.scrolled {
    background: rgba(8, 9, 13, 0.92);
    border-color: var(--border);
}

.nav-container {
    height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
}

.logo span {
    color: var(--accent);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 36px;
}

.nav-menu a {
    position: relative;

    font-size: 0.82rem;
    color: var(--text-soft);

    transition: color var(--transition);
}

.nav-menu a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -8px;

    width: 0;
    height: 1px;

    background: var(--accent);

    transition: width var(--transition);
}

.nav-menu a:hover {
    color: var(--text);
}

.nav-menu a:hover::after {
    width: 100%;
}

.nav-button {
    padding: 11px 18px;

    border: 1px solid var(--border-light);
    border-radius: 999px;

    font-size: 0.78rem;
    font-weight: 600;

    transition:
        background var(--transition),
        border-color var(--transition),
        transform var(--transition);
}

.nav-button:hover {
    background: rgba(139, 124, 255, 0.12);
    border-color: var(--accent);
    transform: translateY(-2px);
}

.mobile-menu-button {
    display: none;

    border: 0;
    background: transparent;

    color: var(--text);

    font-size: 1.5rem;
    cursor: pointer;
}


/* =========================================================
   05. HERO
========================================================= */

.hero {
    position: relative;

    min-height: 100vh;

    display: flex;
    align-items: center;

    overflow: hidden;

    padding-top: 82px;
}

.hero-background {
    position: absolute;
    inset: 0;

    pointer-events: none;
}

.hero-grid {
    position: absolute;
    inset: 0;

    opacity: 0.25;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.035) 1px,
            transparent 1px
        );

    background-size: 70px 70px;

    mask-image: linear-gradient(
        to bottom,
        black 0%,
        transparent 80%
    );
}

.glow {
    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    filter: blur(120px);

    opacity: 0.14;
}

.glow-one {
    top: 10%;
    left: 5%;
    background: var(--accent);
}

.glow-two {
    right: 5%;
    bottom: 0;
    background: #516dff;
}

.hero-container {
    position: relative;
    z-index: 2;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;

    gap: 60px;
}

.hero-content {
    max-width: 760px;
}

.eyebrow {
    margin-bottom: 25px;

    font-size: 0.75rem;
    font-weight: 700;

    letter-spacing: 0.2em;

    color: var(--accent-light);
}

.hero h1 {
    max-width: 850px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(3.5rem, 7vw, 7rem);
    line-height: 0.95;

    letter-spacing: -0.06em;
}

.hero-description {
    max-width: 650px;

    margin-top: 32px;

    color: var(--text-soft);

    font-size: 1.08rem;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;

    gap: 14px;

    margin-top: 40px;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    min-height: 52px;

    padding: 0 24px;

    border-radius: 999px;

    font-size: 0.85rem;
    font-weight: 600;

    transition:
        transform var(--transition),
        background var(--transition),
        border-color var(--transition);
}

.button-primary {
    background: var(--gradient);
    color: white;

    box-shadow:
        0 10px 35px rgba(139, 124, 255, 0.2);
}

.button-primary:hover {
    transform: translateY(-3px);
}

.button-secondary {
    border: 1px solid var(--border-light);
    color: var(--text);
}

.button-secondary:hover {
    border-color: var(--accent);
    background: rgba(139, 124, 255, 0.08);
    transform: translateY(-3px);
}

.hero-meta {
    display: flex;
    flex-wrap: wrap;

    gap: 25px;

    margin-top: 50px;

    color: var(--text-muted);

    font-size: 0.78rem;
}

.availability {
    display: flex;
    align-items: center;
    gap: 9px;
}

.status-dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #72e5a1;

    box-shadow: 0 0 12px rgba(114, 229, 161, 0.8);
}

.hero-visual {
    min-height: 520px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.automation-orbit {
    position: relative;

    width: 440px;
    height: 440px;
}

.orbit {
    position: absolute;

    top: 50%;
    left: 50%;

    border: 1px solid var(--border-light);

    border-radius: 50%;

    transform: translate(-50%, -50%);
}

.orbit-one {
    width: 300px;
    height: 300px;
}

.orbit-two {
    width: 430px;
    height: 430px;

    border-color: rgba(139, 124, 255, 0.15);
}

.center-node {
    position: absolute;

    top: 50%;
    left: 50%;

    width: 130px;
    height: 130px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(139, 124, 255, 0.5);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(139, 124, 255, 0.2),
            rgba(17, 19, 27, 0.95)
        );

    box-shadow:
        0 0 80px rgba(139, 124, 255, 0.15);

    transform: translate(-50%, -50%);
}

.center-node span {
    font-family: "Space Grotesk", sans-serif;
    font-size: 2rem;
    font-weight: 700;
}

.center-node small {
    margin-top: 2px;

    color: var(--text-muted);

    font-size: 0.52rem;
    letter-spacing: 0.15em;
}

.floating-node {
    position: absolute;

    width: 88px;
    height: 88px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 18px;

    background: rgba(17, 19, 27, 0.82);

    backdrop-filter: blur(10px);

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

    animation: float 5s ease-in-out infinite;
}

.floating-node span {
    font-size: 1.5rem;
}

.floating-node small {
    margin-top: 4px;

    font-size: 0.48rem;
    letter-spacing: 0.12em;

    color: var(--text-muted);
}

.node-one {
    top: 3%;
    left: 48%;
}

.node-two {
    top: 45%;
    right: -1%;

    animation-delay: -1.2s;
}

.node-three {
    bottom: 3%;
    left: 45%;

    animation-delay: -2.5s;
}

.node-four {
    top: 43%;
    left: -2%;

    animation-delay: -3.5s;
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}

.scroll-indicator {
    position: absolute;

    left: 50%;
    bottom: 35px;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    color: var(--text-muted);

    font-size: 0.58rem;
    letter-spacing: 0.18em;
}

.scroll-line {
    width: 1px;
    height: 45px;

    background: linear-gradient(
        to bottom,
        var(--accent),
        transparent
    );
}


/* =========================================================
   06. ABOUT
========================================================= */

.about-section {
    background: var(--bg-soft);
}

.about-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;

    gap: 100px;
}

.about-main {
    max-width: 760px;
}

.about-main p {
    margin-bottom: 25px;

    color: var(--text-soft);

    font-size: 1rem;
}

.about-main .large-text {
    color: var(--text);

    font-size: 1.5rem;
    line-height: 1.5;
}

.about-highlight {
    display: flex;
    flex-direction: column;

    gap: 15px;
}

.highlight-card {
    padding: 25px;

    border: 1px solid var(--border);

    border-radius: var(--radius-medium);

    background: rgba(255, 255, 255, 0.015);

    transition:
        transform var(--transition),
        border-color var(--transition);
}

.highlight-card:hover {
    transform: translateX(8px);
    border-color: rgba(139, 124, 255, 0.4);
}

.highlight-number {
    display: block;

    font-family: "Space Grotesk", sans-serif;

    font-size: 1.8rem;
    font-weight: 600;

    color: var(--text);
}

.highlight-label {
    display: block;

    margin-top: 5px;

    color: var(--text-muted);

    font-size: 0.75rem;
}


/* =========================================================
   07. SKILLS
========================================================= */

.skills-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
}

.skill-card {
    padding: 35px;

    border: 1px solid var(--border);

    border-radius: var(--radius-large);

    background: var(--bg-card);

    transition:
        transform var(--transition),
        border-color var(--transition);
}

.skill-card:hover {
    transform: translateY(-7px);

    border-color: rgba(139, 124, 255, 0.35);
}

.skill-icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 25px;

    border: 1px solid var(--border);

    border-radius: 14px;

    background: rgba(139, 124, 255, 0.07);

    font-size: 1.4rem;
}

.skill-card h3 {
    margin-bottom: 12px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 1.4rem;
}

.skill-card p {
    margin-bottom: 25px;

    color: var(--text-muted);

    font-size: 0.9rem;
}

.skill-tags,
.project-tools,
.modal-tools {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;
}

.skill-tags span,
.project-tools span,
.modal-tools span {
    padding: 7px 10px;

    border: 1px solid var(--border);

    border-radius: 999px;

    color: var(--text-soft);

    font-size: 0.68rem;
}


/* =========================================================
   08. PROJECTS
========================================================= */

.projects-section {
    background: var(--bg-soft);
}

.projects-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 40px;
}

.section-intro {
    max-width: 350px;

    color: var(--text-muted);

    font-size: 0.9rem;
}

.projects-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 20px;
}

.project-card {
    position: relative;

    padding: 32px;

    min-height: 430px;

    display: flex;
    flex-direction: column;

    border: 1px solid var(--border);

    border-radius: var(--radius-large);

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0.005)
        );

    overflow: hidden;

    cursor: pointer;

    transition:
        transform 0.4s ease,
        border-color 0.4s ease,
        background 0.4s ease;
}

.project-card::before {
    content: "";

    position: absolute;

    width: 250px;
    height: 250px;

    top: -120px;
    right: -100px;

    border-radius: 50%;

    background: var(--accent);

    opacity: 0;

    filter: blur(90px);

    transition: opacity 0.4s ease;
}

.project-card:hover {
    transform: translateY(-8px);

    border-color: rgba(139, 124, 255, 0.4);

    background:
        linear-gradient(
            145deg,
            rgba(139, 124, 255, 0.06),
            rgba(255, 255, 255, 0.01)
        );
}

.project-card:hover::before {
    opacity: 0.12;
}

.project-top {
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-number {
    font-family: "Space Grotesk", sans-serif;

    color: var(--text-muted);

    font-size: 0.75rem;
}

.project-type {
    padding: 6px 9px;

    border: 1px solid var(--border);

    border-radius: 999px;

    color: var(--text-muted);

    font-size: 0.52rem;
    letter-spacing: 0.1em;
}

.project-icon {
    position: relative;
    z-index: 1;

    width: 62px;
    height: 62px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
    margin-bottom: 25px;

    border: 1px solid var(--border);

    border-radius: 18px;

    background: rgba(139, 124, 255, 0.07);

    font-size: 1.6rem;
}

.project-card h3 {
    position: relative;
    z-index: 1;

    margin-bottom: 12px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 1.65rem;
}

.project-card > p {
    position: relative;
    z-index: 1;

    max-width: 550px;

    color: var(--text-muted);

    font-size: 0.88rem;
}

.workflow-preview {
    position: relative;
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 7px;

    margin-top: 28px;

    color: var(--text-soft);

    font-size: 0.63rem;
}

.workflow-preview span {
    padding: 7px 9px;

    border: 1px solid var(--border);

    border-radius: 7px;

    background: rgba(255, 255, 255, 0.02);
}

.workflow-preview b {
    color: var(--accent-light);
}

.project-footer {
    position: relative;
    z-index: 1;

    margin-top: auto;
    padding-top: 30px;

    display: flex;
    flex-direction: column;

    gap: 18px;
}

.project-link {
    align-self: flex-start;

    padding: 0;

    border: 0;

    background: transparent;

    color: var(--text);

    font-size: 0.78rem;
    font-weight: 600;

    cursor: pointer;

    transition: color var(--transition);
}

.project-link:hover {
    color: var(--accent-light);
}


/* =========================================================
   09. EXPERIENCE
========================================================= */

.timeline {
    position: relative;

    max-width: 1000px;

    margin: 0 auto;
}

.timeline::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;
    left: 180px;

    width: 1px;

    background: var(--border);
}

.timeline-item {
    display: grid;

    grid-template-columns: 180px 1fr;

    gap: 55px;

    padding-bottom: 80px;
}

.timeline-date {
    color: var(--text-muted);

    font-size: 0.7rem;
    font-weight: 600;

    letter-spacing: 0.08em;
}

.timeline-content {
    position: relative;

    padding-left: 35px;
}

.timeline-content::before {
    content: "";

    position: absolute;

    top: 7px;
    left: -5px;

    width: 9px;
    height: 9px;

    border: 2px solid var(--bg);

    border-radius: 50%;

    background: var(--accent);

    box-shadow: 0 0 0 1px var(--accent);
}

.experience-company {
    display: block;

    margin-bottom: 8px;

    color: var(--accent-light);

    font-size: 0.78rem;
    font-weight: 600;
}

.timeline-content h3 {
    margin-bottom: 5px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 2rem;
}

.experience-role {
    margin-bottom: 20px;

    color: var(--text-muted);

    font-size: 0.8rem;
}

.timeline-content > p:not(.experience-role) {
    max-width: 700px;

    margin-bottom: 22px;

    color: var(--text-soft);

    font-size: 0.9rem;
}

.timeline-content ul {
    padding-left: 18px;

    color: var(--text-muted);

    font-size: 0.82rem;
}

.timeline-content li {
    margin-bottom: 9px;
}


/* =========================================================
   10. PHILOSOPHY
========================================================= */

.philosophy-section {
    background: var(--bg-soft);
}

.philosophy-card {
    padding: 70px;

    border: 1px solid var(--border);

    border-radius: var(--radius-large);

    background:
        radial-gradient(
            circle at top right,
            rgba(139, 124, 255, 0.08),
            transparent 40%
        );
}

.philosophy-card h2 {
    max-width: 900px;

    margin: 20px 0 70px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(2.2rem, 4vw, 4.5rem);

    line-height: 1;

    letter-spacing: -0.04em;
}

.philosophy-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 35px;
}

.philosophy-grid strong {
    color: var(--accent-light);

    font-size: 0.7rem;
}

.philosophy-grid h3 {
    margin: 12px 0 8px;

    font-family: "Space Grotesk", sans-serif;

    font-size: 1.15rem;
}

.philosophy-grid p {
    color: var(--text-muted);

    font-size: 0.78rem;
}


/* =========================================================
   11. CONTACT
========================================================= */

.contact-section {
    padding-bottom: 100px;
}

.contact-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 60px;
}

.contact-content {
    max-width: 800px;
}

.contact-content h2 {
    margin: 20px 0 25px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(3rem, 6vw, 6rem);

    line-height: 0.95;

    letter-spacing: -0.05em;
}

.contact-content > p:not(.section-number) {
    max-width: 650px;

    margin-bottom: 30px;

    color: var(--text-muted);

    font-size: 0.95rem;
}

.email-link {
    display: inline-block;

    color: var(--text);

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(1.2rem, 2vw, 1.7rem);

    border-bottom: 1px solid var(--border-light);

    transition:
        color var(--transition),
        border-color var(--transition);
}

.email-link:hover {
    color: var(--accent-light);
    border-color: var(--accent);
}

.contact-actions {
    display: flex;
    flex-direction: column;

    min-width: 160px;

    gap: 10px;
}

.contact-button {
    padding: 14px 18px;

    border: 1px solid var(--border);

    border-radius: 10px;

    text-align: center;

    font-size: 0.78rem;

    transition:
        background var(--transition),
        border-color var(--transition),
        transform var(--transition);
}

.contact-button:hover {
    background: rgba(139, 124, 255, 0.08);

    border-color: var(--accent);

    transform: translateY(-2px);
}


/* =========================================================
   12. PROJECT MODAL
========================================================= */

.project-modal {
    position: fixed;

    inset: 0;

    z-index: 2000;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 25px;

    visibility: hidden;
    opacity: 0;

    transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
}

.project-modal.active {
    visibility: visible;
    opacity: 1;
}

.modal-overlay {
    position: absolute;

    inset: 0;

    background: rgba(0, 0, 0, 0.78);

    backdrop-filter: blur(12px);
}

.modal-container {
    position: relative;
    z-index: 2;

    width: min(100%, 850px);

    max-height: 90vh;

    overflow-y: auto;

    border: 1px solid var(--border-light);

    border-radius: var(--radius-large);

    background: #0d0f15;

    box-shadow:
        0 40px 100px rgba(0, 0, 0, 0.5);

    transform: translateY(30px) scale(0.98);

    transition: transform 0.3s ease;
}

.project-modal.active .modal-container {
    transform: translateY(0) scale(1);
}

.modal-close {
    position: absolute;

    top: 20px;
    right: 20px;

    z-index: 5;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--border);

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.03);

    color: var(--text);

    font-size: 1.4rem;

    cursor: pointer;

    transition:
        background var(--transition),
        border-color var(--transition);
}

.modal-close:hover {
    background: rgba(139, 124, 255, 0.12);

    border-color: var(--accent);
}

.modal-content {
    padding: 60px;
}

.modal-type {
    margin-bottom: 15px;

    color: var(--accent-light);

    font-size: 0.65rem;
    font-weight: 700;

    letter-spacing: 0.18em;
}

.modal-content h2 {
    margin-bottom: 18px;

    font-family: "Space Grotesk", sans-serif;

    font-size: clamp(2.3rem, 5vw, 4.5rem);

    line-height: 1;

    letter-spacing: -0.04em;
}

.modal-description {
    max-width: 700px;

    color: var(--text-soft);

    font-size: 1rem;
}

.modal-section {
    margin-top: 45px;

    padding-top: 30px;

    border-top: 1px solid var(--border);
}

.modal-label {
    display: block;

    margin-bottom: 15px;

    color: var(--accent-light);

    font-size: 0.62rem;
    font-weight: 700;

    letter-spacing: 0.16em;
}

.modal-section > p {
    color: var(--text-soft);

    font-size: 0.88rem;
}

.modal-workflow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 10px;
}

.workflow-step {
    padding: 12px 16px;

    border: 1px solid var(--border);

    border-radius: 10px;

    background: rgba(255, 255, 255, 0.025);

    color: var(--text);

    font-size: 0.75rem;
}

.workflow-arrow {
    color: var(--accent-light);

    font-weight: 700;
}


/* =========================================================
   13. FOOTER
========================================================= */

.footer {
    border-top: 1px solid var(--border);

    padding: 30px 0;

    color: var(--text-muted);

    font-size: 0.68rem;
}

.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
}


/* =========================================================
   14. SCROLLBAR
========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg);
}

::-webkit-scrollbar-thumb {
    background: #292c37;

    border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3c4050;
}


/* =========================================================
   15. RESPONSIVE — TABLET
========================================================= */

@media (max-width: 1000px) {

    .hero-container {
        grid-template-columns: 1fr;
    }

    .hero-content {
        max-width: 850px;
    }

    .hero-visual {
        min-height: 400px;
    }

    .automation-orbit {
        transform: scale(0.8);
    }

    .about-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .about-highlight {
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    }

    .highlight-card:hover {
        transform: translateY(-5px);
    }

    .projects-heading {
        flex-direction: column;

        align-items: flex-start;
    }

    .philosophy-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-container {
        flex-direction: column;

        align-items: flex-start;
    }

    .contact-actions {
        flex-direction: row;
    }

}


/* =========================================================
   16. RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 700px) {

    .container {
        width: min(100% - 32px, var(--max-width));
    }

    .section {
        padding: 95px 0;
    }

    .section-heading {
        margin-bottom: 45px;
    }

    .nav-menu,
    .nav-button {
        display: none;
    }

    .mobile-menu-button {
        display: block;
    }

    .nav-container {
        height: 70px;
    }

    .hero {
        min-height: auto;

        padding-top: 130px;
        padding-bottom: 80px;
    }

    .hero h1 {
        font-size: clamp(3rem, 15vw, 5rem);
    }

    .hero-description {
        font-size: 0.95rem;
    }

    .hero-meta {
        flex-direction: column;

        gap: 10px;
    }

    .hero-visual {
        min-height: 330px;

        margin-top: 20px;
    }

    .automation-orbit {
        transform: scale(0.65);
    }

    .scroll-indicator {
        display: none;
    }

    .about-main .large-text {
        font-size: 1.2rem;
    }

    .about-highlight {
        grid-template-columns: 1fr;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card {
        min-height: 420px;
    }

    .workflow-preview {
        font-size: 0.56rem;
    }

    .timeline::before {
        left: 5px;
    }

    .timeline-item {
        grid-template-columns: 1fr;

        gap: 12px;

        padding-left: 25px;
        padding-bottom: 55px;
    }

    .timeline-content {
        padding-left: 0;
    }

    .timeline-content::before {
        left: -24px;
    }

    .timeline-content h3 {
        font-size: 1.7rem;
    }

    .philosophy-card {
        padding: 35px 25px;
    }

    .philosophy-card h2 {
        margin-bottom: 45px;
    }

    .philosophy-grid {
        grid-template-columns: 1fr;
    }

    .contact-content h2 {
        font-size: clamp(2.8rem, 13vw, 5rem);
    }

    .contact-actions {
        width: 100%;

        flex-direction: column;
    }

    .contact-button {
        width: 100%;
    }

    .modal-content {
        padding: 45px 25px;
    }

    .modal-close {
        top: 15px;
        right: 15px;
    }

    .modal-workflow {
        flex-direction: column;

        align-items: stretch;
    }

    .workflow-arrow {
        text-align: center;

        transform: rotate(90deg);
    }

    .footer-container {
        flex-direction: column;

        align-items: flex-start;
    }

}


/* =========================================================
   17. REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

}
