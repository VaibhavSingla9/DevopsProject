pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                powershell '''
                    $process = Start-Process -FilePath "node" -ArgumentList "server.js" -PassThru

                    Start-Sleep -Seconds 5

                    $response = Invoke-WebRequest -Uri "http://localhost:3000/health" -UseBasicParsing

                    if ($response.StatusCode -eq 200) {
                        Write-Host "Health check passed!"
                    }
                    else {
                        throw "Health check failed!"
                    }

                    Stop-Process -Id $process.Id -Force
                '''
            }
        }

         stage('Test Pipeline') {
            steps {
                echo 'Jenkins pipeline is working!'
            }
        }
    }
}