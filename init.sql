/*
  Doctor has many patients (1:m)
  Doctor has many appointments (1:m)
*/
CREATE TABLE Doctor (
    pat_id int NOT NULL,
    app_id int NOT NULL,
    doc_id int PRIMARY KEY,
    doc_firstname VARCHAR ( 25 ) NOT NULL,
    doc_surname VARCHAR ( 25 ) NOT NULL
);

/*
  Patient has one appointment (1:1)
  Patient has one doctor (1:1)
*/
CREATE TABLE Patient (
    doc_id int NOT NULL,
    pat_id int PRIMARY KEY,
    pat_firstname VARCHAR ( 25 ) NOT NULL,
    pat_surname VARCHAR ( 25 ) NOT NULL,
    pat_address VARCHAR ( 25 ) NOT NULL,
    pat_city VARCHAR ( 25 ) NOT NULL,
    FOREIGN KEY (doc_id) REFERENCES Doctor(doc_id) /* Doctor has many patients */
);

/*
  Appointment has one patient
*/
CREATE TABLE Appointment (
    doc_id int NOT NULL,
    pat_id int NOT NULL,
    app_id int PRIMARY KEY,
    app_date date NOT NULL,
    app_time date NOT NULL,
    app_duration int NOT NULL,
    app_reason VARCHAR ( 255 ),
    FOREIGN KEY (doc_id) REFERENCES Doctor(doc_id), /* Doctor has many appointments */
    CONSTRAINT fk_pat_id FOREIGN KEY (pat_id) REFERENCES Patient(pat_id)
);
