pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Docker Check') {
            steps {
                bat '''
                    set PATH=C:\\Users\\hp\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                    docker build -t devops-app .
                '''
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

                    if (Get-Process -Id $process.Id -ErrorAction SilentlyContinue) {
                        Stop-Process -Id $process.Id -Force
                        Write-Host "Application stopped successfully."
                    }
                    else {
                        Write-Host "Application process has already stopped."
                    }
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