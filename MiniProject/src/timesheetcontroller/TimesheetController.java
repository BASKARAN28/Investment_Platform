package timesheetcontroller;

import employee.ContractEmployee;
import employee.Employee;
import employee.RegularEmployee;
import timesheetentry.ContractTimesheetEntry;
import timesheetentry.RegularTimesheetEntry;
import timesheetentry.TimesheetEntry;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TimesheetController {
    private Connection connection;
    private Scanner scanner;

    public TimesheetController(String url, String username, String password) {
        scanner = new Scanner(System.in);
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to the database.");
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println("Error connecting to the database: " + e.getMessage());
        }
    }

    public void closeConnection() {
        try {
            if (connection != null) {
                connection.close();
                System.out.println("Database connection closed.");
            }
        } catch (SQLException e) {
            System.err.println("Error closing database connection: " + e.getMessage());
        }
    }

    // Helper method to display menu options
    public void displayMenu() {
        System.out.println("\nEmployee Timesheet Management System");
        System.out.println("1. Add Regular Employee Timesheet Entry");
        System.out.println("2. Add Contract Employee Timesheet Entry");
        System.out.println("3. View All Timesheet Entries");
        System.out.println("4. Update Timesheet Entry");
        System.out.println("5. Delete Timesheet Entry");
        System.out.println("6. Exit");
        System.out.print("Enter your choice: ");
    }

    // Helper method to read an integer input from the user
    public int readIntInput() {
        while (!scanner.hasNextInt()) {
            System.out.print("Invalid input. Enter a valid number: ");
            scanner.next(); // Consume the invalid input
        }
        int input = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character
        return input;
    }

    // Helper method to read a double input from the user
    private double readDoubleInput() {
        while (!scanner.hasNextDouble()) {
            System.out.print("Invalid input. Enter a valid number: ");
            scanner.next(); // Consume the invalid input
        }
        double input = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character
        return input;
    }

    // Create (Add) a new regular employee timesheet entry
    public void addRegularTimesheetEntry() {
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();
        System.out.print("Enter employee ID: ");
        int employeeId = readIntInput();
        System.out.print("Enter date (YYYY-MM-DD): ");
        String dateStr = scanner.nextLine();
        LocalDate date = LocalDate.parse(dateStr);
        System.out.print("Enter hours worked: ");
        double hoursWorked = readDoubleInput();
        System.out.print("Enter hourly rate: ");
        double hourlyRate = readDoubleInput();

        Employee employee = new RegularEmployee(name, employeeId, hourlyRate,hoursWorked);
        TimesheetEntry entry = new RegularTimesheetEntry(0, employee, date, hoursWorked, hourlyRate);
        addTimesheetEntry(entry);

        System.out.println("Regular employee timesheet entry added successfully.");
    }

    // Create (Add) a new contract employee timesheet entry
    public void addContractTimesheetEntry() {
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();
        System.out.print("Enter employee ID: ");
        int employeeId = readIntInput();
        System.out.print("Enter date (YYYY-MM-DD): ");
        String dateStr = scanner.nextLine();
        LocalDate date = LocalDate.parse(dateStr);
        System.out.print("Enter contract amount: ");
        double contractAmount = readDoubleInput();

        Employee employee = new ContractEmployee(name, employeeId, contractAmount);
        TimesheetEntry entry = new ContractTimesheetEntry(0, employee, date, contractAmount);
        addTimesheetEntry(entry);

        System.out.println("Contract employee timesheet entry added successfully.");
    }

    // Create (Add) a new timesheet entry to the database
    private void addTimesheetEntry(TimesheetEntry entry) {
        try {
            String sql = "INSERT INTO timesheet (employee_name, employee_id, date, hours_worked, hourly_rate, contract_amount) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, entry.getEmployee().getName());
            pstmt.setInt(2, entry.getEmployee().getEmployeeId());
            pstmt.setString(3, entry.getDate().toString());
            pstmt.setDouble(4, entry.getHoursWorked());

            if (entry instanceof RegularTimesheetEntry) {
                pstmt.setDouble(5, ((RegularTimesheetEntry) entry).getHourlyRate());
                pstmt.setDouble(6, 0); // Not applicable for regular employee
            } else if (entry instanceof ContractTimesheetEntry) {
                pstmt.setDouble(5, 0); // Not applicable for contract employee
                pstmt.setDouble(6, ((ContractTimesheetEntry) entry).getContractAmount());
            }

            pstmt.executeUpdate();
            pstmt.close();
        } catch (SQLException e) {
            System.err.println("Error adding timesheet entry: " + e.getMessage());
        }
    }

    // Read (Retrieve) all timesheet entries from the database
    public List<TimesheetEntry> getTimesheetEntries() {
        List<TimesheetEntry> timesheetEntries = new ArrayList<>();

        try {
            String sql = "SELECT * FROM timesheet";
            PreparedStatement pstmt = connection.prepareStatement(sql);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("id");
                int employeeId = rs.getInt("employee_id");
                String name = rs.getString("employee_name");
                LocalDate date = LocalDate.parse(rs.getString("date"));
                double hoursWorked = rs.getDouble("hours_worked");
                double hourlyRate = rs.getDouble("hourly_rate");
                double contractAmount = rs.getDouble("contract_amount");

                Employee employee;
                if (hourlyRate > 0) {
                    employee = new RegularEmployee(name, employeeId, hourlyRate,hoursWorked);
                    TimesheetEntry entry = new RegularTimesheetEntry(id, employee, date, hoursWorked, hourlyRate);
                    timesheetEntries.add(entry);
                } else if (contractAmount > 0) {
                    employee = new ContractEmployee(name, employeeId, contractAmount);
                    TimesheetEntry entry = new ContractTimesheetEntry(id, employee, date, contractAmount);
                    timesheetEntries.add(entry);
                }
            }

            rs.close();
            pstmt.close();
        } catch (SQLException e) {
            System.err.println("Error fetching timesheet data: " + e.getMessage());
        }

        return timesheetEntries;
    }

    // Helper method to display all timesheet entries
    public void viewTimesheetEntries() {
        List<TimesheetEntry> entries = getTimesheetEntries();

        if (entries.isEmpty()) {
            System.out.println("No timesheet entries found.");
        } else {
            System.out.println("\nTimesheet Entries:");
            for (TimesheetEntry entry : entries) {
                System.out.println(entry);
            }
        }
    }

    // Update an existing timesheet entry in the database
    public void updateTimesheetEntry() {
        List<TimesheetEntry> entries = getTimesheetEntries();
        viewTimesheetEntries();

        if (!entries.isEmpty()) {
            System.out.print("Enter the ID of the timesheet entry to update: ");
            int entryId = readIntInput();

            TimesheetEntry selectedEntry = null;
            for (TimesheetEntry entry : entries) {
                if (entry instanceof RegularTimesheetEntry && entry.getId() == entryId) {
                    selectedEntry = entry;
                    break;
                } else if (entry instanceof ContractTimesheetEntry && entry.getId() == entryId) {
                    selectedEntry = entry;
                    break;
                }
            }

            if (selectedEntry != null) {
                if (selectedEntry instanceof RegularTimesheetEntry) {
                    RegularTimesheetEntry regularEntry = (RegularTimesheetEntry) selectedEntry;
                    System.out.print("Enter new hours worked: ");
                    double hoursWorked = readDoubleInput();
                    regularEntry.setHoursWorked(hoursWorked);
                    updateTimesheetEntry(regularEntry);
                    System.out.println("Regular employee timesheet entry updated successfully.");
                } else if (selectedEntry instanceof ContractTimesheetEntry) {
                    ContractTimesheetEntry contractEntry = (ContractTimesheetEntry) selectedEntry;
                    System.out.print("Enter new contract amount: ");
                    double contractAmount = readDoubleInput();
                    contractEntry.setContractAmount(contractAmount);
                    updateTimesheetEntry(contractEntry);
                    System.out.println("Contract employee timesheet entry updated successfully.");
                }
            } else {
                System.out.println("Invalid timesheet entry ID.");
            }
        } else {
            System.out.println("No timesheet entries found.");
        }
    }

    // Update an existing timesheet entry in the database
    private void updateTimesheetEntry(TimesheetEntry entry) {
        try {
            String sql = "UPDATE timesheet SET hours_worked = ?, hourly_rate = ?, contract_amount = ? WHERE employee_id = ? AND date = ?";
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setDouble(1, entry.getHoursWorked());

            if (entry instanceof RegularTimesheetEntry) {
                pstmt.setDouble(2, ((RegularTimesheetEntry) entry).getHourlyRate());
                pstmt.setDouble(3, 0); // Not applicable for regular employee
            } else if (entry instanceof ContractTimesheetEntry) {
                pstmt.setDouble(2, 0); // Not applicable for contract employee
                pstmt.setDouble(3, ((ContractTimesheetEntry) entry).getContractAmount());
            }

            pstmt.setInt(4, entry.getEmployee().getEmployeeId());
            pstmt.setString(5, entry.getDate().toString());
            pstmt.executeUpdate();
            pstmt.close();
        } catch (SQLException e) {
            System.err.println("Error updating timesheet entry: " + e.getMessage());
        }
    }

    // Delete an existing timesheet entry from the database
    public void deleteTimesheetEntry() {
        List<TimesheetEntry> entries = getTimesheetEntries();
        viewTimesheetEntries();

        if (!entries.isEmpty()) {
            System.out.print("Enter the ID of the timesheet entry to delete: ");
            int entryId = readIntInput();

            boolean entryExists = false;
            for (TimesheetEntry entry : entries) {
                if (entry.getId() == entryId) {
                    entryExists = true;
                    break;
                }
            }

            if (entryExists) {
                deleteTimesheetEntry(entryId);
                System.out.println("Timesheet entry with ID " + entryId + " deleted successfully.");
            } else {
                System.out.println("Invalid timesheet entry ID.");
            }
        } else {
            System.out.println("No timesheet entries found.");
        }
    }

    // Delete an existing timesheet entry from the database
    private void deleteTimesheetEntry(int entryId) {
        try {
            String sql = "DELETE FROM timesheet WHERE id = ?";
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setInt(1, entryId);
            pstmt.executeUpdate();
            pstmt.close();
        } catch (SQLException e) {
            System.err.println("Error deleting timesheet entry: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/timesheet1";
        String username = "root";
        String password = "123456";

        TimesheetController controller = new TimesheetController(url, username, password);

        boolean exit = false;
        while (!exit) {
            controller.displayMenu();
            int choice = controller.readIntInput();
            switch (choice) {
                case 1:
                    controller.addRegularTimesheetEntry();
                    break;
                case 2:
                    controller.addContractTimesheetEntry();
                    break;
                case 3:
                    controller.viewTimesheetEntries();
                    break;
                case 4:
                    controller.updateTimesheetEntry();
                    break;
                case 5:
                    controller.deleteTimesheetEntry();
                    break;
                case 6:
                    exit = true;
                    controller.closeConnection();
                    System.out.println("Exiting the program. Goodbye!");
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a number from 1 to 6.");
            }
        }
    }
}