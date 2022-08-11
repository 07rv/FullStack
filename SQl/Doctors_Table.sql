USE [HealthXOXO]


CREATE TABLE Doctors(
	Id int IDENTITY(1,1) NOT NULL,
	EmailId varchar(255) NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NULL,
	Age int NULL,
	Experience varchar(255) NULL,
	Award varchar(255) NULL,
	PRIMARY KEY (EmailId)
)


