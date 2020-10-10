import React from 'react';
import './App.css';
import VideoComponent from './VideoComponent';

const testvideo = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
const posterurl = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F95%2F85%2Funicorn-on-a-pink-background-with-stars-postcard-vector-27119585.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Funicorn-on-a-pink-background-with-stars-postcard-vector-27119585&tbnid=GuqLC2Eo7qsfYM&vet=12ahUKEwiz7b-7qKrsAhWRIMUKHRKwDHcQMygAegUIARCfAg..i&docid=sbcM0B27QLrhZM&w=1000&h=1080&q=unicorn%20pic&client=safari&ved=2ahUKEwiz7b-7qKrsAhWRIMUKHRKwDHcQMygAegUIARCfAg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoComponent videoUrl={testvideo} poster={posterurl} word="test"/>
      </header>
    </div>
  );
}

export default App;
