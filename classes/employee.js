class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        return this.name;
    }
}

module.exports = Employee;