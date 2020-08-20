function createArticle() {


	let createTitle = 
	document.getElementById('createTitle')
	let createContent = 
	document.getElementById('createContent');
	let articleSection =
    document.getElementById('articles')

	let titleText = createTitle.value;
	let contentText = createContent.value;

	if (!titleText || !contentText) {
		return
	}

	let newArticle = document.createElement('article');
	let newTitle = document.createElement('h3')
	let newContent = document.createElement('p');

	newArticle.appendChild(newTitle);
	newArticle.appendChild(newContent);

	newContent.innerText = contentText;
	newTitle.innerText = titleText;
	
	articleSection.appendChild(newArticle);

	createTitle.value = '';
	createContent.value = '';
}