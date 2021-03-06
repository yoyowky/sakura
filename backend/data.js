import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
          name: 'Yoyo',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
    ],
    products: [
        {
            name:"36 Red Rose Box",
            category:"Rose Box",
            image:"/image/box-36.jpeg",
            price: 220,
            countInStock: 1,
            rating:4.5,
            numReviews: 10,
            description: "fantastic"
        },
        {
            name:"Passionate Love",
            category:"Preserved Flowers",
            image:"/image/box-forever-heart.jpeg",
            price: 290,
            countInStock: 0,
            rating:4.5,
            numReviews: 9,
            description: ""
        },
        {
            name:"Elegant Boxed Roses",
            category:"Rose Box",
            image:"/image/box-gun.jpeg",
            price: 220,
            countInStock: 10,
            rating:5,
            numReviews: 10,
            description: ""
        },
        {
            name:"Pink Boxed Roses with baloon",
            category:"Rose Box",
            image:"/image/box-pink.jpeg",
            price: 180,
            countInStock: 10,
            rating:0,
            numReviews: 10,
            description: ""
        },
        {
            name:"Suprise Box",
            category:"Rose Box",
            image:"/image/box-sup.jpeg",
            price: 240,
            countInStock: 10,
            rating:2,
            numReviews: 5,
            description: ""
        },
    ]
}

export default data;