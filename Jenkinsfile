pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test Pipeline') {
            steps {
                echo 'Jenkins pipeline is working!'
            }
        }
    }
}