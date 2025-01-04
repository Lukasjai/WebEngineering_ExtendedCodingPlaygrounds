import React, { Component } from 'react';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef(); // Verwenden von Ref für das Audio-Element
    }

    componentDidMount() {
        if (this.audioRef.current) {
            console.log('AudioPlayer initialized');
        }
    }

    render() {
        return (
            <div className="audio-player">
                <audio controls ref={this.audioRef}>
                    <source
                        src="media/bear.mp3"
                        type="audio/mp3"
                    />
                    <source
                        src="media/bear.ogg"
                        type="audio/ogg"
                    />
                    <p>
                        It looks like your browser doesn't support HTML5 audio players.
                    </p>
                </audio>
            </div>
        );
    }
}

export default AudioPlayer;
