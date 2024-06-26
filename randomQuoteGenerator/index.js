const quotes = 
    [
         "Love is composed of a single soul inhabiting two bodies.",
         "Where there is love there is life.",
         "Love is not only something you feel, it is something you do.",
         "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
         "The best thing to hold onto in life is each other.",
         "Love is when the other person's happiness is more important than your own.",
         "To love and be loved is to feel the sun from both sides.",
        "Love is the only force capable of transforming an enemy into a friend.",
         "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
         "We are most alive when we're in love.",
         "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
         "True love stories never have endings.",
        "There is no charm equal to tenderness of heart.",
         "Love is a friendship set to music.",
         "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
         "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        "Love cures people - both the ones who give it and the ones who receive it.",
         "Love is the flower you've got to let grow.",
         "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.",
         "The best thing to hold onto in life is each other."

]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");


function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has (randomIdx)) continue

        const quote = quotes [randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
   
}