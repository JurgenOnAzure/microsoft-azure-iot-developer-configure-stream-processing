WITH input AS
(
	SELECT
		humidity
	FROM
		iothubinput
	TIMESTAMP BY
		EventEnqueuedUtcTime
)
SELECT
	System.Timestamp AS EnqueuedUtc,
	UDA.humidityTotalWeightedAverage(input) as HumidityTWA
FROM
	input 
GROUP BY
	TumblingWindow(second, 20)