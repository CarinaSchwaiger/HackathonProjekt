import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Name from './Name';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import VideoComponent from './VideoComponent';
import DiscreteSlider from './Slider.js'
import DoneComponent from './DoneComponent'

const videoIchBinAnna = 'https://northeurope1-mediap.svc.ms/transform/videomanifest?provider=spo&inputFormat=mp4&cs=fFNQTw&docid=https%3A%2F%2Fhspforzheimde-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!LqCjXtrAdku-xl4f0chZIqA0sTdh5GVHoKLifIoJ4V5r4bCqYTd8R59DrxRJRRmL%2Fitems%2F01SDZLZRWA7EPXFFEP4NHK7CVPMGOZRTS5%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHNwZm9yemhlaW1kZS1teS5zaGFyZXBvaW50LmNvbUBhOGM1YWIwNy1jZTNkLTRhZDgtOWU4MS01OTc4NzU5M2VmY2QiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjAyMzQyMDAwIiwiZXhwIjoiMTYwMjM2MzYwMCIsImVuZHBvaW50dXJsIjoiSVZlUnlQYlFXdVZEZFRxZlErNDhDUjNMaFpoT3RzdndxY1dwZy9WWnNlcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XVmhNMkV3TW1VdFl6QmtZUzAwWWpjMkxXSmxZell0TldVeFptUXhZemcxT1RJeSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJzaGFyaW5naWQiOiJJU1V6cldHK1cwZXNVRUI3YmYrMkR3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.anAveks1M1p3SkZsTWlWZGl4dVV2L2RvaFBLb2xqY0RMQzNVOTJ6QW8vWT0&cTag=%22c%3A%7B721FF9C0-8F94-4EE3-AF8A-AF619D98CE5D%7D%2C1%22&action=Access&part=index&format=hls&useScf=True&manifestMetadata=&App=OneDriveWebVideo'
const videoPforzheim = 'https://northeurope1-mediap.svc.ms/transform/videomanifest?provider=spo&inputFormat=mp4&cs=fFNQTw&docid=https%3A%2F%2Fhspforzheimde-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!LqCjXtrAdku-xl4f0chZIqA0sTdh5GVHoKLifIoJ4V5r4bCqYTd8R59DrxRJRRmL%2Fitems%2F01SDZLZRQE7OSU6DUZPFC2VLR3BDS4GSH3%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHNwZm9yemhlaW1kZS1teS5zaGFyZXBvaW50LmNvbUBhOGM1YWIwNy1jZTNkLTRhZDgtOWU4MS01OTc4NzU5M2VmY2QiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjAyMzQyMDAwIiwiZXhwIjoiMTYwMjM2MzYwMCIsImVuZHBvaW50dXJsIjoiSVZlUnlQYlFXdVZEZFRxZlErNDhDUjNMaFpoT3RzdndxY1dwZy9WWnNlcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XVmhNMkV3TW1VdFl6QmtZUzAwWWpjMkxXSmxZell0TldVeFptUXhZemcxT1RJeSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJzaGFyaW5naWQiOiJJU1V6cldHK1cwZXNVRUI3YmYrMkR3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.anAveks1M1p3SkZsTWlWZGl4dVV2L2RvaFBLb2xqY0RMQzNVOTJ6QW8vWT0&cTag=%22c%3A%7B4FA5FB04-990E-4579-AAAE-3B08E5C348FB%7D%2C1%22&action=Access&part=index&format=hls&useScf=True&manifestMetadata=&App=OneDriveWebVideo'
const videoVielenDank = 'https://northeurope1-mediap.svc.ms/transform/videomanifest?provider=spo&inputFormat=mp4&cs=fFNQTw&docid=https%3A%2F%2Fhspforzheimde-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!LqCjXtrAdku-xl4f0chZIqA0sTdh5GVHoKLifIoJ4V5r4bCqYTd8R59DrxRJRRmL%2Fitems%2F01SDZLZRWVKNHUUB7MRZF2IC2FVJHM32WM%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHNwZm9yemhlaW1kZS1teS5zaGFyZXBvaW50LmNvbUBhOGM1YWIwNy1jZTNkLTRhZDgtOWU4MS01OTc4NzU5M2VmY2QiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjAyMzQyMDAwIiwiZXhwIjoiMTYwMjM2MzYwMCIsImVuZHBvaW50dXJsIjoiSVZlUnlQYlFXdVZEZFRxZlErNDhDUjNMaFpoT3RzdndxY1dwZy9WWnNlcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XVmhNMkV3TW1VdFl6QmtZUzAwWWpjMkxXSmxZell0TldVeFptUXhZemcxT1RJeSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJzaGFyaW5naWQiOiJJU1V6cldHK1cwZXNVRUI3YmYrMkR3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.anAveks1M1p3SkZsTWlWZGl4dVV2L2RvaFBLb2xqY0RMQzNVOTJ6QW8vWT0&cTag=%22c%3A%7B4A4F53D5-EC07-4B8E-A40B-45AA4ECDEACC%7D%2C1%22&action=Access&part=index&format=hls&useScf=True&manifestMetadata=&App=OneDriveWebVideo'
const videoWillkommen = 'https://northeurope1-mediap.svc.ms/transform/videomanifest?provider=spo&inputFormat=mp4&cs=fFNQTw&docid=https%3A%2F%2Fhspforzheimde-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!LqCjXtrAdku-xl4f0chZIqA0sTdh5GVHoKLifIoJ4V5r4bCqYTd8R59DrxRJRRmL%2Fitems%2F01SDZLZRRMGHGMLTYFF5D33VYEXWYT3NJ2%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHNwZm9yemhlaW1kZS1teS5zaGFyZXBvaW50LmNvbUBhOGM1YWIwNy1jZTNkLTRhZDgtOWU4MS01OTc4NzU5M2VmY2QiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjAyMzQyMDAwIiwiZXhwIjoiMTYwMjM2MzYwMCIsImVuZHBvaW50dXJsIjoiSVZlUnlQYlFXdVZEZFRxZlErNDhDUjNMaFpoT3RzdndxY1dwZy9WWnNlcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XVmhNMkV3TW1VdFl6QmtZUzAwWWpjMkxXSmxZell0TldVeFptUXhZemcxT1RJeSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uIzIxNzc1ZWFiMjEyMDk0NTJmNDUwZmY3ZTNhMTdkNjkzMzUwYWYwZDhkYmFhM2MyYWU0ZDgwMzM3YzIyYjJjZmMiLCJzaGFyaW5naWQiOiJJU1V6cldHK1cwZXNVRUI3YmYrMkR3IiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.anAveks1M1p3SkZsTWlWZGl4dVV2L2RvaFBLb2xqY0RMQzNVOTJ6QW8vWT0&cTag=%22c%3A%7BC5CC312C-05CF-472F-BDD7-04BDB13DB53A%7D%2C1%22&action=Access&part=index&format=hls&useScf=True&manifestMetadata=eyJBdWRpb1NhbXBsaW5nUmF0ZSI6NDgwMDAsIkF1ZGlvU3RyZWFtRHVyYXRpb24xMDBOYW5vIjowLCJCaXRyYXRlIjoxNzA2MjkxOSwiQ29udGFpbnNBdWRpbyI6dHJ1ZSwiQ29udGFpbnNWaWRlbyI6dHJ1ZSwiRHVyYXRpb24xMDBOYW5vIjo0ODY2MDAwMCwiRnJhbWVTaXplIjp7ImhlaWdodCI6MTA4MCwid2lkdGgiOjE5MjB9LCJIMjY0TGV2ZWwiOjQwLCJQYWNrZWRGcmFtZVJhdGUiOnsiSGlnaCI6NjI1MDAwLCJMb3ciOjIwODMxfSwiVmlkZW9TdHJlYW1EdXJhdGlvbjEwME5hbm8iOjB9&App=OneDriveWebVideo'
const lektionen = [{name : 'Ich bin Anna',
                        url : videoIchBinAnna},
    {name : 'Ich wohne in Pforzheim',
        url : videoPforzheim},
    {name : 'Vielen Dank',
        url: videoVielenDank},
    {name: 'Willkommen',
        url: videoWillkommen}]

function App() {
  var counter = 0;

  const incrementCounter = () => {
    counter++
  }
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/lernen" component={Name}/>
      { counter >= 4 && <Route path="/lektion" component={DoneComponent}/> }
      <Route path="/lektion" render={(props) => {
          return ( counter <= 3 ?
                  <VideoComponent videoUrl={lektionen[counter].url} word={lektionen[counter].name}
                                  onChange={incrementCounter()}/>
                  : <DoneComponent/>
          )
      }
      }/>
      <Route path="/feedback" component={DiscreteSlider}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;