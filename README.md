# Anshuman-portfolio
I love creating beautiful, responsive, and user-friendly websites. 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Anshuman | Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet" />
</head>
<body>
  <header id="header">
    <div class="container">
      <h1 class="logo">Work Web by Anshuman<span>.</span></h1>
      <div class="toggle-btn" onclick="toggleMenu()">☰</div>
<nav>
  <ul class="nav-links">
    <!-- nav items -->
  </ul>
</nav>

      <div class="toggle-btn" onclick="toggleMenu()">☰</div>
      <nav>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero" id="home">
    <div class="hero-text" data-aos="fade-right">
      <h3>UI/UX Designer | Web Developer</h3>
      <h1><span class="typewriter-text"></span></h1>
      <p>AKS UNIVERSITY, SATNA</p>
      <a href="#contact" class="btn">Contact Me</a>
    </div>
    <div class="hero-image" data-aos="fade-left">
     
    </div>
  </section>

  <section class="section" id="about" data-aos="fade-up">
    <h2>About Me</h2>
    <p>
      Hi, I'm Anshuman Namdev, a passionate UI/UX Designer and Frontend Web Developer from India.
      I love creating beautiful, responsive, and user-friendly websites.
      Currently pursuing B.Tech in Computer Science, I have a strong focus on building practical projects that solve real-world problems.
    </p>
  </section>

  <section class="section" id="services" data-aos="fade-up">
    <h2>Services</h2>
    <div class="services-list">
      <div class="service-item">
        <h3>Website Design</h3>
        <p>Modern and responsive website designs using latest web technologies.</p>
      </div>
      <div class="service-item">
        <h3>UI/UX Design</h3>
        <p>Designing user-friendly, attractive, and intuitive mobile and web interfaces.</p>
      </div>
      <div class="service-item">
        <h3>Web Development</h3>
        <p>Frontend development with HTML, CSS, JavaScript, and integration with Firebase.</p>
      </div>
    </div>
  </section>

  <section class="section" id="portfolio" data-aos="fade-up">
    <h2>Portfolio</h2>
    <ul>
      <li>✔ Online Quiz Platform (with certificate generation)</li>
      <li>✔ Skill-based Earning Platform (Node.js)</li>
      <li>✔ Attendance Portal (with admin and multi-class support)</li>
      <li>✔ Personal Portfolio Website (this one!)</li>
    </ul>
  </section>

  <section class="section" id="contact" data-aos="fade-up">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:anshumannamdeO6@gmail.com">anshumannamdeO6@gmail.com</a></p>
    <p>Phone: +91 8878020341</p>
    <a href="mailto:anshumannamdeO6@gmail.com" class="btn">Send Email</a>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();

    window.addEventListener('scroll', function () {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const textEl = document.querySelector(".typewriter-text");
    const text = "Hi, I'm Anshuman";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!isDeleting && index <= text.length) {
        textEl.textContent = text.substring(0, index);
        index++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && index >= 0) {
        textEl.textContent = text.substring(0, index);
        index--;
        setTimeout(typeEffect, 50);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1000);
      }
    }
    typeEffect();

    // Toggle menu
    function toggleMenu() {
      document.querySelector('.nav-links').classList.toggle('show');
    }
  </script>
</body>
</html>
