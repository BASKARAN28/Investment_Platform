 package employee;

//Employee class (Abstract Class)
public abstract class Employee {
 private String name;
 private int employeeId;

 public Employee(String name, int employeeId) {
     this.name = name;
     this.employeeId = employeeId;
 }

 public String getName() {
     return name;
 }

 public int getEmployeeId() {
     return employeeId;
 }

 // Abstract method for calculating the employee's salary
 public abstract double calculateSalary();

 @Override
 public String toString() {
     return "Employee{" +
             "name='" + name + '\'' +
             ", employeeId=" + employeeId +
             '}';
 }
}
