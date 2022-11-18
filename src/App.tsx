import React from 'react';
import './App.css';
import Video from "./components/features/video/Video";
import {Anchors} from "./components/features/anchors/Anchors";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Click the play button to watch the video and get access</h2>
            </header>
            <main className="App-main">
                <Video/>
                <hr/>
                <Anchors/>
            </main>
        </div>
    );
}

export default App;
