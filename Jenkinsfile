// pipeline {

//     agent any

//     tools {
//         nodejs 'Node18'
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 git branch: 'main',
//                 url: 'https://github.com/Jayynemade/react-node-demo'
//             }
//         }

//         stage('Install Backend Dependencies') {
//             steps {
//                 dir('backend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('Install Frontend Dependencies') {
//             steps {
//                 dir('frontend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('Build Frontend') {
//             steps {
//                 dir('frontend') {
//                     sh 'npm run build'
//                 }
//             }
//         }

//         stage('Backend Test') {
//             steps {
//                 dir('backend') {
//                     sh 'echo Backend Tests Passed'
//                 }
//             }
//         }

//         stage('Frontend Test') {
//             steps {
//                 dir('frontend') {
//                     sh 'echo Frontend Tests Passed'
//                 }
//             }
//         }
//     }

//     post {

//         success {
//             echo 'Pipeline Successful'
//         }

//         failure {
//             echo 'Pipeline Failed'
//         }
//     }
// }

// pipeline {
//     agent any

//     tools {
//         nodejs 'Node18'
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 git branch: 'main',
//                 url: 'https://github.com/Jayynemade/react-node-demo'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh '''
//                     cd backend && npm install
//                     cd ../frontend && npm install
//                 '''
//             }
//         }

//         stage('Build Frontend') {
//             steps {
//                 sh 'cd frontend && npm run build'
//             }
//         }

//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker compose build'
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 sh '''
//                     docker compose down || true
//                     docker compose up -d
//                 '''
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Docker Deployment Successful 🚀'
//         }
//         failure {
//             echo 'Deployment Failed ❌'
//         }
//     }
// }

pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Jayynemade/react-node-demo'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    cd backend && npm install
                    cd ../frontend && npm install
                '''
            }
        }

        stage('Run Backend Tests') {
            steps {
                sh '''
                    cd backend
                    npm test
                '''
            }
        }

        stage('Run Frontend Tests') {
            steps {
                sh '''
                    cd frontend
                    npm test -- --watchAll=false
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose down || true
                    docker compose up -d
                '''
            }
        }
    }

    post {

        always {
            junit allowEmptyResults: true,
                  testResults: 'backend/test-results/junit.xml, frontend/test-results/junit.xml'
        }

        success {
            echo 'Docker Deployment Successful 🚀'
        }

        failure {
            echo 'Deployment Failed ❌'
        }
    }
}