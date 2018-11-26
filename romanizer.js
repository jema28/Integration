function romanizer(num) {
switch (num) {
    case 1: return 'I'; break;
    case 2: return 'II'; break;
    case 3: return 'III'; break;
    case 4: return 'IV'; break;
    case 5: return 'V'; break;
    case 6: return 'VI' ;break;
    case 7: return 'VII'; break;
    case 8: return 'VIII'; break;
    case 9: return 'IX'; break;
    case 10: return 'X'; break;
}

// var i=0;
// if (num==4) {
//   return result+=character;
// }
// i++;
// if (num==4) {
//       return character+'V';
//   }
//   else if (num==5) {
//       return 'V';
//   }
//   else
//   for (var i = 6; i<9; i++) {
//       return 'V'+character;
//   }
}
module.exports = romanizer;
