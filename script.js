// پر شدن مهارت‌ها
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fillProgressBars();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  skillsObserver.observe(skillsSection);
}

function fillProgressBars() {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const skill = bar.getAttribute("data-skill");
    bar.style.width = skill + "%";
  });
}

// پر شدن مهارت‌ها با انیمیشن count-up
function animateSkillBar(bar) {
  const target = parseInt(bar.getAttribute('data-skill'));
  let count = 0;
  const interval = setInterval(() => {
    if (count >= target) {
      clearInterval(interval);
    } else {
      count++;
      bar.style.width = count + '%';
      bar.textContent = count + '%';
    }
  }, 15); // سرعت انیمیشن
}

const skillsSection2 = document.getElementById('skills');
if (skillsSection2) {
  const skillsObserver2 = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.progress-bar').forEach(bar => {
          animateSkillBar(bar);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  skillsObserver2.observe(skillsSection2);
}


// Navbar Active Link
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.6 });
sections.forEach(sec => sectionObserver.observe(sec));

// بستن Navbar در موبایل بعد کلیک
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
