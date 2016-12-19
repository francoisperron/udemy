import React from 'react';

const VideoDetail = ({video}) => {

    const shouldShow = !video ? 'loading' : 'show';
    const AVideoDetail = components[shouldShow];
    return <AVideoDetail video={video}/>;
};

const Loading = () => {
    return <div>Loading...</div>
};

const Show = ({video}) => {
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={video.url}></iframe>
            </div>
            <div className="details">
                <div>{video.title}</div>
                <div>{video.description}</div>
            </div>
        </div>
    );
};

const components = {
    loading: Loading,
    show: Show
};

export default VideoDetail;
