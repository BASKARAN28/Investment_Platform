package timesheetentry;

import java.time.LocalDate;

import employee.Employee;

public class ContractTimesheetEntry extends TimesheetEntry {
    private double contractAmount;

    public ContractTimesheetEntry(int id, Employee employee, LocalDate date, double contractAmount) {
        super(id, employee, date, 0); // hoursWorked is set to 0 for contract employees
        this.contractAmount = contractAmount;
    }

    public double getContractAmount() {
        return contractAmount;
    }

    public void setContractAmount(double contractAmount) {
        this.contractAmount = contractAmount;
    }

    @Override
    public double calculateTotalPay() {
        return contractAmount;
    }
}
