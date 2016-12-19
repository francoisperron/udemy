import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const YOUTUBE_API_KEY = 'AIzaSyDpNzEAgsp_dLRrwx2qhyzSXOJ9D5L_fWw';

class VideoLibrary {

    search(term, callback) {
        YTSearch({key: YOUTUBE_API_KEY, term: {term}}, (youtubeVideos) => {
            const videos = youtubeVideos.map(this._buildVideo);
            callback(videos);
        });
    }

    debouncedSearch(callback) {
        return _.debounce((term) => {
            this.search(term, callback)
        }, 300);
    }

    _buildVideo(youtubeVideo){
        return {
            id: youtubeVideo.etag,
            title: youtubeVideo.snippet.title,
            description: youtubeVideo.snippet.description,
            imageUrl: youtubeVideo.snippet.thumbnails.default.url,
            url: `https://www.youtube.com/embed/${youtubeVideo.id.videoId}`
        }
    }
}

export default VideoLibrary;