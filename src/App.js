import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Name from './Name';
import {HashRouter, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import VideoComponent from './VideoComponent';
import DiscreteSlider from './Slider.js'

const testvideo = 'https://northeurope1-mediap.svc.ms/transform/videomanifest?provider=spo&inputFormat=mp4&cs=fFNQTw&docid=https%3A%2F%2Fhspforzheimde-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!LqCjXtrAdku-xl4f0chZIqA0sTdh5GVHoKLifIoJ4V5r4bCqYTd8R59DrxRJRRmL%2Fitems%2F01SDZLZRRMGHGMLTYFF5D33VYEXWYT3NJ2%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHNwZm9yemhlaW1kZS1teS5zaGFyZXBvaW50LmNvbUBhOGM1YWIwNy1jZTNkLTRhZDgtOWU4MS01OTc4NzU5M2VmY2QiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjAyMzQyMDAwIiwiZXhwIjoiMTYwMjM2MzYwMCIsImVuZHBvaW50dXJsIjoiSVZlUnlQYlFXdVZEZFRxZlErNDhDUjNMaFpoT3RzdndxY1dwZy9WWnNlcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XVmhNMkV3TW1VdFl6QmtZUzAwWWpjMkxXSmxZell0TldVeFptUXhZemcxT1RJeSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJzaGFyaW5naWQiOiJJU1V6cldHK1cwZXNVRUI3YmYrMkR3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.anAveks1M1p3SkZsTWlWZGl4dVV2L2RvaFBLb2xqY0RMQzNVOTJ6QW8vWT0&cTag=%22c%3A%7BC5CC312C-05CF-472F-BDD7-04BDB13DB53A%7D%2C1%22&action=Access&part=index&format=hls&useScf=True&manifestMetadata=eyJBdWRpb1NhbXBsaW5nUmF0ZSI6NDgwMDAsIkF1ZGlvU3RyZWFtRHVyYXRpb24xMDBOYW5vIjowLCJCaXRyYXRlIjoxNzA2MjkxOSwiQ29udGFpbnNBdWRpbyI6dHJ1ZSwiQ29udGFpbnNWaWRlbyI6dHJ1ZSwiRHVyYXRpb24xMDBOYW5vIjo0ODY2MDAwMCwiRnJhbWVTaXplIjp7ImhlaWdodCI6MTA4MCwid2lkdGgiOjE5MjB9LCJIMjY0TGV2ZWwiOjQwLCJQYWNrZWRGcmFtZVJhdGUiOnsiSGlnaCI6NjI1MDAwLCJMb3ciOjIwODMxfSwiVmlkZW9TdHJlYW1EdXJhdGlvbjEwME5hbm8iOjB9&App=OneDriveWebVideo'
const posterurl = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2F1000x1000%2F95%2F85%2Funicorn-on-a-pink-background-with-stars-postcard-vector-27119585.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Funicorn-on-a-pink-background-with-stars-postcard-vector-27119585&tbnid=GuqLC2Eo7qsfYM&vet=12ahUKEwiz7b-7qKrsAhWRIMUKHRKwDHcQMygAegUIARCfAg..i&docid=sbcM0B27QLrhZM&w=1000&h=1080&q=unicorn%20pic&client=safari&ved=2ahUKEwiz7b-7qKrsAhWRIMUKHRKwDHcQMygAegUIARCfAg'

function App() {
  const [page, setPage] = React.useState(0);

  const nextPage = () => {
    setPage(page + 1);
  }
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/lernen" component={Name}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;