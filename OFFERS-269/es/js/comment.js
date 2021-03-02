    // const placeholders = {
//   inputs: {
//     name: "Imie",
//     text: "Napisz komentarz"
//   },
//   buttons: {
//     answer: "Odpowiedz",
//     add: "Dodaj komentarz"
//   }
// };
const validators = {
	name: (name) => {
		if (!name.length > 0) throw new Error('Pole "imię" nie moLze być puste.');
	},
	email: (email) => {
		if (!email.length > 0) throw new Error('Pole "e-mail" nie moLze być puste.');
	},
	content: (content) => {
		if (!content.length > 0) throw new Error('TreL�ć komentarza nie moLze być pusta.');
	}
};
const classNames = {
	allCommentsWrapper: 'allComs',
	commentWrapper: 'article',
	allAnswerWrppers: 'fbFeedbackReplies',
	answerWrapper: 'fbCommentReply',
	answerButton: 'answer-button'
};



const mainComment = (comment, position) => {
	const answerHtml = ` <img src="assets/avatar.png" alt="" style="width: 41px; height: 41px;">
	<div>
		<h3>${comment.name}<span>${comment.date}</span></h3>
		<p>${comment.content}</p>
	</div>`;
	const article = document.createElement('article');

	article.innerHTML = answerHtml;
	return article;
};

const insertAnswerForm = (ev) => {
	let commentNode = findParent(ev.target, classNames.commentWrapper);

	if (commentNode && !commentNode.querySelector('form')) {
		commentNode.appendChild(createCommentForm());
	}
};
const writeComment = (ev, comment) => {
	comment.date = formatDate();
	const position = false;
	const commentElement = mainComment(comment, position);
	const commentAdded = insertComment(
		commentElement,
		position,
		classNames.commentWrapper,
		classNames.allAnswerWrppers,
		classNames.answerWrapper,
		true,
		true
	);
	commentAdded.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
		inline: 'nearest'
	});
	//const button = commentAdded.querySelector(`.${classNames.answerButton}`);

	//button.addEventListener("click", insertAnswerForm, true);
	if (position) {
		ev.target.parentNode.removeChild(ev.target);
	} else {
		const commentInputs = ev.target.querySelectorAll('input, textarea');
		commentInputs.forEach((input) => {
			input.value = '';
		});
	}
	comment.position = position;
	saveInLocalStorage(comment);
};
const saveInLocalStorage = (comment) => {
	localStorage.setItem(JSON.stringify(new Date()), JSON.stringify(comment));
};
const loadAllCommentsFromStorage = () => {
	let allComments = {
		...localStorage
	};
	const keysSorted = [];
	for (let key in allComments) {
		keysSorted.push(key);
	}
	keysSorted.sort(function(a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	try {
		keysSorted.forEach((key) => {
			const comment = JSON.parse(allComments[key]);
			if (key && comment.name && comment.content) {
				const commentNode = mainComment(
					{
						name: comment.name,
						content: comment.content,
						date: formatDate()
					},
					comment.position
				);
				const commentAdded = insertComment(
					commentNode,
					comment.position,
					classNames.commentWrapper,
					classNames.allAnswerWrppers,
					classNames.answerWrapper,
					true,
					true
				);
				//const button = commentAdded.querySelector(`.${classNames.answerButton}`);
				//button.addEventListener("click", insertAnswerForm, true);
			}
		});
	} catch (err) {
		localStorage.clear();
	}
};

const createCommentForm = () => {
	const commentForm = document.createElement('form');
	commentForm.classList.add('write-comment');
	const nameInput = document.createElement('input');
	nameInput.classList.add('comment-name');
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('placeholder', placeholders.inputs.name);
	commentForm.appendChild(nameInput);
	const textInput = document.createElement('textarea');
	textInput.classList.add('comment-text');
	textInput.setAttribute('name', 'commentText');
	textInput.setAttribute('placeholder', placeholders.inputs.text);
	commentForm.appendChild(textInput);
	const buttonWrapper = document.createElement('div');
	buttonWrapper.classList.add('button-wrapper');
	const button = document.createElement('button');
	button.classList.add(classNames.answerButton);
	button.classList.add('add-new');
	button.innerHTML = placeholders.buttons.add;
	button.setAttribute('type', 'submit');
	buttonWrapper.appendChild(button);
	commentForm.appendChild(buttonWrapper);
	return commentForm;
};
const findParent = (element, className) => {
	let elementParent = element.parentNode;
	while (elementParent) {
		if (elementParent.classList && elementParent.classList.contains(className)) {
			return elementParent;
		}
		elementParent = elementParent.parentNode;
	}
	return;
};

const getCommentPosition = (element, commentWrapperName) => {
	const commentWrapper = findParent(element, commentWrapperName);
	if (!commentWrapper) return;

	const position = countSiblings(commentWrapper, commentWrapperName);
	return position;
};

const insertComment = (
	comment,
	position,
	commentWrapperName,
	answerWrapperName,
	answerClassName,
	isCommentTop = true,
	isAnswerTop = true
) => {
	const allComments = document.querySelector(`.${classNames.allCommentsWrapper}`).querySelectorAll(`${commentWrapperName}`);
	//   if (position) {
	//     const commentWrapper = allComments[position - 1];
	//     const answerWrapper = commentWrapper.querySelector(`.${answerWrapperName}`);
	//     const allAnsSiblings = commentWrapper.querySelectorAll(
	//       `.${answerClassName}`
	//     );
	//     const ansPosition = isAnswerTop ? 0 : allAnsSiblings.length;
	//     return answerWrapper.insertBefore(comment, allAnsSiblings[ansPosition]);
	//   }
	const comPosition = isCommentTop ? 0 : allComments.length;
	const commentWrapper = document.querySelector(`.${classNames.allCommentsWrapper}`);
	
	return commentWrapper.insertBefore(comment, allComments[comPosition]);
};
const countSiblings = (element, siblingClassName) => {
	let counter = 0;
	while (element) {
		if (element.classList && element.classList.contains(siblingClassName)) {
			counter++;
		}
		element = element.previousSibling;
	}
	return counter;
};

const findSibling = (firstElement, counter, siblingClassName) => {
	while (counter > 0) {
		if (firstElement.classList && firstElement.classList.contains(siblingClassName)) {
			counter--;
		}
		firstElement = firstElement.nextSibling;
	}
	return firstElement;
};

const formatDate = () => {
	function getDateStr() {
		var Today = new Date();
		var WeekDay = Today.getDay();
		var Month = Today.getMonth();
		var Day = Today.getDate() + 1;
		var Year = Today.getFullYear();

		if (Year <= 99) Year += 1900;

		return '<span>' + ' ' + Day + ' ' + MonthName[Month] + ' ' + Year + ',</span> ';
	}

	function dtime(d, type) {
		// Array of day names

		var dayNames;
		var now = new Date();
		var month = now.getMonth() + 1;
		if (now.getDate() + d + 1 < 1) {
			month--;
		}
		if (month < 10) {
			var month = '0' + month;
		}
		now.setDate(now.getDate() + d + 1);
		return dayNames[now.getDay()] + ' ' + now.getDate() + '.' + month + '.' + now.getFullYear();
	}
	return dtime(-1, 1);
};




loadAllCommentsFromStorage();
    