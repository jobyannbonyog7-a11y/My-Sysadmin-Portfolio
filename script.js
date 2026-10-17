/* ============================================
   SYSTEM ADMIN PORTFOLIO - INTERACTIVE JS
   Language, Theme, Terminal, Effects, Particles
   ============================================ */

// ========== TRANSLATIONS ==========
const translations = {
  en: {
    brand: "SysAdmin Portfolio",
    nav_home: "Home",
    nav_roles: "Roles",
    nav_skills: "Skills",
    nav_tools: "Tools",
    nav_playground: "Playground",
    nav_about: "About",
    hero_badge: "SYSTEM ADMINISTRATOR CAREER PORTFOLIO",
    hero_title: "Master the Digital Infrastructure",
    hero_sub: "Explore the world of System Administration — the backbone of every modern organization. From servers to security, discover the roles, skills, and tools that keep systems running.",
    btn_explore: "Explore Roles",
    btn_meet: "Meet the Developer",
    scroll: "Scroll Down",
    roles_title: "Roles & Responsibilities",
    roles_desc: "The critical duties that keep enterprise systems alive and secure.",
    role1_title: "Install & Maintain OS",
    role1_desc: "Deploy, configure, and maintain operating systems (Windows Server, Linux distributions) across physical and virtual environments ensuring stability and security.",
    role2_title: "User Accounts & Permissions",
    role2_desc: "Manage Active Directory / LDAP users, groups, and access rights. Enforce least-privilege principles and handle identity lifecycle.",
    role3_title: "Monitor Performance",
    role3_desc: "Continuously track CPU, memory, disk, and network metrics. Set up alerts and dashboards to detect bottlenecks before they impact users.",
    role4_title: "Backup & Recovery",
    role4_desc: "Design and execute reliable backup strategies, test restores regularly, and maintain disaster recovery plans to protect critical data.",
    role5_title: "Troubleshoot Issues",
    role5_desc: "Diagnose and resolve hardware, software, and network problems quickly. Use logs, diagnostic tools, and systematic methods to restore service.",
    role6_title: "Security & Hardening",
    role6_desc: "Apply patches, configure firewalls, implement security baselines, and monitor for threats to keep infrastructure secure.",
    skills_title: "Technical & Professional Skills",
    skills_desc: "The mix of hard and soft skills that define a world-class System Administrator.",
    tech_skills: "Technical Skills",
    pro_skills: "Professional Skills",
    skill_os: "Operating System Administration",
    skill_net: "Networking & Protocols",
    skill_script: "Scripting (Bash / PowerShell)",
    skill_virt: "Virtualization & Cloud",
    skill_sec: "Security Fundamentals",
    tag_problem: "Problem Solving",
    tag_comm: "Communication",
    tag_team: "Teamwork",
    tag_time: "Time Management",
    tag_adapt: "Adaptability",
    tag_doc: "Documentation",
    tag_crit: "Critical Thinking",
    tag_cust: "Customer Focus",
    skill_note1: "Rapid diagnosis under pressure is essential when systems go down.",
    skill_note2: "Clear communication with non-technical stakeholders prevents chaos.",
    tools_title: "System Administration Tools",
    tools_desc: "Industry-standard tools that every SysAdmin masters. Click any card for more info & official site.",
    tool_win: "Enterprise OS for domain controllers, file servers, and Active Directory.",
    tool_ubuntu: "Popular open-source Linux server distribution used worldwide.",
    tool_ps: "Powerful scripting language and shell for Windows automation.",
    tool_ssh: "Secure Shell protocol for remote server access and management.",
    tool_vbox: "Free virtualization platform for running multiple OSes on one machine.",
    tool_docker: "Container platform that packages applications with their dependencies.",
    tool_ansible: "Agentless automation tool for configuration management and orchestration.",
    tool_nagios: "Industry-standard monitoring system for infrastructure and services.",
    play_title: "Try the Code",
    play_desc: "Pick a sample, edit it, then press Run. This is a safe simulated terminal. Nothing touches your real computer.",
    term_welcome: "Welcome to the SysAdmin Playground! Type 'help' for available commands.",
    play_editor: "Editor",
    play_output: "Output",
    play_run: "Run",
    play_clear: "Clear output",
    about_title: "About the Developer",
    dev_course: "BS Information Technology",
    dev_intro: "Passionate about building and maintaining reliable digital infrastructures. I love exploring Linux, automation, and the art of keeping systems secure and efficient. This portfolio showcases both my web development skills and my growing knowledge in System Administration.",
    btn_surprise: "Activate Surprise Effect",
    footer: "© 2026 Joby Ann M. Bonyog • System Administrator Career Portfolio • Built with 💜 & 🔥"
  },
  tl: {
    brand: "SysAdmin Portfolio",
    nav_home: "Home",
    nav_roles: "Mga Tungkulin",
    nav_skills: "Mga Kasanayan",
    nav_tools: "Mga Tool",
    nav_playground: "Playground",
    nav_about: "Tungkol",
    hero_badge: "SYSTEM ADMINISTRATOR CAREER PORTFOLIO",
    hero_title: "Masterin ang Digital na Imprastraktura",
    hero_sub: "Tuklasin ang mundo ng System Administration — ang backbone ng bawat modernong organisasyon. Mula sa mga server hanggang sa seguridad, alamin ang mga tungkulin, kasanayan, at tools na nagpapatakbo sa mga sistema.",
    btn_explore: "Tuklasin ang mga Tungkulin",
    btn_meet: "Kilalanin ang Developer",
    scroll: "Mag-scroll Pababa",
    roles_title: "Mga Tungkulin at Responsibilidad",
    roles_desc: "Ang mga kritikal na tungkulin na nagpapanatili sa enterprise systems na buhay at secure.",
    role1_title: "I-install at Panatilihin ang OS",
    role1_desc: "I-deploy, i-configure, at panatilihin ang operating systems (Windows Server, Linux) sa physical at virtual environments para sa stability at security.",
    role2_title: "User Accounts at Permissions",
    role2_desc: "Pamahalaan ang Active Directory / LDAP users, groups, at access rights. Ipatupad ang least-privilege at handle ang identity lifecycle.",
    role3_title: "Subaybayan ang Performance",
    role3_desc: "Patuloy na subaybayan ang CPU, memory, disk, at network metrics. Mag-set up ng alerts at dashboards para matukoy ang bottlenecks.",
    role4_title: "Backup at Recovery",
    role4_desc: "Magdisenyo at magsagawa ng maaasahang backup strategies, regular na i-test ang restores, at panatilihin ang disaster recovery plans.",
    role5_title: "Ayusin ang mga Isyu",
    role5_desc: "I-diagnose at ayusin ang hardware, software, at network problems nang mabilis. Gumamit ng logs at diagnostic tools.",
    role6_title: "Security at Hardening",
    role6_desc: "Mag-apply ng patches, i-configure ang firewalls, ipatupad ang security baselines, at subaybayan ang mga banta.",
    skills_title: "Teknikal at Propesyonal na Kasanayan",
    skills_desc: "Ang kombinasyon ng hard at soft skills na tumutukoy sa isang world-class System Administrator.",
    tech_skills: "Teknikal na Kasanayan",
    pro_skills: "Propesyonal na Kasanayan",
    skill_os: "Operating System Administration",
    skill_net: "Networking at Protocols",
    skill_script: "Scripting (Bash / PowerShell)",
    skill_virt: "Virtualization at Cloud",
    skill_sec: "Security Fundamentals",
    tag_problem: "Problem Solving",
    tag_comm: "Komunikasyon",
    tag_team: "Teamwork",
    tag_time: "Time Management",
    tag_adapt: "Adaptability",
    tag_doc: "Documentation",
    tag_crit: "Critical Thinking",
    tag_cust: "Customer Focus",
    skill_note1: "Mahalaga ang mabilis na diagnosis sa ilalim ng pressure kapag bumaba ang systems.",
    skill_note2: "Malinaw na komunikasyon sa non-technical stakeholders ang nakakaiwas sa kaguluhan.",
    tools_title: "Mga Tool sa System Administration",
    tools_desc: "Mga industry-standard tools na pinagkadalubhasaan ng bawat SysAdmin. I-click ang card para sa more info at official site.",
    tool_win: "Enterprise OS para sa domain controllers, file servers, at Active Directory.",
    tool_ubuntu: "Sikat na open-source Linux server distribution na ginagamit sa buong mundo.",
    tool_ps: "Makapangyarihang scripting language at shell para sa Windows automation.",
    tool_ssh: "Secure Shell protocol para sa remote server access at management.",
    tool_vbox: "Libreng virtualization platform para magpatakbo ng maraming OS sa isang machine.",
    tool_docker: "Container platform na nagpa-package ng applications kasama ang dependencies.",
    tool_ansible: "Agentless automation tool para sa configuration management at orchestration.",
    tool_nagios: "Industry-standard monitoring system para sa infrastructure at services.",
    play_title: "Subukan ang Code",
    play_desc: "Pumili ng sample, i-edit ito, at pindutin ang Run. Simulated terminal lang ito at walang gagalawin sa totoong computer mo.",
    term_welcome: "Maligayang pagdating sa SysAdmin Playground! I-type ang 'help' para sa available commands.",
    play_editor: "Editor",
    play_output: "Output",
    play_run: "Patakbuhin",
    play_clear: "I-clear ang output",
    about_title: "Tungkol sa Developer",
    dev_course: "BS Information Technology",
    dev_intro: "Masigasig sa pagbuo at pagpapanatili ng maaasahang digital infrastructures. Mahilig akong mag-explore ng Linux, automation, at ang sining ng pagpapanatiling secure at efficient ang mga systems. Ipinapakita ng portfolio na ito ang aking web development skills at lumalaking kaalaman sa System Administration.",
    btn_surprise: "I-activate ang Surprise Effect",
    footer: "© 2026 Joby Ann M. Bonyog • System Administrator Career Portfolio • Ginawa gamit ang 💜 at 🔥"
  }
};

