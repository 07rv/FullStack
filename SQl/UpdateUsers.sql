
CREATE PROCEDURE UpdateUser
	@EmailId varchar(255), @FirstName varchar(255), @LastName varchar(255),
    @Age int, @Address varchar(255)
As
BEGIN
	UPDATE HealthXOXO.dbo.Users
	SET FirstName = @FirstName, LastName = @LastName, 
		Age = @Age, Address = @Address
	WHERE EmailId = @EmailId
END
GO
