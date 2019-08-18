
const users = [
    {"id": 1, "name": "USER1", "email": "user1@email.com"},
    {"id": 2, "name": "USER2", "email": "user2@email.com"}
]

export class UserModel {

    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }
    
}