let currentLang = 'en';

// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initParticles();
    animateSkillBars();
    initStudentId();
  }, 2800);

  // Theme Toggle
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  });

  // Language Toggle
  const langBtn = document.getElementById('langToggle');
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tl' : 'en';
    document.getElementById('langLabel').textContent = currentLang.toUpperCase();
    applyTranslations();
  });

  // Mobile Nav
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('.section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  });

  // Tool Cards Click Effect + Modal
  const toolData = {
    windows: {
      title: "Windows Server",
      desc: "Microsoft's enterprise-grade operating system designed for servers. Powers Active Directory, file sharing, IIS web services, and Hyper-V virtualization. Essential for most corporate environments.",
      link: "https://www.microsoft.com/en-us/windows-server",
      icon: "fab fa-windows"
    },
    ubuntu: {
      title: "Ubuntu Server",
      desc: "A free, open-source Linux distribution optimized for servers. Known for ease of use, strong community support, and long-term support (LTS) releases. Widely used for web servers, databases, and cloud instances.",
      link: "https://ubuntu.com/server",
      icon: "fab fa-ubuntu"
    },
    powershell: {
      title: "PowerShell",
      desc: "A cross-platform task automation and configuration management framework from Microsoft. Combines a command-line shell with a powerful scripting language based on .NET. Ideal for automating Windows administration tasks.",
      link: "https://learn.microsoft.com/en-us/powershell/",
      icon: "fas fa-terminal"
    },
    ssh: {
      title: "SSH (Secure Shell)",
      desc: "A cryptographic network protocol for secure remote login and command execution. Replaces insecure protocols like Telnet. The foundation of remote Linux/Unix server management.",
      link: "https://www.openssh.com/",
      icon: "fas fa-lock"
    },
    virtualbox: {
      title: "Oracle VirtualBox",
      desc: "A powerful x86 and AMD64/Intel64 virtualization product for enterprise and home use. Free and open-source. Perfect for testing operating systems, creating labs, and running multiple VMs on a single host.",
      link: "https://www.virtualbox.org/",
      icon: "fas fa-cube"
    },
    docker: {
      title: "Docker",
      desc: "A platform that uses OS-level virtualization to deliver software in packages called containers. Containers are lightweight, portable, and isolate applications from the underlying infrastructure.",
      link: "https://www.docker.com/",
      icon: "fab fa-docker"
    },
    ansible: {
      title: "Ansible",
      desc: "An open-source automation engine that automates software provisioning, configuration management, and application deployment. Agentless — uses SSH. Written in Python and uses YAML playbooks.",
      link: "https://www.ansible.com/",
      icon: "fas fa-cogs"
    },
    nagios: {
      title: "Nagios",
      desc: "A powerful monitoring system that enables organizations to identify and resolve IT infrastructure problems. Monitors servers, switches, applications, and services with alerting capabilities.",
      link: "https://www.nagios.org/",
      icon: "fas fa-heartbeat"
    }
  };

  const modal = document.getElementById('toolModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.tool-link')) return; // let link work normally
      const key = card.dataset.tool;
      const data = toolData[key];
      if (!data) return;

      // Click particle burst
      createClickBurst(e.clientX, e.clientY);

      modalBody.innerHTML = `
        <div style="text-align:center;">
          <div style="font-size:3rem;color:var(--purple-bright);margin-bottom:1rem;">
            <i class="${data.icon}"></i>
          </div>
          <h2 style="font-family:'Orbitron';color:var(--lavender);margin-bottom:1rem;">${data.title}</h2>
          <p style="color:var(--text-muted);line-height:1.7;margin-bottom:1.5rem;">${data.desc}</p>
          <a href="${data.link}" target="_blank" class="btn btn-primary" style="display:inline-flex;">
            <i class="fas fa-external-link-alt"></i> Visit Official Website
          </a>
        </div>
      `;
      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Terminal Playground
  initTerminal();

  // Surprise Effect
  const surpriseBtn = document.getElementById('surpriseBtn');
  const devPic = document.getElementById('devPic');
  const devName = document.getElementById('devName');

  surpriseBtn.addEventListener('click', () => {
    devPic.classList.add('surprised');
    devName.classList.add('surprised');
    createFireworks();
    setTimeout(() => {
      devPic.classList.remove('surprised');
      devName.classList.remove('surprised');
    }, 1200);
  });

  // Click on developer pic also triggers surprise
  devPic.addEventListener('click', () => {
    surpriseBtn.click();
  });

  // Letter hover already in CSS
});

