package timesheetentry;

import java.time.LocalDate;

import employee.Employee;

//RegularTimesheetEntry class (Concrete Class, inherits from TimesheetEntry)
public class RegularTimesheetEntry extends TimesheetEntry {
    private double hourlyRate;

    public RegularTimesheetEntry(int id, Employee employee, LocalDate date, double hoursWorked, double hourlyRate) {
        super(id, employee, date, hoursWorked);
        this.hourlyRate = hourlyRate;
    }

    public double getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(double hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    @Override
    public double calculateTotalPay() {
        return hoursWorked * hourlyRate;
    }
}
