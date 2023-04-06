pipeline {
    agent {
        docker { image 'node:lts' }
    }

    environment {
        FRONTEND_IMAGE = 'xela146/tutor-front:latest'
        BACKEND_IMAGE = 'xela146/tutor-back:latest'
    }

  stages {
    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'docker build -t $FRONTEND_IMAGE .'
        }
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'docker build -t $BACKEND_IMAGE .'
        }
      }
    }

    stage('Test Frontend') {
      steps {
        dir('frontend') {
          sh 'docker run $FRONTEND_IMAGE npx expo test'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir('backend') {
          sh 'docker run $BACKEND_IMAGE npm test'
        }
      }
    }

    // stage('Run Frontend') {
    //   steps {
    //     dir('frontend') {
    //       sh 'docker run $FRONTEND_IMAGE'
    //     }
    //   }
    // }

    // stage('Run Backend') {
    //   steps {
    //     dir('backend') {
    //       sh 'docker run $BACKEND_IMAGE'
    //     }
    //   }
    // }

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

    stage('Push Backend Image') {
      when {
        branch 'main'
      }
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
            sh "docker push $BACKEND_IMAGE"
          }
        }
      }
    }

    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        git(url: 'https://github.com/username/repo-containing-docker-compose.git', branch: 'main')
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
