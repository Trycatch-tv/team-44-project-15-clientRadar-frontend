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
        sh 'npm run build'
      }
    }
    stage('Publish') {
      steps {
        sh 'cp -rf dist/* /usr/local/lsws/radar-front.devcol.store/html'
      }
    }
    stage('Validate') {
      steps {
        sh 'ls /usr/local/lsws/radar-front.devcol.store/html/'
      }
    }
  }
}