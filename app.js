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

const imgLikesEl = document.createElement('button');
imgLikesEl.className = 'btn btn-success';
imgLikesEl.textContent = '❤' + postImg.likes;
imgLikesEl.onclick = function () {
    postImg.likes = postImg.likes + 1;
    imgLikesEl.textContent = '❤' + postImg.likes;
};
const imgDislikesEl = document.createElement('button');
imgDislikesEl.className = 'btn btn-dark';
imgDislikesEl.textContent = '👎' + postImg.dislikes;
imgDislikesEl.onclick = function () {
    postImg.dislikes = postImg.dislikes + 1;
    imgDislikesEl.textContent = '👎' + postImg.dislikes;
};
postImgBodyEl.appendChild(imgLikesEl);
postImgBodyEl.appendChild(imgDislikesEl);

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

const videoLikesEl = document.createElement('button');
videoLikesEl.className = 'btn btn-success';
videoLikesEl.textContent = '❤' + postVideo.likes;
videoLikesEl.onclick = function () {
    postVideo.likes = postVideo.likes + 1;
    videoLikesEl.textContent = '❤' + postVideo.likes;
};
const videoDislikesEl = document.createElement('button');
videoDislikesEl.className = 'btn btn-dark';
videoDislikesEl.textContent = '👎' + postVideo.dislikes;
videoDislikesEl.onclick = function () {
    postVideo.dislikes = postVideo.dislikes + 1;
    videoDislikesEl.textContent = '👎' + postVideo.dislikes;
};
postVideoBodyEl.appendChild(videoLikesEl);
postVideoBodyEl.appendChild(videoDislikesEl);

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

const audioLikesEl = document.createElement('button');
audioLikesEl.className = 'btn btn-success';
audioLikesEl.textContent = '❤' + postAudio.likes;
audioLikesEl.onclick = function () {
    postAudio.likes = postAudio.likes + 1;
    audioLikesEl.textContent = '❤' + postAudio.likes;
};
const audioDislikesEl = document.createElement('button');
audioDislikesEl.className = 'btn btn-dark';
audioDislikesEl.textContent = '👎' + postAudio.dislikes;
audioDislikesEl.onclick = function () {
    postAudio.dislikes = postAudio.dislikes + 1;
    audioDislikesEl.textContent = '👎' + postAudio.dislikes;
};
postAudioBodyEl.appendChild(audioLikesEl);
postAudioBodyEl.appendChild(audioDislikesEl);


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

const textLikesEl = document.createElement('button');
textLikesEl.className = 'btn btn-success';
textLikesEl.textContent = '❤' + postText.likes;
textLikesEl.onclick = function () {
    postText.likes = postText.likes + 1;
    textLikesEl.textContent = '❤' + postText.likes;
};
const textDislikesEl = document.createElement('button');
textDislikesEl.className = 'btn btn-dark';
textDislikesEl.textContent = '👎' + postText.dislikes;
textDislikesEl.onclick = function () {
    postText.dislikes = postText.dislikes + 1;
    textDislikesEl.textContent = '👎' + postText.dislikes;
};
postTextBodyEl.appendChild(textLikesEl);
postTextBodyEl.appendChild(textDislikesEl);


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