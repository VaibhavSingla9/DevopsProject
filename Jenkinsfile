pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                bat 'nmp install'
            }
        }
    }

    stages {
        stage('Test Pipeline') {
            steps {
                echo 'Jenkins pipeline is working!'
            }
        }
    }
}