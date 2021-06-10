$SummaryUrl = "https://gitlab.com/api/v4/projects/$env:CI_PROJECT_ID/pipelines/$env:CI_PIPELINE_ID/test_report?private_token=$env:GITLAB_PERSONAL_TOKEN" 

$summary = Invoke-WebRequest $SummaryUrl -SessionVariable 'Session' -Method 'GET' -UseBasicParsing | ConvertFrom-Json
function Get-FailedTests($summary) {
	[hashtable]$summaryTable = @{ }
	[System.Collections.ArrayList]$FailedByModule = @()
	[System.Collections.ArrayList]$ExecutionTime = @()

	$summaryTable.report = "**PIPELINE $env:CI_PIPELINE_ID - [GitLab Report](https://gitlab.com/qualip/Tester/Tester-cypress/-/pipelines/$env:CI_PIPELINE_ID/test_report)**"

	$summaryTable.header = "`" \n\r*Total: $($summary.total_count)* ->  \t\tPassed: $($summary.success_count) - Failed: $($summary.failed_count)`""
    
	for ($i = 0; $i -lt $summary.test_suites.Length; $i++) {
		$FailedByModule.Add(@"
     \n $($summary.test_suites[$i].name): \n $($summary.test_suites[$i].total_count) Tests - $($summary.test_suites[$i].failed_count) failed \n\n
"@) > $null
	}


	for ($i = 0; $i -lt $summary.test_suites.Length; $i++) {
		$s = $($summary.test_suites[$i].total_time)
		$ts = [timespan]::fromseconds($s)
		$aaa = ("{0:mm\:ss}" -f $ts)

		$ExecutionTime.Add(@"
    \n $($summary.test_suites[$i].name):  $aaa min
"@) > $null
	}

	$summaryTable.time = $ExecutionTime
	$summaryTable.failure = $FailedByModule
	return $summaryTable
}

$data = Get-FailedTests $summary 

$message = @"
{
	"blocks": [
        {
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Test Execution Result - Pipeline $env:CI_PIPELINE_ID",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": $($data.header)
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Test Report"
				},
				"value": "report",
				"url": "https://gitlab.com/qualip/Tester/Tester-cypress/-/pipelines/$env:CI_PIPELINE_ID/test_report",
				"action_id": "button-action"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Failures:*  $($data.failure)"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Execution Time:* $($data.time)"
			}
		}
	]
}
"@


$uriSlack = "https://hooks.slack.com/services/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"
$body = ConvertTo-Json @{
	text = $message    
}

try {
	Invoke-RestMethod -uri $uriSlack -Method Post -body $message -ContentType 'application/json' | Out-Null
}
catch {
	Write-Error (Get-Date) ": Update to Slack went wrong..."
}