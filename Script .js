<script>
  const textEl = document.querySelector(".typewriter-text");
  const text = "Hi, I'm Anshuman";
  let index = 0;
  let isDeleting = false;

  function typeWriterEffect() {
    if (!isDeleting && index <= text.length) {
      textEl.textContent = text.substring(0, index);
      index++;
      setTimeout(typeWriterEffect, 100);
    } else if (isDeleting && index >= 0) {
      textEl.textContent = text.substring(0, index);
      index--;
      setTimeout(typeWriterEffect, 50);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeWriterEffect, 1000); // wait before switching direction
    }
  }

  typeWriterEffect();
</script>
