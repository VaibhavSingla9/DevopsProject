pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    bat '''
                        set PATH=C:\\Users\\hp\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                        docker login -u "%DOCKER_USERNAME%" -p "%DOCKER_PASSWORD%"
                    '''
                }
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

        stage('Docker Tag') {
    steps {
        bat '''
            set PATH=C:\\Users\\hp\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
            docker tag devops-app:latest vaibhavsingla456/devops-app:v1
        '''
    }
}

stage('Docker Push') {
    steps {
        bat '''
            set PATH=C:\\Users\\hp\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
            docker push vaibhavsingla456/devops-app:v1
        '''
    }
}

  stage('Test') {
    steps {
        powershell '''
            $workspace = $env:WORKSPACE

            $process = Start-Process `
                -FilePath "node" `
                -ArgumentList "server.js" `
                -WorkingDirectory $workspace `
                -PassThru `
                -RedirectStandardOutput "$workspace\\node-output.log" `
                -RedirectStandardError "$workspace\\node-error.log"

            Start-Sleep -Seconds 5

            Write-Host "Node process ID: $($process.Id)"

            if ($process.HasExited) {
                Write-Host "Node process exited unexpectedly."
                Write-Host "----- Node Error -----"
                if (Test-Path "$workspace\\node-error.log") {
                    Get-Content "$workspace\\node-error.log"
                }
                Write-Host "----- Node Output -----"
                if (Test-Path "$workspace\\node-output.log") {
                    Get-Content "$workspace\\node-output.log"
                }
                throw "Node.js application failed to start."
            }

            Write-Host "Node process is still running."

            $response = Invoke-WebRequest `
                -Uri "http://localhost:3000/health" `
                -UseBasicParsing

            if ($response.StatusCode -eq 200) {
                Write-Host "Health check passed!"
            }
            else {
                throw "Health check failed!"
            }

            Stop-Process -Id $process.Id -Force
            Write-Host "Application stopped successfully."
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