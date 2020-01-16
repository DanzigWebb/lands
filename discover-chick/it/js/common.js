const likeControl = () => {
  const likesArea = document.querySelectorAll('.post-heading__likes');
  likesArea.forEach(item => {
    const [index, like] = item.children;
    like.addEventListener('click', () => {
      index.innerHTML = 1;
      like.children[0].src = 'img/heart1.svg'
    });
  });
}

likeControl()