function createArticle() {

	let titleParam = 
	document.querySelector('#createTitle');
	let contentParam = 
	document.querySelector('#createContent');


	let titleInput = titleParam
	.value;
	let contentInput = contentParam
	.value;	

	if (!titleInput || !contentInput) {
		titleParam.innerText = '';
	contentParam.innerText = '';
		return;
	}

	let newArticle = document.createElement('article');
	let newTitle = document.createElement('h3');
	let newContent = document.createElement('p');

	newTitle.innerText = titleInput;
	newContent.innerText = contentInput;

	newArticle.appendChild(newTitle);
	newArticle.appendChild(newContent);

	let allArticles = 
	document.querySelector('#articles');

	allArticles.appendChild(newArticle);

	titleParam.value = '';
	contentParam.value = '';
}