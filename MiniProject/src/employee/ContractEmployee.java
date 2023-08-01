package employee;

//ContractEmployee class (Concrete Class, inherits from Employee)
public class ContractEmployee extends Employee {
 private double contractAmount;

 public ContractEmployee(String name, int employeeId, double contractAmount) {
     super(name, employeeId);
     this.contractAmount = contractAmount;
 }

 public double getContractAmount() {
     return contractAmount;
 }

 public void setContractAmount(double contractAmount) {
     this.contractAmount = contractAmount;
 }

 // Implementing the abstract method to calculate salary
 @Override
 public double calculateSalary() {
     // Contract employees get a fixed contract amount
     return contractAmount;
 }

 @Override
 public String toString() {
     return "ContractEmployee{" +
             "name='" + getName() + '\'' +
             ", employeeId=" + getEmployeeId() +
             ", contractAmount=" + contractAmount +
             '}';
 }
}
