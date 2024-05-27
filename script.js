function openLink(url) {
    window.open(url, '_blank');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const profilePic = document.getElementById('profile-pic');
  
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => { //mouseover(emcima)
        button.style.backgroundColor = 'rgb(255,255,255)';
        button.style.color='rgb(0, 0, 0, 1)'
      });
  
      button.addEventListener('mouseout', () => { //mouseout(fora)
        button.style.backgroundColor = '#0eb17b';
      });
  
      button.addEventListener('click', () => {
        button.style.backgroundColor = 'rgb(218, 245, 217, 0.01)';
        setTimeout(() => {
          button.style.backgroundColor = '#0eb17b';
        }, 200);
      });
    });
  
    profilePic.addEventListener('click', () => {
      profilePic.classList.toggle('clicked');
    });
  });
  