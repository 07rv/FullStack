
ALTER PROCEDURE InsertNewUsers
	@EmailId varchar(255), @FirstName varchar(255), @LastName varchar(255),
	@Password varchar(255), @Age int, @Address varchar(255)
As
BEGIN
	INSERT INTO HealthXOXO.dbo.Users(EmailId, FirstName, LastName, Password, Age, Address)
	VALUES (@EmailId, @FirstName, @LastName, @Password, @Age, @Address);
END
GO
