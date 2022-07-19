/*
Javascript template
*/
const versesDiv = document.getElementById("verses-div");

// {
//     book : '',
//     chapter : '',
//     verse : '',
//     text : ''
// },

let bibleVerses = [
    {
        book : 'Joshua',
        chapter : '1',
        verse : '9',
        text : 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.'
    },
    {
        book : '2 Chronicles',
        chapter : '7',
        verse : '14',
        text : 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.'
    },
    {
        book : 'Psalm',
        chapter : '34',
        verse : '4-8',
        text : '4 I sought the Lord, and he heard me, and delivered me from all my fears. 5 They looked unto him, and were lightened: and their faces were not ashamed. 6 This poor man cried, and the Lord heard him, and saved him out of all his troubles. 7 The angel of the Lord encampeth round about them that fear him, and delivereth them. 8 O taste and see that the Lord is good: blessed is the man that trusteth in him.'
    },
    {
        book : 'Psalm',
        chapter : '94',
        verse : '18-19',
        text : '18 When I said, My foot slippeth; thy mercy, O Lord, held me up. 19 In the multitude of my thoughts within me thy comforts delight my soul.'
    },
    {
        book : 'Proverbs',
        chapter : '3',
        verse : '5-6',
        text : '5 Trust in the Lord with all thine heart; and lean not unto thine own understanding. 6 In all thy ways acknowledge him, and he shall direct thy paths.'
    },
    {
        book : 'Isaiah',
        chapter : '41',
        verse : '10',
        text : 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
    },
    {
        book : 'Isaiah',
        chapter : '41',
        verse : '13',
        text : 'For I the LORD thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.',
    },
    {
        book: 'Matthew',
        chapter :'6',
        verse : '31-34',
        text : 'Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed? (For after all these things do the Gentiles seek:) for your heavenly Father knoweth that ye have need of all these things. But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.'
    },
    {
        book : 'Mark',
        chapter : '10',
        verse : '45',
        text : 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.'
    },
    {
        book : 'John',
        chapter : '16',
        verse : '33',
        text : 'These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the wold.'
    },
    {
        book : 'Acts',
        chapter : '24',
        verse : '16',
        text : 'And herein do I exercise myself, to have always a conscience void to offence toward God, and toward men.'
    },
    {
        book: 'Romans',
        chapter :'6',
        verse : '23',
        text : 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.'
    },
    {
        book : 'Romans',
        chapter : '8',
        verse : '28',
        text : ' And we know that all things work together for good to them that love God, to them who are the called according to his purpose.'
    },
    {
        book: 'Romans',
        chapter :'10',
        verse : '9',
        text : 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.'
    },
    {
        book : 'Romans',
        chapter : '15',
        verse : '13',
        text : 'Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.'
    },
    {
        book: '1 Corinthians',
        chapter :'15',
        verse : '58',
        text : 'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.'
    },
    {
        book : 'Philippians',
        chapter : '2',
        verse : '3-4',
        text : '3 Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. 4 Look not every man on his own things, but every man also on the things of others.'
    },
    {
        book : 'Philippians',
        chapter : '4',
        verse : '6-7',
        text : '6 Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. 7 And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.'
    },
    {
        book : '1 Peter',
        chapter : '5',
        verse : '6-7',
        text : '6 Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time: 7 Casting all your care upon him; for he careth for you.'
    },
    {
        book : 'Revelation',
        chapter : '21',
        verse : '4',
        text : 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.'
    },
];

var myHeading = document.getElementById("heading");
myHeading.innerText = bibleVerses.length + myHeading.innerText;

for (var k in bibleVerses){
    const bibleVerse = document.createElement('div');
bibleVerse.setAttribute("class","bible-verse");
    versesDiv.append(bibleVerse);

    bibleVerse.innerHTML += '<span class="text">\"' +bibleVerses[k]['text'] + "\"</span> \xa0\xa0-\xa0\xa0 ";
    bibleVerse.innerHTML += '<span class="book">' + bibleVerses[k]['book'] + "</span>\xa0";
    bibleVerse.innerHTML += '<span class="chapter">'+bibleVerses[k]['chapter'] + "</span>:";
    bibleVerse.innerHTML +='<span class="verse">' + bibleVerses[k]['verse'] + "</span>";

}
