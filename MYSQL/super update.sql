-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2023 at 01:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hmstry`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAdmittedPatients` ()   BEGIN
    SELECT * FROM PAT_ADMIT;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetChkupPatients` ()   BEGIN
    SELECT * FROM pat_chkup;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetEntryPatients` ()   BEGIN
    SELECT * FROM pat_entry;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOccupiedAndVacantRooms` ()   BEGIN
    SELECT room_details.room_number, room_details.status
    FROM ROOM_DETAILS;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRegPatients` ()   BEGIN
    SELECT * FROM pat_reg;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'haha', 'hahat');

-- --------------------------------------------------------

--
-- Table structure for table `all_doctors`
--

CREATE TABLE `all_doctors` (
  `doctor_id` varchar(10) NOT NULL CHECK (`doctor_id` like 'DR%' or `doctor_id` like 'DC%'),
  `doctor_name` varchar(100) DEFAULT NULL,
  `department_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_doctors`
--

INSERT INTO `all_doctors` (`doctor_id`, `doctor_name`, `department_name`) VALUES
('DC002', 'Jane Smith', 'Orthopedics'),
('DC004', 'Sarah Williams', 'Neurology'),
('DC006', 'Jennifer Davis', 'Ophthalmology'),
('DC008', 'Emily Wilson', 'Urology'),
('DC010', 'Jessica Martinez', 'Radiology'),
('DC012', 'Amanda Thomas', 'Oncology'),
('DC014', 'Olivia Clark', 'Emergency Medicine'),
('DC016', 'Sophia Lewis', 'Cardiothoracic Surgery'),
('DC018', 'Isabella Hall', 'General Surgery'),
('DC020', 'Madison Scott', 'Hematology'),
('DR001', 'John Doe', 'Cardiology'),
('DR003', 'David Johnson', 'Pediatrics'),
('DR005', 'Michael Brown', 'Dermatology'),
('DR007', 'Daniel Miller', 'Gastroenterology'),
('DR009', 'Christopher Taylor', 'Endocrinology'),
('DR011', 'Matthew Anderson', 'Psychiatry'),
('DR013', 'James White', 'Nephrology'),
('DR015', 'William Rodriguez', 'ENT (Otolaryngology)'),
('DR017', 'Benjamin Lee', 'Physical Therapy'),
('DR019', 'Joseph Young', 'Pulmonology'),
('DR022', 'Armona Sandra', 'Anesthesiology');

-- --------------------------------------------------------

--
-- Table structure for table `audit_table`
--

CREATE TABLE `audit_table` (
  `patient_id` varchar(10) DEFAULT NULL,
  `doctor_id` varchar(10) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_name` varchar(100) NOT NULL,
  `department_location` varchar(100) DEFAULT NULL,
  `facilities` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_name`, `department_location`, `facilities`) VALUES
('Anesthesiology', 'Building A, Floor 1', 'Anesthetic Administration, Pain Management, Sedation'),
('Cardiology', 'Building A, Floor 2', 'ECG, Echocardiography, Stress Test'),
('Cardiothoracic Surgery', 'Building B, Floor 2', 'Open Heart Surgery, Lung Surgery, Heart Transplantation'),
('Dermatology', 'Building C, Floor 2', 'Dermatoscopy, Cryotherapy, Laser Therapy'),
('Emergency Medicine', 'Building A, Floor 4', 'Emergency Room, Trauma Center, Life Support Services'),
('Endocrinology', 'Building B, Floor 2', 'Hormone Testing, Thyroid Biopsy, Diabetes Management'),
('ENT (Otolaryngology)', 'Building C, Floor 1', 'Hearing Tests, Sinus Surgery, Tonsillectomy'),
('Gastroenterology', 'Building C, Floor 3', 'Endoscopy, Colonoscopy, ERCP'),
('General Surgery', 'Building A, Floor 3', 'Hernia Repair, Appendectomy, Gallbladder Surgery'),
('Hematology', 'Building C, Floor 4', 'Blood Transfusion, Bone Marrow Biopsy, Chemotherapy'),
('Nephrology', 'Building C, Floor 2', 'Dialysis Unit, Kidney Transplantation, Renal Biopsy'),
('Neurology', 'Building A, Floor 4', 'EEG, EMG, Neuroimaging'),
('Oncology', 'Building B, Floor 3', 'Chemotherapy, Radiation Therapy, Cancer Support Services'),
('Ophthalmology', 'Building B, Floor 1', 'Eye Examinations, Cataract Surgery, Laser Vision Correction'),
('Orthopedics', 'Building B, Floor 3', 'X-ray, MRI, Physical Therapy'),
('Pediatrics', 'Building C, Floor 1', 'Pediatric ICU, Vaccination Center, Neonatal Unit'),
('Physical Therapy', 'Building C, Floor 3', 'Therapeutic Exercises, Rehabilitation, Pain Management'),
('Psychiatry', 'Building A, Floor 1', 'Psychotherapy, Medication Management, Group Therapy'),
('Pulmonology', 'Building B, Floor 1', 'Pulmonary Function Tests, Bronchoscopy, Asthma Management'),
('Radiology', 'Building C, Floor 4', 'X-ray, CT Scan, MRI, Ultrasound'),
('Urology', 'Building A, Floor 3', 'Urodynamic Testing, Lithotripsy, Prostate Surgery');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_admin`
--

CREATE TABLE `doctor_admin` (
  `doctor_id` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doc_on_call`
--

CREATE TABLE `doc_on_call` (
  `doctor_id` varchar(10) DEFAULT NULL CHECK (`doctor_id` like 'DC%'),
  `doctor_name` varchar(100) DEFAULT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `fees_per_call` decimal(10,2) DEFAULT NULL,
  `payment_due` decimal(10,2) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doc_on_call`
--

INSERT INTO `doc_on_call` (`doctor_id`, `doctor_name`, `qualification`, `fees_per_call`, `payment_due`, `address`, `phone_number`) VALUES
('DC002', 'Jane Smith', 'Orthopedics', 200.00, 0.00, '123 Main Street', '555-1234'),
('DC004', 'Sarah Williams', 'Neurology', 250.00, 0.00, '456 Elm Street', '555-5678'),
('DC006', 'Jennifer Davis', 'Ophthalmology', 180.00, 0.00, '789 Oak Street', '555-9012'),
('DC008', 'Emily Wilson', 'Urology', 220.00, 0.00, '321 Pine Street', '555-3456'),
('DC010', 'Jessica Martinez', 'Radiology', 300.00, 0.00, '654 Maple Street', '555-7890'),
('DC012', 'Amanda Thomas', 'Oncology', 280.00, 0.00, '987 Birch Street', '555-2345'),
('DC014', 'Olivia Clark', 'Emergency Medicine', 240.00, 0.00, '258 Cedar Street', '555-6789'),
('DC016', 'Sophia Lewis', 'Cardiothoracic Surgery', 350.00, 0.00, '753 Walnut Street', '555-0123'),
('DC018', 'Isabella Hall', 'General Surgery', 320.00, 0.00, '159 Hickory Street', '555-4567'),
('DC020', 'Madison Scott', 'Hematology', 270.00, 0.00, '852 Sycamore Street', '555-8901');

-- --------------------------------------------------------

--
-- Table structure for table `doc_reg`
--

CREATE TABLE `doc_reg` (
  `doctor_id` varchar(10) DEFAULT NULL CHECK (`doctor_id` like 'DR%'),
  `doctor_name` varchar(100) DEFAULT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `date_of_joining` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doc_reg`
--

INSERT INTO `doc_reg` (`doctor_id`, `doctor_name`, `qualification`, `address`, `phone_number`, `salary`, `date_of_joining`) VALUES
('DR001', 'John Doe', 'Cardiologist', '123 Main Street', '555-1234', 100000.00, '2023-06-23'),
('DR003', 'David Johnson', 'Pediatrician', '456 Elm Street', '555-5678', 90000.00, '2023-06-23'),
('DR005', 'Michael Brown', 'Dermatologist', '789 Oak Street', '555-9012', 95000.00, '2023-06-23'),
('DR007', 'Daniel Miller', 'Gastroenterologist', '321 Pine Street', '555-3456', 110000.00, '2023-06-23'),
('DR009', 'Christopher Taylor', 'Endocrinologist', '654 Maple Street', '555-7890', 105000.00, '2023-06-23'),
('DR011', 'Matthew Anderson', 'Psychiatrist', '987 Birch Street', '555-2345', 98000.00, '2023-06-23'),
('DR013', 'James White', 'Nephrologist', '258 Cedar Street', '555-6789', 115000.00, '2023-06-23'),
('DR015', 'William Rodriguez', 'ENT Specialist', '753 Walnut Street', '555-0123', 120000.00, '2023-06-23'),
('DR017', 'Benjamin Lee', 'Physical Therapist', '159 Hickory Street', '555-4567', 85000.00, '2023-06-23'),
('DR019', 'Joseph Young', 'Pulmonologist', '852 Sycamore Street', '555-8901', 102000.00, '2023-06-23');

-- --------------------------------------------------------

--
-- Table structure for table `pat_admit`
--

CREATE TABLE `pat_admit` (
  `patient_id` varchar(10) DEFAULT NULL,
  `advance_payment` decimal(10,2) DEFAULT NULL,
  `mode_of_payment` varchar(50) DEFAULT NULL,
  `room_number` varchar(10) DEFAULT NULL,
  `department_name` varchar(100) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL,
  `initial_condition` varchar(200) DEFAULT NULL,
  `diagnosis` varchar(200) DEFAULT NULL,
  `treatment` varchar(200) DEFAULT NULL,
  `doctor_id` varchar(10) DEFAULT NULL,
  `attendant_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `pat_admit`
--
DELIMITER $$
CREATE TRIGGER `LogPatientAdmission` AFTER INSERT ON `pat_admit` FOR EACH ROW BEGIN
    INSERT INTO audit_table (patient_id, doctor_id, date_of_admission)
    VALUES (NEW.patient_id, NEW.doctor_id, NEW.date_of_admission);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `populate_room_details_insert` AFTER INSERT ON `pat_admit` FOR EACH ROW BEGIN
    INSERT INTO room_details (room_number, patient_id, patient_name)
    VALUES (NEW.room_number, NEW.patient_id, (SELECT patient_name FROM pat_admit WHERE patient_id = NEW.patient_id));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `pat_chkup`
--

CREATE TABLE `pat_chkup` (
  `patient_id` varchar(10) DEFAULT NULL,
  `doctor_id` varchar(10) DEFAULT NULL,
  `date_of_checkup` date DEFAULT NULL,
  `diagnosis` varchar(200) DEFAULT NULL,
  `treatment` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `pat_chkup`
--
DELIMITER $$
CREATE TRIGGER `LogPatientDischarge` AFTER UPDATE ON `pat_chkup` FOR EACH ROW BEGIN
    IF NEW.status = 'Discharged' THEN
        INSERT INTO pat_dis (patient_id,date_of_discharge )
        VALUES (NEW.patient_id,CURRENT_DATE);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `pat_dis`
--

CREATE TABLE `pat_dis` (
  `patient_id` varchar(10) DEFAULT NULL,
  `treatment_given` varchar(200) DEFAULT NULL,
  `treatment_advice` varchar(200) DEFAULT NULL,
  `payment_made` decimal(10,2) DEFAULT NULL,
  `mode_of_payment` varchar(50) DEFAULT NULL,
  `date_of_discharge` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_entry`
--

CREATE TABLE `pat_entry` (
  `patient_id` varchar(10) NOT NULL CHECK (`patient_id` like 'PT%'),
  `patient_name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL CHECK (`sex` in ('M','F')),
  `address` varchar(200) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `entry_date` date DEFAULT curdate(),
  `doctor_name` varchar(100) DEFAULT NULL,
  `diagnosis` varchar(200) DEFAULT NULL,
  `department_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pat_entry`
--

INSERT INTO `pat_entry` (`patient_id`, `patient_name`, `age`, `sex`, `address`, `city`, `phone_number`, `entry_date`, `doctor_name`, `diagnosis`, `department_name`) VALUES
('PT1', 'Alan Chavez', 30, 'M', '123 Main St', 'City1', '1234567890', '2023-06-23', 'DC018', 'Gallstones', 'General Surgery'),
('PT10', 'Sallie Pena', 29, 'F', '987 Elm St', 'City10', '0123456789', '2023-06-23', 'DC002', 'Back pain', 'Orthopedics'),
('PT101', 'CALI', 20, 'M', '123 Main Street', 'Cali', '1234567890', '2023-06-23', 'DR001', 'dafafa', 'Cardiology'),
('PT2', 'Roman Small', 45, 'M', '456 Elm St', 'City2', '9876543210', '2023-06-23', 'DC004', 'Headache', 'Neurology'),
('PT3', 'Yusuf Webster', 28, 'M', '789 Oak St', 'City3', '4567890123', '2023-06-23', 'DC002', 'Sprained ankle', 'Orthopedics'),
('PT4', 'Kayla Watkins', 35, 'F', '321 Pine St', 'City4', '7890123456', '2023-06-23', 'DR007', 'Diarrhea', 'Gastroenterology'),
('PT5', 'Axel Weiss', 50, 'M', '654 Cedar St', 'City5', '2345678901', '2023-06-23', 'DR001', 'High blood pressure', 'Cardiology'),
('PT6', 'Arman Hanna', 42, 'M', '987 Maple St', 'City6', '8901234567', '2023-06-23', 'DR009', 'Diabetes', 'Endocrinology'),
('PT7', 'Leanne Atkins', 27, 'F', '159 Birch St', 'City7', '5678901234', '2023-06-23', 'DR011', 'Anxiety', 'Psychiatry'),
('PT8', 'Aisha Collier', 33, 'F', '753 Walnut St', 'City8', '9012345678', '2023-06-23', 'DC004', 'Migraine', 'Neurology'),
('PT9', 'Caiden Bender', 38, 'M', '246 Oak St', 'City9', '6789012345', '2023-06-23', 'DR019', 'Asthma', 'Pulmonology');

-- --------------------------------------------------------

--
-- Table structure for table `pat_opr`
--

CREATE TABLE `pat_opr` (
  `patient_id` varchar(10) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL,
  `date_of_operation` date DEFAULT NULL,
  `doctor_id` varchar(10) DEFAULT NULL,
  `operation_theater_number` varchar(200) DEFAULT NULL,
  `type_of_operation` varchar(100) DEFAULT NULL,
  `condition_before_operation` varchar(200) DEFAULT NULL,
  `condition_after_operation` varchar(200) DEFAULT NULL,
  `treatment_advice` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_reg`
--

CREATE TABLE `pat_reg` (
  `patient_id` varchar(10) DEFAULT NULL,
  `visit_date` date DEFAULT NULL,
  `diagnosis` varchar(200) DEFAULT NULL,
  `treatment` varchar(200) DEFAULT NULL,
  `medicine_recommended` varchar(200) DEFAULT NULL,
  `treatment_status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_details`
--

CREATE TABLE `room_details` (
  `room_number` varchar(10) NOT NULL,
  `room_type` varchar(1) DEFAULT NULL CHECK (`room_type` in ('G','P')),
  `status` varchar(1) DEFAULT NULL CHECK (`status` in ('Y','N')),
  `patient_id` varchar(10) DEFAULT NULL,
  `patient_name` varchar(100) DEFAULT NULL,
  `charges_per_day` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_details`
--

INSERT INTO `room_details` (`room_number`, `room_type`, `status`, `patient_id`, `patient_name`, `charges_per_day`) VALUES
('RN1', 'G', 'Y', 'PT101', 'CALI', 231.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_doctors`
--
ALTER TABLE `all_doctors`
  ADD PRIMARY KEY (`doctor_id`),
  ADD KEY `department_name` (`department_name`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_name`);

--
-- Indexes for table `doctor_admin`
--
ALTER TABLE `doctor_admin`
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `doc_on_call`
--
ALTER TABLE `doc_on_call`
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `doc_reg`
--
ALTER TABLE `doc_reg`
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `pat_admit`
--
ALTER TABLE `pat_admit`
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `room_number` (`room_number`),
  ADD KEY `department_name` (`department_name`);

--
-- Indexes for table `pat_chkup`
--
ALTER TABLE `pat_chkup`
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `pat_dis`
--
ALTER TABLE `pat_dis`
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `pat_entry`
--
ALTER TABLE `pat_entry`
  ADD PRIMARY KEY (`patient_id`),
  ADD KEY `doctor_name` (`doctor_name`),
  ADD KEY `department_name` (`department_name`);

--
-- Indexes for table `pat_opr`
--
ALTER TABLE `pat_opr`
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `pat_reg`
--
ALTER TABLE `pat_reg`
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `room_details`
--
ALTER TABLE `room_details`
  ADD PRIMARY KEY (`room_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `all_doctors`
--
ALTER TABLE `all_doctors`
  ADD CONSTRAINT `all_doctors_ibfk_1` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`);

--
-- Constraints for table `doctor_admin`
--
ALTER TABLE `doctor_admin`
  ADD CONSTRAINT `doctor_admin_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`);

--
-- Constraints for table `doc_on_call`
--
ALTER TABLE `doc_on_call`
  ADD CONSTRAINT `doc_on_call_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`);

--
-- Constraints for table `doc_reg`
--
ALTER TABLE `doc_reg`
  ADD CONSTRAINT `doc_reg_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`);

--
-- Constraints for table `pat_admit`
--
ALTER TABLE `pat_admit`
  ADD CONSTRAINT `pat_admit_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`),
  ADD CONSTRAINT `pat_admit_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`),
  ADD CONSTRAINT `pat_admit_ibfk_3` FOREIGN KEY (`room_number`) REFERENCES `room_details` (`room_number`),
  ADD CONSTRAINT `pat_admit_ibfk_4` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`);

--
-- Constraints for table `pat_chkup`
--
ALTER TABLE `pat_chkup`
  ADD CONSTRAINT `pat_chkup_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`),
  ADD CONSTRAINT `pat_chkup_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`);

--
-- Constraints for table `pat_dis`
--
ALTER TABLE `pat_dis`
  ADD CONSTRAINT `pat_dis_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`);

--
-- Constraints for table `pat_entry`
--
ALTER TABLE `pat_entry`
  ADD CONSTRAINT `pat_entry_ibfk_1` FOREIGN KEY (`doctor_name`) REFERENCES `all_doctors` (`doctor_id`),
  ADD CONSTRAINT `pat_entry_ibfk_2` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`);

--
-- Constraints for table `pat_opr`
--
ALTER TABLE `pat_opr`
  ADD CONSTRAINT `pat_opr_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`),
  ADD CONSTRAINT `pat_opr_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `all_doctors` (`doctor_id`);

--
-- Constraints for table `pat_reg`
--
ALTER TABLE `pat_reg`
  ADD CONSTRAINT `pat_reg_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
