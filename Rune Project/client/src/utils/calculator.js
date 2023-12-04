// export default function calculateRunesNeeded(runesArray, targetRune) {
//     // Find the index of the target rune in the array
//     const targetIndex = runesArray.findIndex((rune) => rune.name.toLowerCase() === targetRune.toLowerCase());
  
//     // If the target rune is not found, return -1 indicating an error
//     if (targetIndex === -1) {
//       console.error(`Error: Rune ${targetRune} not found in the array.`);
//       return -1;
//     }
  
//     // Calculate the total number of runes needed by multiplying counts in descending order
//     let totalRunesNeeded = 1;
//     for (let i = targetIndex; i < runesArray.length; i++) {
//       totalRunesNeeded *= runesArray[i].neededForCube;
//       runesArray[i].dropped = totalRunesNeeded;
//     }
  
//     return totalRunesNeeded;
//   }
  
//   // Example usage:
//   const berRunesArray = diablo2RunesArray.slice(0, 29); // Array up to Ber rune
//   const result = calculateRunesNeeded(berRunesArray, 'Zod');
  
//   console.log(`To cube 1 Zod rune, you need ${result} Ber runes.`);
  