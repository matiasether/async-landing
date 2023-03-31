const API='https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=5';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a29d63a90msh63f5054b75dff33p103a66jsn339b43750690',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
}
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
      ${videos.items.map(video => `
        <div class="group relative">
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}"
             target="_blank"
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}"
                 alt="${video.snippet.description}"
                 class="w-full">
          </a>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})();