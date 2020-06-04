const cards = [
    {
        id: 'card-0',
        title: 'Copy the master Sales Training Board'
    },
    {
        id: 'card-1',
        title: 'Create a new list'
    },
    {
        id: 'card-2',
        title: 'Move a Card to another board'
    },
    {
        id:'card-3',
        title: 'Link to another board'
    },
    {
        id:'card-4',
        title: 'Link to another card'
    },
    {
        id:'card-5',
        title: 'Turn on power ups'
    },
    {
        id:'card-6',
        title: 'Add Kristen as a member to the board'
    },
    {
        id:'card-7',
        title: 'Subscribe'
    },
];

const data ={
     lists:{
        'lists-1':{
            id: 'lists-1',
            title: 'Board To Do',
            cards,
        },
        'lists-2':{
            id: 'lists-2',
            title: 'Org To Do',
            cards:[
                {
                    id: 'card-8',
                    title: 'Create your own Org',
                },
                {
                    id: 'card-9',
                    title: 'Demo Board',
                },
            ],
        },
    },
    listIds:['lists-1','lists-2' ]
}
   
export default data