SELECT 
	System.Timestamp AS EnqueuedUtc,
	IotHub.ConnectionDeviceId AS DeviceId,
	Avg(humidity) AS AverageHumidity
INTO
  	bloboutput
FROM
	iothubinput 
TIMESTAMP BY
	EventEnqueuedUtcTime
GROUP BY 
	TumblingWindow(second,15), IotHub.ConnectionDeviceId
HAVING Avg(humidity)>70
