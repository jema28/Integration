function romanizer(num) {
    switch (num) {
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
        case 10: return 'X';
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
