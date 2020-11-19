import axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';


const apiBase: string = 'http://localhost:8000'

const jar = new CookieJar();

axios.defaults.withCredentials = true
axios.defaults.jar = jar

axios.post(`${apiBase}/login`, {
  username: '',
  password: ''
}).then(r => {
  console.log(r.headers)
  console.log(r.config)

  console.log(jar.getCookiesSync('localhost'))

  axios.post(`${apiBase}/game/5181bedf-cc92-4734-9357-c22b6b8e2dd9/move`, {
    move: 'e4'
  }).then(r => {
    console.log(r)
  })
})