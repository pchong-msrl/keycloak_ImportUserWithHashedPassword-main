const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Eve' },
  ];


const database2 = [
    { username: "user1", email: "user1@example.com", password: "$2a$12$sYzAXqDzjCS/hpx9TU/LoO8VoAX/vAqkLPWr/dNY88WX9JuWlHPE2" },
    { username: "user2", email: "user2@example.com", password: "$2a$12$sYzAXqDzjCS/hpx9TU/LoO8VoAX/vAqkLPWr/dNY88WX9JuWlHPE2" },
    { username: "user3", email: "user3@example.com", password: "$2a$12$sYzAXqDzjCS/hpx9TU/LoO8VoAX/vAqkLPWr/dNY88WX9JuWlHPE2" },

];
  
for (let existingUser of database2) {
    console.log(existingUser.password);
}



  // Output: { id: 2, name: 'Bob' }
  