SELECT
	System.Timestamp AS EnqueuedUtc,
	IotHub.ConnectionDeviceId AS DeviceId,
	Humidity,
	UDF.getHumidityLevel(Humidity) as HumidityLevel -- should work
	--UDF.getHumidityLevel(System.Timestamp) as HumidityLevel -- should fail
INTO
   bloboutput
FROM
	iothubinput 
TIMESTAMP BY
	EventEnqueuedUtcTime