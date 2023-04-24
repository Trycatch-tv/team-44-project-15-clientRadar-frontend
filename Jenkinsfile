pipeline {
  agent any
  tools {
    nodejs '18.14.2'
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Publish') {
      steps {
        sh 'ls -la'
      }
    }
  }
}