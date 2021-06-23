#r "Newtonsoft.Json"
#r "Microsoft.WindowsAzure.Storage"

using System;
using Newtonsoft.Json;

public static async Task Run(
	string myIoTHubMessage, 
	ILogger log, 
	Microsoft.WindowsAzure.Storage.Blob.CloudBlobDirectory outputBlobDirectory)
{
	log.LogInformation($"C# IoT Hub trigger function processed a message: {myIoTHubMessage}");

	var message = JsonConvert.DeserializeObject(myIoTHubMessage) as dynamic;

	if (message.humidity < 70)
	{
		log.LogInformation($"Skipped message with humidity {message.humidity}");

		return;
	}

	await outputBlobDirectory.Container.CreateIfNotExistsAsync();
	var blockBlob = outputBlobDirectory.GetBlockBlobReference($"blob{DateTime.UtcNow.Ticks}");
	await blockBlob.UploadTextAsync($"Received the following message from IoT Hub: {myIoTHubMessage}");
}