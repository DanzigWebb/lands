const likeControl = () => {
  const likesArea = document.querySelectorAll('.post-heading__likes');
  likesArea.forEach(item => {
    const [index, like] = item.children;
    const [img] = like.children;
    like.addEventListener('click', () => {
      if (index.innerHTML) {
        index.innerHTML = '';
        img.src = 'img/heart.svg';
      }
      else {
        index.innerHTML = 1;
        img.src = 'img/heart1.svg';
      }

    });
  });
};

likeControl()
// showPost()

const showPost = () => {
  const posts = $('.post-and-preview');
  const showAllBtn = $('.blog__all-posts');
  const toTop = $('.blog__top');
  const preloader = $('.preloader')
  const blog = $('.blog');

  const hideAllElements = (elems) => {
    elems.each((index, item) => {
      $(item).fadeOut()
    })
  };
  const showAllPosts = () => {
    posts.each((i, item) => {
      const [posts, preview] = $(item).children();
      $(posts).fadeOut();
      $(preview).fadeIn()
    })
  }

  // listeners
  showAllBtn.on('click', () => showAllPosts())
  toTop.on('click', () => window.scrollTo(0, blog.offset().top))

  posts.on('click', function (e) {
    const { target } = e;
    const validTarget = target.matches('.post-heading__title') || target.matches('.post__section--preview') ? true : false
    if (validTarget) {
      const [post] = $(this).children();
      preloader.fadeIn()
      hideAllElements($('article.post'));
      setTimeout(() => {
        $(post).show()
        preloader.fadeOut();
      }, 500);
      window.scrollTo(0, blog.offset().top)
    }
  })
}

showPost()
