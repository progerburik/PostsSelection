const rootEl = document.getElementById('root');

const postImg = {
    content: 'Образ на страничке',
    imageUrl: 'https://placekitten.com/200/200',
    likes: 0,
    dislikes: 0,
};
const postImgEl = document.createElement('div');
const imgEl = document.createElement('img');
imgEl.src = postImg.imageUrl;
imgEl.className = 'card-img-top';
postImgEl.appendChild(imgEl);

const postImgBodyEl = document.createElement('div');
postImgBodyEl.className = 'card-body';
postImgEl.appendChild(postImgBodyEl);

const postImgContentEl = document.createElement('p');
postImgContentEl.textContent = postImg.content;
postImgBodyEl.appendChild(postImgContentEl);

const likesEl = document.createElement('button');
likesEl.className = 'btn btn-success';
likesEl.textContent = '❤' + postImg.likes;
likesEl.onclick = function () {
    postImg.likes = postImg.likes + 1;
    likesEl.textContent = '❤' + postImg.likes;
};
const dislikesEl = document.createElement('button');
dislikesEl.className = 'btn btn-dark';
dislikesEl.textContent = '👎' + postImg.dislikes;
dislikesEl.onclick = function () {
    postImg.dislikes = postImg.dislikes + 1;
    dislikesEl.textContent = '👎' + postImg.dislikes;
};
postImgBodyEl.appendChild(likesEl);
postImgBodyEl.appendChild(dislikesEl);

const postVideo = {
    content: 'Видео на страничке',
    videoUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    likes: 0,
    dislikes: 0,
};
const postVideoEl = document.createElement('div');
const videoEl = document.createElement('video');
videoEl.controls = "controls";
videoEl.className = 'card-img-top';
videoEl.src = postVideo.videoUrl;
postVideoEl.appendChild(videoEl);

const postVideoBodyEl = document.createElement('div');
postVideoBodyEl.className = 'card-body';
postVideoEl.appendChild(postVideoBodyEl);

const postVideoContentEl = document.createElement('p');
postVideoContentEl.textContent = postVideo.content;
postVideoBodyEl.appendChild(postVideoContentEl);

const likesEl2 = document.createElement('button');
likesEl2.className = 'btn btn-success';
likesEl2.textContent = '❤' + postVideo.likes;
likesEl2.onclick = function () {
    postVideo.likes = postVideo.likes + 1;
    likesEl2.textContent = '❤' + postVideo.likes;
};
const dislikesEl2 = document.createElement('button');
dislikesEl2.className = 'btn btn-dark';
dislikesEl2.textContent = '👎' + postVideo.dislikes;
dislikesEl2.onclick = function () {
    postVideo.dislikes = postVideo.dislikes + 1;
    dislikesEl2.textContent = '👎' + postVideo.dislikes;
};
postVideoBodyEl.appendChild(likesEl2);
postVideoBodyEl.appendChild(dislikesEl2);

const postAudio = {
    content: 'Аудио на страничке',
    audioUrl: 'https://dl3.ru-music.я.ws/mp3/2878.mp3?olga-rozhdestvenskaya_-_pesenka-o-snezhinke.mp3',
    likes: 0,
    dislikes: 0,
};
const postAudioEl = document.createElement('div');
const audioEl = document.createElement('audio');
audioEl.controls = "controls";
audioEl.className = 'card-img-top';
audioEl.src = postAudio.audioUrl;
postAudioEl.appendChild(audioEl);

const postAudioBodyEl = document.createElement('div');
postAudioBodyEl.className = 'card-body';
postAudioEl.appendChild(postAudioBodyEl);

const postAudioContentEl = document.createElement('p');
postAudioContentEl.textContent = postAudio.content;
postAudioBodyEl.appendChild(postAudioContentEl);

const likesEl3 = document.createElement('button');
likesEl3.className = 'btn btn-success';
likesEl3.textContent = '❤' + postAudio.likes;
likesEl3.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    likesEl3.textContent = '❤' + postAudio.likes;
};
const dislikesEl3 = document.createElement('button');
dislikesEl3.className = 'btn btn-dark';
dislikesEl3.textContent = '👎' + postAudio.dislikes;
dislikesEl3.onclick = function () {
    postAudio.dislikes = postAudio.dislikes + 1;
    dislikesEl3.textContent = '👎' + postAudio.dislikes;
};
postAudioBodyEl.appendChild(likesEl3);
postAudioBodyEl.appendChild(dislikesEl3);


const postText = {
    content: 'Текст на страничке',
    likes: 0,
    dislikes: 0,
};
const postTextEl = document.createElement('div');
const textEl = document.createElement('text');
postTextEl.appendChild(textEl);

const postTextBodyEl = document.createElement('div');
postTextBodyEl.className = 'card-body';
postTextEl.appendChild(postTextBodyEl);

const postTextContentEl = document.createElement('p');
postTextContentEl.textContent = postText.content;
postTextBodyEl.appendChild(postTextContentEl);

const likesEl4 = document.createElement('button');
likesEl4.className = 'btn btn-success';
likesEl4.textContent = '❤' + postText.likes;
likesEl4.onclick = function () {
    postText.likes = postText.likes + 1;
    likesEl4.textContent = '❤' + postText.likes;
};
const dislikesEl4 = document.createElement('button');
dislikesEl4.className = 'btn btn-dark';
dislikesEl4.textContent = '👎' + postText.dislikes;
dislikesEl4.onclick = function () {
    postText.dislikes = postText.dislikes + 1;
    dislikesEl4.textContent = '👎' + postText.dislikes;
};
postTextBodyEl.appendChild(likesEl4);
postTextBodyEl.appendChild(dislikesEl4);


const links = [];
const addFormEl = document.createElement('form');

addFormEl.innerHTML = `
    <input data-id="link">
    <select data-id="type">
        <option value="text">Текст</option>
        <option value="image">Изображение</option>
        <option value="audio">Аудио</option>
        <option value="video">Видео</option>
    </select>
    <button>Ok</button>
`;
addFormEl.onsubmit = function (ev) {
    ev.preventDefault();

    const linkEl = addFormEl.querySelector('[data-id=link]');
    const typeEl = addFormEl.querySelector('[data-id=type]');
    const value = linkEl.value;
    const type = typeEl.value;
    console.dir(type);

    links.push({
        value,
        type,
    });
    rebuildList(linksEl, links);
};
rootEl.appendChild(addFormEl);

const linksEl = document.createElement('ul');
rootEl.appendChild(linksEl);

function rebuildList(containerEl, items) {
    containerEl.innerHTML = '';
    for (const item of items) {

        if (item.type == "image") {
            rootEl.appendChild(postImgEl);
            console.log(postImgEl);
        }
        else if (item.type == "audio") {
            rootEl.appendChild(postAudioEl);
            console.log(postAudioEl);
        }
        else if (item.type == "video") {
            rootEl.appendChild(postVideoEl);
            console.log(postVideoEl);
        }
        else if (item.type == "text") {
            rootEl.appendChild(postTextEl);
            console.log(postTextEl);
        }
    }
};