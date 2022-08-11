USE [HealthXOXO]


CREATE TABLE Users(
	Id int IDENTITY(1,1) NOT NULL,
	EmailId varchar(255) NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NULL,
	Password varchar(255) NOT NULL,
	Age int NULL,
	Address varchar(255) NULL,

	PRIMARY KEY (EmailId)
)


