const startOfSentenceArray = ['Good morning ', 'Good evening ', 'Hello there ', 'Greetings '];
const middleOfSentenceArray = ['darling ', 'my friend ', 'you there '];
const endOfSentenceArray = ['have a good day!', 'have a lovely evening!', 'see you later, friend!', 'I hope to see you again!'];

const createMessage = (startArray, middleArray, endArray) => {
    const start = startArray[Math.floor(Math.random() * startArray.length)];
    const middle = middleArray[Math.floor(Math.random() * middleArray.length)];
    const end = endArray[Math.floor(Math.random() * endArray.length)]

    return start + middle + end;
}

const randonMessage = createMessage(startOfSentenceArray, middleOfSentenceArray, endOfSentenceArray);

console.log(randomMessage);