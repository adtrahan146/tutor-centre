pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'xela146/tutor-front:latest'
        BACKEND_IMAGE = 'xela146/tutor-back:latest'
    }

  stages {
    stage('Build Frontend') {

      steps {
          sh 'docker build -t $FRONTEND_IMAGE .'
      }
    }

    stage('Run Tests with Server active') {
        steps {
            script {
            sh 'docker run -d --name backend-test -p 3000:3000 $BACKEND_IMAGE'
            sh 'docker run $FRONTEND_IMAGE npm test'
            sh 'docker stop backend-test'
            sh 'docker rm backend-test'
            }
        }
    }

    stage('Push Frontend Image') {
      when {
        branch 'main'
      }
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
            sh "docker push $FRONTEND_IMAGE"
          }
        }
      }
    }

    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        git(url: 'https://github.com/adtrahan146/tutor-centre.git', branch: 'main')
        dir('repo-containing-docker-compose') {
          withDockerRegistry([credentialsId: 'dockerhub-credentials', url: 'https://index.docker.io/v1/']) {
            sh 'docker-compose pull'
            sh 'docker-compose up -d'
          }
        }
      }
    }
  }
}
