      // JavaScript to handle progress bar
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        const progressBar = document.getElementById('progressBar');
        progressBar.style.transform = `scaleX(${scrollProgress / 100})`;
    });
    