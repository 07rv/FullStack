

CREATE PROCEDURE InsertNewDoctor
	@EmailId varchar(255), @FirstName varchar(255), @LastName varchar(255),
	@Age int, @Experience int, @Award varchar(255)
As
BEGIN
	INSERT INTO HealthXOXO.dbo.Doctors(EmailId, FirstName, LastName, Age, Experience,Award)
	VALUES (@EmailId, @FirstName, @LastName, @Age, @Experience, @Award);
END
GO
