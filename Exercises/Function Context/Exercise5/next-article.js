function getArticleGenerator(articles) {

    document.querySelector('#on-click')
    .addEventListener('click', onClick);

    function onClick() {
    let content = document.getElementById('content');
    let existingArticles = content.children.length;

    let article = document.createElement('article');

    article.textContent = articles[existingArticles % articles.length];

    content.appendChild(article);
    }

}
