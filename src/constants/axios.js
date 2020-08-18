const token = window.localStorage.getItem('token');

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/';

export const user = 'jailsom-turing';

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    auth: token
  }
}
