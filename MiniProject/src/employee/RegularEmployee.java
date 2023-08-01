package employee;

//RegularEmployee class (Concrete Class, inherits from Employee)
public class RegularEmployee extends Employee {
 private double hourlyRate;
 private double hoursWorked;

 public RegularEmployee(String name, int employeeId, double hourlyRate,double hoursWorked) {
     super(name, employeeId);
     this.hourlyRate = hourlyRate;
     this.hoursWorked = hoursWorked;
 }

 public double getHourlyRate() {
     return hourlyRate;
 }

 public void setHourlyRate(double hourlyRate) {
     this.hourlyRate = hourlyRate;
 }

 // Implementing the abstract method to calculate salary
 @Override
 public double calculateSalary() {
     // Assuming regular employees work 8 hours a day
     return hoursWorked * hourlyRate;
 }

 @Override
 public String toString() {
     return "RegularEmployee{" +
             "name='" + getName() + '\'' +
             ", employeeId=" + getEmployeeId() +
             ", hourlyRate=" + hourlyRate +
             ", TotalAmount=" + calculateSalary() +
             '}';
 }
}