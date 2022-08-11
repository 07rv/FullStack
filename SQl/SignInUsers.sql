


CREATE PROCEDURE SignInUsers
	@EmailId varchar(255), @Password varchar(255)
As
BEGIN
	SELECT *FROM HealthXOXO.dbo.Users where EmailId = @EmailId and Password = @Password
END
GO
