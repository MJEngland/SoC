
function alphabetti(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz', result = '';
  for(let i = 0; i < 26; i++) {
    result += (str.match(new RegExp(alpha[i], 'gi')) || []).join('');
  }
  return result;
  }
