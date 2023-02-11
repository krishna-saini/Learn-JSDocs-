// below line is important for type check error
// @ts-check

// import { add, subtract } from "./calculator.js";
const { add, subtract } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Krishna Saini
 * @see <a href="https://www.notion.so/My-first-job-learning-8f74bc09c072479ebf7948a1962a4581">MY website</a>
 */

/**
 * student name
 * @type {string}
 */
const studentName = "krishna";

/**
 * array of grades
 * @type {Array<number>}
 */
const grades = [4, 6, 8.8];

/**
 * Todo Object
 * @type {{id: number|string, text:string}}
 */
const todo = {
  id: 1,
  text: "learn jsdoc",
};

/**
 * Calculates Tax
 * @param {number} amount - the principal amount
 * @param {number} tax - the tax percentage
 * @returns {string} - tax with dollar sign
 */
const calculateTax = (amount, tax) => `$${amount + amount * tax}`;

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student Id
 * @property {string} name - Student name
 * @property {number|string} [age] - Student age (optional)
 * @property {boolean} isActive - Student is Active
 */

/**
 * @type {Student}
 */

const Student = {
  id: 1,
  name: "Krishna",
  age: 30,
  isActive: true,
};

/**
 * class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo - information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name - Person name
     * @property {number} age - Person age
     */
    this.name = personInfo.name;
    this.age = personInfo.age;
  }
  /**
   * @property {Function} greet - A greeting with name
   * @returns {void}
   */
  greet() {
    console.log(`good morning ${this.name}`);
  }
}

// links to other parts of documentation
/**
 * See {@link Person}
 */
const person1 = new Person({ name: "krishna", age: 30 });
console.log(person1.greet());

// modules

console.log(add(10, 20));
