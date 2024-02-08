//dummy users for seed files

//need to hash passwords
import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin user',
        email: 'admin@email.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'Ariel M',
        email: 'ariel@email.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'Mustapha M',
        email: 'mustapha@email.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
]

export default users