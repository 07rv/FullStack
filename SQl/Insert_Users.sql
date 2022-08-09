
CREATE PROCEDURE InsertNewUsers
	@EmailId varchar, @FirstName varchar, @LastName varchar,
	@Password varchar, @Age int, @Address varchar
As
BEGIN
	INSERT INTO HeathXOXO.Users(EmailId, FirstName, LastName, Password, Age, Address)
	VALUES (@EmailId, @FirstName, @LastName, @Password, @Age, @Address);
END
GO