// ========== DRAGGABLE STUDENT ID ==========
function initStudentId() {
  const badge = document.getElementById('studentId');
  const handle = document.getElementById('studentIdHandle');
  const card = badge?.querySelector('.student-id-card');
  const lanyard = document.getElementById('studentIdLanyard');
  const leftFabricPath = document.getElementById('lanyardLeftFabricPath');
  const rightFabricPath = document.getElementById('lanyardRightFabricPath');
  const leftWeavePath = document.getElementById('lanyardLeftWeavePath');
  const rightWeavePath = document.getElementById('lanyardRightWeavePath');
  const leftStitch = document.getElementById('lanyardLeftStitch');
  const rightStitch = document.getElementById('lanyardRightStitch');
  if (!badge || !handle || !card || !lanyard || !leftFabricPath || !rightFabricPath
    || !leftWeavePath || !rightWeavePath || !leftStitch || !rightStitch) return;

  const initialCardRect = card.getBoundingClientRect();
  let idLeft = initialCardRect.left;
  let idTop = initialCardRect.top;
  let originalLeft = idLeft;
  let originalTop = idTop;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navbar = document.getElementById('navbar');
  const rolesSection = document.getElementById('roles');
  let anchorX = idLeft + initialCardRect.width / 2;
  badge.classList.add('is-visible');

  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let activePointerId = null;

  function updateLanyard(time = 0) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cardRect = card.getBoundingClientRect();
    const startY = (navbar?.getBoundingClientRect().bottom ?? 0) + 2;
    const endY = Math.max(startY + 1, cardRect.top + 3);
    const sway = Math.sin(time * 0.0012) * 5;
    const makeStrapPath = (side) => {
      const startX = anchorX + side * 12;
      const endX = cardRect.left + cardRect.width * (side < 0 ? 0.27 : 0.73);
      const length = endY - startY;
      const controlOneX = startX + side * (30 + sway);
      const controlTwoX = endX + side * (30 - sway);
      const controlOneY = startY + length * 0.38;
      const controlTwoY = endY - Math.min(44, length * 0.24);
      return `M ${startX.toFixed(1)} ${startY.toFixed(1)} C ${controlOneX.toFixed(1)} ${controlOneY.toFixed(1)}, ${controlTwoX.toFixed(1)} ${controlTwoY.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;
    };
    const leftPath = makeStrapPath(-1);
    const rightPath = makeStrapPath(1);

    lanyard.setAttribute('viewBox', `0 0 ${width} ${height}`);
    lanyard.setAttribute('width', String(width));
    lanyard.setAttribute('height', String(height));
    leftFabricPath.setAttribute('d', leftPath);
    rightFabricPath.setAttribute('d', rightPath);
    leftWeavePath.setAttribute('d', leftPath);
    rightWeavePath.setAttribute('d', rightPath);
    leftStitch.setAttribute('d', leftPath);
    rightStitch.setAttribute('d', rightPath);
  }

  function setPosition(left, top) {
    const minTop = (navbar?.getBoundingClientRect().bottom ?? 0) + 48;
    const maxLeft = Math.max(0, window.innerWidth - card.offsetWidth);
    const maxTop = Math.max(minTop, window.innerHeight - card.offsetHeight);
    idLeft = Math.min(Math.max(0, left), maxLeft);
    idTop = Math.min(Math.max(minTop, top), maxTop);
    badge.style.setProperty('--id-left', `${idLeft}px`);
    badge.style.setProperty('--id-top', `${idTop}px`);
    updateLanyard();
  }

  setPosition(idLeft, idTop);
  originalLeft = idLeft;
  originalTop = idTop;

  function updateVisibility() {
    if (!rolesSection) return;
    const rolesBottom = rolesSection.getBoundingClientRect().bottom;
    const navbarBottom = navbar?.getBoundingClientRect().bottom ?? 0;
    badge.classList.toggle('is-hidden', rolesBottom <= navbarBottom);
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  let animationFrame;
  function waveLanyard(time) {
    if (!document.hidden && !reduceMotion.matches) updateLanyard(time);
    animationFrame = window.requestAnimationFrame(waveLanyard);
  }
  if (!reduceMotion.matches) animationFrame = window.requestAnimationFrame(waveLanyard);

  reduceMotion.addEventListener('change', () => {
    window.cancelAnimationFrame(animationFrame);
    updateLanyard();
    if (!reduceMotion.matches) animationFrame = window.requestAnimationFrame(waveLanyard);
  });

  card.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    if (activePointerId !== null) return;
    activePointerId = event.pointerId;
    badge.classList.add('is-dragging');
    const rect = card.getBoundingClientRect();
    dragOffsetX = event.clientX - rect.left;
    dragOffsetY = event.clientY - rect.top;
    card.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  card.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointerId) return;
    setPosition(event.clientX - dragOffsetX, event.clientY - dragOffsetY);
  });

  function stopDragging(event) {
    if (event.pointerId !== activePointerId) return;
    activePointerId = null;
    badge.classList.remove('is-dragging');
    setPosition(originalLeft, originalTop);
    badge.classList.add('is-returning');
  }

  card.addEventListener('animationend', (event) => {
    if (event.target !== card) return;
    if (event.animationName === 'studentIdDrop') badge.classList.add('has-entered');
    if (event.animationName === 'studentIdReturn') badge.classList.remove('is-returning');
  });

  card.addEventListener('pointerup', stopDragging);
  card.addEventListener('pointercancel', stopDragging);
  card.addEventListener('lostpointercapture', stopDragging);
  handle.addEventListener('keydown', (event) => {
    const directions = {
      ArrowUp: [0, -12],
      ArrowDown: [0, 12],
      ArrowLeft: [-12, 0],
      ArrowRight: [12, 0]
    };
    const direction = directions[event.key];
    if (!direction) return;

    event.preventDefault();
    setPosition(idLeft + direction[0], idTop + direction[1]);
  });

  window.addEventListener('resize', () => {
    badge.style.removeProperty('--id-left');
    badge.style.removeProperty('--id-top');
    const defaultRect = card.getBoundingClientRect();
    originalLeft = defaultRect.left;
    originalTop = defaultRect.top;
    setPosition(originalLeft, originalTop);
    anchorX = card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2;
    updateLanyard();
    updateVisibility();
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !reduceMotion.matches) updateLanyard(performance.now());
  });
}

// ========== TRANSLATIONS APPLY ==========
function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // Preserve icons inside buttons
      const icon = el.querySelector('i');
      if (icon) {
        el.innerHTML = icon.outerHTML + ' ' + t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
}

// ========== SKILL BARS ANIMATION ==========
function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

// ========== PARTICLES ==========
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.color = Math.random() > 0.5 
        ? `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.2})` 
        : `rgba(249, 115, 22, ${Math.random() * 0.4 + 0.15})`;
      this.life = Math.random() * 100 + 50;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      if (this.life <= 0 || this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== CLICK BURST ==========
function createClickBurst(x, y) {
  const colors = ['#a855f7', '#c084fc', '#f97316', '#fb923c', '#e9d5ff'];
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 6px;
      height: 6px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 6px currentColor;
    `;
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 20;
    const velocity = 2 + Math.random() * 4;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    let opacity = 1;
    let px = x, py = y;

    function move() {
      px += vx;
      py += vy;
      opacity -= 0.02;
      particle.style.left = px + 'px';
      particle.style.top = py + 'px';
      particle.style.opacity = opacity;
      if (opacity > 0) {
        requestAnimationFrame(move);
      } else {
        particle.remove();
      }
    }
    requestAnimationFrame(move);
  }
}

