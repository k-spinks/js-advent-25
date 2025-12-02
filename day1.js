/* Challenge: anta has received a list of gifts, but some are defective. A gift is defective if its name contains the # character.

Help Santa by writing a function that takes a list of gift names and returns a new list that only contains the non-defective gifts.
*/

const filterGifts = (arr) => {
  if(!Array.isArray(arr)) {
    return 'Invalid Input'
  }
  if(arr.length === 0) {
    return arr
  }
  return arr.filter(gift => !gift.includes('#'))

}

const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const gifts2 = ['#broken', '#rusty']
const gifts3 = []

console.log(filterGifts(gifts1))
console.log(filterGifts(gifts2))
console.log(filterGifts(gifts3))


