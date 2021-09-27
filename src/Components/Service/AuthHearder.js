export default function authHeader() {
    const user = localStorage.getItem('jswtoken');
  
    if (user && user.jwt) {
       return { Authorization: 'Bearer ' + user }; 
    
    } else {
      return {};
    }
  }
  