// ========== FIREWORKS ==========
function createFireworks() {
  const colors = ['#a855f7', '#c084fc', '#f97316', '#fb923c', '#e9d5ff', '#60a5fa'];
  for (let burst = 0; burst < 3; burst++) {
    setTimeout(() => {
      const x = window.innerWidth * (0.3 + Math.random() * 0.4);
      const y = window.innerHeight * (0.2 + Math.random() * 0.3);
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 5px;
          height: 5px;
          background: ${color};
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          box-shadow: 0 0 8px ${color};
        `;
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 3 + Math.random() * 6;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        let opacity = 1;
        let px = x, py = y;
        let life = 60 + Math.random() * 40;

        function move() {
          px += vx;
          py += vy + 0.15; // gravity
          opacity -= 0.015;
          life--;
          particle.style.left = px + 'px';
          particle.style.top = py + 'px';
          particle.style.opacity = opacity;
          if (life > 0 && opacity > 0) {
            requestAnimationFrame(move);
          } else {
            particle.remove();
          }
        }
        requestAnimationFrame(move);
      }
    }, burst * 200);
  }
}

// ========== TERMINAL ==========
function initTerminal() {
  const body = document.getElementById('terminalBody');
  const editor = document.getElementById('playgroundEditor');
  const runButton = document.getElementById('runScript');
  const clearButton = document.getElementById('clearOutput');
  const tabs = document.querySelectorAll('.playground-tab');
  let activeRun = 0;
  const scripts = {
    bash: `# Check the health of a Linux server
whoami
uptime
df -h
free -m
systemctl status ssh`,
    powershell: `# Check the health of a Windows server
$env:COMPUTERNAME
Get-Service -Name sshd
Get-PSDrive -PSProvider FileSystem`,
    ssh: `# Connect to a remote Linux server
ssh sysadmin@192.168.1.100
hostname
uptime
exit`,
    backup: `# Create and verify a backup archive
tar -czf /backup/etc-backup.tar.gz /etc
ls -lh /backup/etc-backup.tar.gz`
  };

  const commands = {
    help: () => `Available commands:
help          - Show this help message
whoami        - Display current user
hostname      - Show system hostname
uptime        - System uptime
df -h         - Disk space usage
free -m       - Memory usage
ps aux        - Running processes
uname -a      - System information
ip addr       - Network interfaces
systemctl status ssh - SSH service status
clear         - Clear output
date          - Current date & time
echo [text]   - Print text
ls            - List directory
pwd           - Print working directory
neofetch      - System summary
PowerShell, SSH, and backup samples include additional commands.`,
    whoami: () => 'sysadmin',
    hostname: () => 'portfolio-server',
    uptime: () => 'up 42 days, 13:37,  3 users,  load average: 0.42, 0.38, 0.35',
    'df -h': () => `Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        98G   42G   51G  46% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
/dev/sdb1       500G  320G  180G  64% /data`,
    'free -m': () => `              total        used        free      shared  buff/cache   available
Mem:           7951        2145        3120         142        2686        5420
Swap:          2047           0        2047`,
    'ps aux': () => `USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 169516 11240 ?        Ss   Jan01   0:12 /sbin/init
sysadmin  1337  0.2  1.5 458920 98760 ?        S    10:00   0:45 node server.js
root       842  0.0  0.0  21756  1540 ?        Ss   Jan01   0:01 /usr/sbin/sshd
www-data  2048  0.1  0.8 312440 65432 ?        S    09:30   0:22 nginx: worker`,
    'uname -a': () => 'Linux portfolio-server 6.5.0-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux',
    'ip addr': () => `1: lo: <LOOPBACK,UP> mtu 65536
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,UP> mtu 1500
    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0`,
    date: () => new Date().toString(),
    ls: () => `bin  boot  data  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var`,
    pwd: () => '/home/sysadmin',
    neofetch: () => `       _nnnn_
      dGGGGMMb
     @p~qp~~qMb     sysadmin@portfolio-server
     M|@||@) M|     OS: Portfolio Linux 2026
     @,----.JM|     Kernel: 6.5.0-generic
    JS^\\__/  qKL    Uptime: 42 days
   dZP        qKRb  Shell: bash 5.2
  dZP          qKRb Terminal: SysAdmin Playground
 fZP            SMMb CPU: Virtual 4-core
FZPxx          ..YMMb Memory: 2145 / 7951 MB
        MMM`,
    'systemctl status ssh': () => `ssh.service - OpenBSD Secure Shell server
     Active: active (running)
       Docs: man:sshd(8)
             man:sshd_config(5)`,
    '$env:COMPUTERNAME': () => 'PORTFOLIO-SERVER',
    'Get-Service -Name sshd': () => `Status   Name   DisplayName
------   ----   -----------
Running  sshd   OpenSSH SSH Server`,
    'Get-PSDrive -PSProvider FileSystem': () => `Name  Used (GB)  Free (GB)  Provider  Root
C       42.18      57.82    FileSystem C:\\`,
    'ssh sysadmin@192.168.1.100': () => `Connected to 192.168.1.100 as sysadmin.
Last login: today from 192.168.1.25`,
    exit: () => 'Connection closed.',
    'tar -czf /backup/etc-backup.tar.gz /etc': () => 'Created archive: /backup/etc-backup.tar.gz (2.4 MB)',
    'ls -lh /backup/etc-backup.tar.gz': () => '-rw-r--r-- 1 sysadmin sysadmin 2.4M /backup/etc-backup.tar.gz'
  };

  function addLine(text, className) {
    const line = document.createElement('div');
    line.className = 'term-line';
    line.textContent = text;
    if (className) line.classList.add(className);
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    return line;
  }

  async function typeLine(text, className, runId) {
    const line = addLine('', className);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      line.textContent = text;
      return activeRun === runId;
    }

    body.classList.add('is-typing');
    for (const character of text) {
      if (activeRun !== runId) return false;
      line.textContent += character;
      body.scrollTop = body.scrollHeight;
      await new Promise(resolve => setTimeout(resolve, 9));
    }
    return activeRun === runId;
  }

  async function runScript() {
    const runId = ++activeRun;
    body.innerHTML = '';
    body.classList.remove('is-typing');
    const lines = editor.value.split(/\r?\n/);

    for (const sourceLine of lines) {
      if (activeRun !== runId) return;
      const command = sourceLine.trim();
      if (!command || command.startsWith('#')) continue;

      if (command === 'clear') {
        body.innerHTML = '';
        continue;
      }

      if (!await typeLine(command, 'term-command', runId)) return;

      let result;
      if (/^echo\s+/i.test(command)) {
        result = command.replace(/^echo\s+/i, '');
      } else {
        const handler = commands[command];
        result = handler ? handler() : `Command not found: ${command}`;
      }

      if (result) {
        const resultClass = commands[command] || /^echo\s+/i.test(command) ? 'term-output' : 'term-error';
        if (!await typeLine(result, resultClass, runId)) return;
      }
      await new Promise(resolve => setTimeout(resolve, 120));
    }

    if (activeRun === runId) body.classList.remove('is-typing');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeRun++;
      body.classList.remove('is-typing');
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
      });
      editor.value = scripts[tab.dataset.script];
      body.innerHTML = '';
    });
  });

  runButton.addEventListener('click', runScript);
  clearButton.addEventListener('click', () => {
    activeRun++;
    body.classList.remove('is-typing');
    body.innerHTML = '';
  });

  editor.value = scripts.bash;
  runScript();
}
