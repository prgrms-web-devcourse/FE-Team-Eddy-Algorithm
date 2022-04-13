function solution(s) {
  return s.split(' ')
          .map(element => 
               element.charAt(0).toUpperCase() 
               + element.substr(1,).toLowerCase())
          .join(' ');
}
