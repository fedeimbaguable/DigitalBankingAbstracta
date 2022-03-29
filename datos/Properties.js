module.exports = [
   { username : 'federicodelucchi@gmail.com' , password : '12345678', reason: 'the user doesnt exist'},
   { username : 'jsmith@demo.io' , password : '12345678', reason : 'user and password do not match'},
   { username : '' , password : '', reason : 'data was not received'},
   { username : '' , password : 'Demo123!', reason : 'username was not received'},
   { username : 'jsmith@demo.io' , password : '', reason : 'password was not received'}
]

export const validUser = [
   { username : 'jsmith@demo.io' , password : 'Demo123!' },
];