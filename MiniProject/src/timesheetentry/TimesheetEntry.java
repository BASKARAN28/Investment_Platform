package timesheetentry;

import employee.Employee;

import java.time.LocalDate;

//TimesheetEntry class (Abstract Class)
public abstract class TimesheetEntry {
 private int id; // New field to represent the entry ID in the database
 private Employee employee;
 private LocalDate date;
 protected double hoursWorked;

 public TimesheetEntry(int id, Employee employee, LocalDate date, double hoursWorked) {
     this.id = id;
     this.employee = employee;
     this.date = date;
     this.hoursWorked = hoursWorked;
 }

 public int getId() {
     return id;
 }

 public Employee getEmployee() {
     return employee;
 }

 public void setEmployee(Employee employee) {
     this.employee = employee;
 }

 public LocalDate getDate() {
     return date;
 }

 public void setDate(LocalDate date) {
     this.date = date;
 }

 public double getHoursWorked() {
     return hoursWorked;
 }

 public void setHoursWorked(double hoursWorked) {
     this.hoursWorked = hoursWorked;
 }

 // Abstract method to be implemented by subclasses
 public abstract double calculateTotalPay();

 @Override
 public String toString() {
     return getClass().getSimpleName() + "{" +
             "id=" + id +
             ", employee=" + employee +
             ", date=" + date +
             ", hoursWorked=" + hoursWorked +
             '}';
 }
}
