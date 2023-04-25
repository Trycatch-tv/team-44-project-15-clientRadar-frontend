pipeline {
  agent any
  tools {
    nodejs '18.14.2'
  }

  options {
    timeout(time: 10, unit: 'MINUTES')
  }

  stages {
    stage('Installations') {
      steps {
        sh 'npm install'
      }
    }
    stage('Testing') {
      steps {
        sh 'npm test'
      }
    }  
    stage('Build Docker Image') {
      steps {
        sh 'docker build . -t cascorp/radar-client:0.0.${BUILD_NUMBER}'
      }
    }
    // stage('Publish') {
    //   steps {
    //     sh 'docker push cascorp/radar-client:0.0.1'
    //   }
    // }
  }
}