const totalMessages = {
    one: ['talkative',
        'confused',
        'chill',
        'attrative',
        'Loyal',
        'Loving',
        'Realistic',
        'Perfect',
        'Private',
        'Humorous',
        'Crazy',
        'Determined'],
    two: [
        'Good luck',
        'Bad luck',
        'Either good or bad'
    ],
    three: [
        'Take a walk',
        'Stay inside',
        'Read a book',
        'Learn a new skill',
        'Finish your tasks',
        'Say hi to an old friend',
        'Do one exercise',
        'Eat healthy',
    ]
}

const randomIndexOne = Math.floor(Math.random() * 12);
const randomIndexTwo = Math.floor(Math.random() * 3)
const randomIndexThree = Math.floor(Math.random() * 8)
console.log('Your horoscope is as follows:')
console.log(`Today you will be feeling: ${totalMessages.one[randomIndexOne]}.`)
console.log(`Your luck today is: ${totalMessages.two[(randomIndexTwo)]}.`)
console.log(`You should: ${totalMessages.three[randomIndexThree]} today.`)


