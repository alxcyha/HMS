-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2023 at 12:46 PM
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOccupiedAndVacantRooms` ()   BEGIN
    SELECT room_details.room_number, room_details.status
    FROM ROOM_DETAILS;
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
('DC', 'John Cena', 'Radiology'),
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
('DC317', 'John Doe', 'Cardiology'),
('DR', 'John Doe', 'Cardiology'),
('DR003', 'David Johnson', 'Pediatrics'),
('DR005', 'Michael Brown', 'Dermatology'),
('DR007', 'Daniel Miller', 'Gastroenterology'),
('DR009', 'Christopher Taylor', 'Endocrinology'),
('DR011', 'Matthew Anderson', 'Psychiatry'),
('DR013', 'James White', 'Nephrology'),
('DR015', 'William Rodriguez', 'ENT (Otolaryngology)'),
('DR017', 'Benjamin Lee', 'Physical Therapy'),
('DR019', 'Joseph Young', 'Pulmonology'),
('DR892', 'Santoto Toh', 'Cardiology');

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
-- Stand-in structure for view `data_mart`
-- (See below for the actual view)
--
CREATE TABLE `data_mart` (
`department_name` varchar(100)
,`doctor_id` varchar(10)
,`doctor_name` varchar(100)
,`patient_id` varchar(10)
,`patient_name` varchar(100)
);

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
  `doctor_id` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor_admin`
--

INSERT INTO `doctor_admin` (`doctor_id`, `password`) VALUES
('samsam', 'sammy');

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
('DC', 'John Cena', 'Bachelor of Medicine and Bachelor of Surgery', 1000.00, 2000.35, '123 Main Street', '1234567890');

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
('DR', 'John Doe', 'Bachelor of Medicine and Bachelor of Surgery', '123 Main Street', '1234567890', 60000.00, '2023-06-15');

-- --------------------------------------------------------

--
-- Table structure for table `patient_admin`
--

CREATE TABLE `patient_admin` (
  `patient_id` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient_admin`
--

INSERT INTO `patient_admin` (`patient_id`, `password`) VALUES
('dambo', 'dambo');

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
('PT101', 'CALI', 43, 'M', '123 Main Street', 'Cali', '1234567890', '2023-06-15', 'DC', 'dafafa', 'Radiology');

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

-- --------------------------------------------------------

--
-- Structure for view `data_mart`
--
DROP TABLE IF EXISTS `data_mart`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `data_mart`  AS SELECT `department`.`department_name` AS `department_name`, `all_doctors`.`doctor_id` AS `doctor_id`, `all_doctors`.`doctor_name` AS `doctor_name`, `pat_entry`.`patient_id` AS `patient_id`, `pat_entry`.`patient_name` AS `patient_name` FROM ((`department` join `all_doctors` on(`department`.`department_name` = `all_doctors`.`department_name`)) join `pat_entry` on(`all_doctors`.`doctor_name` = `pat_entry`.`doctor_name`)) ;

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
  ADD PRIMARY KEY (`doctor_id`);

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
-- Indexes for table `patient_admin`
--
ALTER TABLE `patient_admin`
  ADD PRIMARY KEY (`patient_id`);

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
  ADD PRIMARY KEY (`room_number`),
  ADD KEY `patient_id` (`patient_id`);

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

--
-- Constraints for table `room_details`
--
ALTER TABLE `room_details`
  ADD CONSTRAINT `room_details_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `pat_entry` (`patient_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
