import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  stages: [
    {duration: '10s', target: 300},
    {duration: '10s', target: 600},
    {duration: '10s', target: 900},
    {duration: '10s', target: 1200},
    {duration: '10s', target: 1500},
    {duration: '20s', target: 1800},
    {duration: '10s', target: 1500},
    {duration: '10s', target: 1200},
    {duration: '10s', target: 900},
    {duration: '10s', target: 600},
  ]
}

export default function () {
  const base_url = 'http://localhost:3000/qa/questions';

  http.batch([
    ['GET', `${base_url}/?id=${Math.floor(Math.random()*100000)}&page=0&count=1`, null, null],
    ['GET', `${base_url}/${Math.floor(Math.random()*100000)}/answers`, null, null]
  ]);

}