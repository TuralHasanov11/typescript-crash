let num: number = 5
let str: string = 'string'
let bool: boolean = true

let anyData: any = 'Anything'
anyData = 5

let arr: number[] = [1,2,3,4]

let tupleData: [number, string, boolean] = [1, 'str', true]

let tupleArr: [number, string][] = [ [1, 'str'], [2, 'str'] ]

// Union 
// Different data types
let id: string | number = 22
id = 'id_12'

// Enum
enum Direction1 {
  UP, DOWN, LEFT, RIGHT
}

// Objects
interface User{
  id: number,
  name: string
}
const user: {id: number, name: string} = {id: 12, name:' Jon'}
const user2: User = {id: 12, name:' Jon'}


// Type Assertion
let uid: any = 1
let userId = <number> uid
let userId2 = uid as number

// functions
function add(x: number, y: number = 4): number{ // void if not returning anything
  return x+y
}
console.log(add(3,4))

// Interface
interface UserInterface {
  readonly id: number
  name: string
  age?: number // optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const addNum: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

// strArray.push(1) // Throws error