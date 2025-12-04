/* In Santa’s workshop there’s an intern elf who is learning to wrap gifts 🎁.

They’ve asked the elf to wrap boxes using only text… and they do it more or less correctly.

They are given two parameters:

size: the size of the square gift
symbol: the character the elf uses to make the border
The gift must meet these requirements:

It must be a size x size square.
The inside is always empty (filled with spaces), because the elf “doesn’t know how to draw the filling yet”.
If size < 2, return an empty string: the elf tried, but the gift got lost.
The final result must be a string with newline characters \n.
*/


function drawGift(size, symbol) {
  if (size < 2) {
    return ""
  }

  const topBottom = symbol.repeat(size);

  if (size === 2) {
    return topBottom + "\n" + topBottom;
  }

  const middle = symbol + " ".repeat(size - 2) + symbol;

  const middleSection = Array(size - 2)
    .fill(middle)
    .join("\n");

  return topBottom + "\n" + middleSection + "\n" + topBottom;
}

const g1 = drawGift(4, '*')
console.log(g1)

const g3 = drawGift(2, '-')
console.log(g3)