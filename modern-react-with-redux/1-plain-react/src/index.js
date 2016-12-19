import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoLibrary from './video-library'

const initialTerm = 'udemy';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};

        this.onVideosReceived = this.onVideosReceived.bind(this);
        this.videoLibrary = new VideoLibrary();
        this.videoLibrary.search(initialTerm, this.onVideosReceived);
    }

    render() {
        return (
            <div>
                <SearchBar initialTerm={initialTerm} onSearchTermChange={this.videoLibrary.debouncedSearch(this.onVideosReceived)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }

    onVideosReceived(videos) {
        this.setState({videos : videos, selectedVideo: videos[0]});
    }
}




ReactDOM.render(<App/>, document.querySelector('.container'));
