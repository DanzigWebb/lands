const likeControl = () => {
  const likesArea = document.querySelectorAll('.post-heading__likes');
  likesArea.forEach(item => {
    const [index, like] = item.children;
    const [img] = like.children;
    like.addEventListener('click', () => {
      index.innerHTML = 1;
      img.src = 'img/heart1.svg';
    });
  });
}

var vm = new Vue({
  el: '#app',
  
  mounted() {
    likeControl()
  },
})