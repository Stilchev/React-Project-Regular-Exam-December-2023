export default function calculateRunesNeeded(runesArray) {
//     console.log(startRune);
//    const slicedRunesArray = runesArray.slice(startRune, targetRune)
   
  
    // Calculate the total number of runes needed by multiplying counts in descending order
    let totalRunesNeeded = 1;
    for (let i = runesArray.length-1; i >= 0; i--) {
        
      totalRunesNeeded *= runesArray[i].count;
    //   runesArray[i].dropped = totalRunesNeeded;
    }
  
    return totalRunesNeeded;
  }
  
  // Example usage:
//   const berRunesArray = diablo2RunesArray.slice(0, 29); // Array up to Ber rune
//   const result = calculateRunesNeeded(berRunesArray, 'Zod');
  
//   console.log(`To cube 1 Zod rune, you need ${result} Ber runes.`);
  