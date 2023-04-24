pipeline {
  agent any
  tools {
    nodejs '18.14.2'
  }

  options {
    timeout(time: 30, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run build') {
      steps {
        sh 'ls -a'
      }
    }
    // stage('Publish') {
    //   steps {
    //     sh 'ls -la'
    //   }
    // }
  }
}