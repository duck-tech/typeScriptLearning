// class
/*
class User {
    public email: string
    private name: string
    readonly city: string = ''
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
} 

const duck = new User('duck@mail.com', 'TestUser')
// duck.city = 'Taipei'
**/ 

// priveate public

class User {
    // private _courseCount = 1
    protected _courseCount = 1
    readonly city: string = ''
    constructor(
        public email: string, 
        public name: string, 
        // private userId: string
        ){
    }
    // getter and setter 
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum        
    }
} 

class SubUser extends User {
    isFamily: boolean = true 
    changeCourseCount () {
        this._courseCount = 10
    }
    
}
