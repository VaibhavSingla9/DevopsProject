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
                    Write-Host "Application started. Process ID: $($process.Id)"
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