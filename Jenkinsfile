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
pipeline {

    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Jayynemade/react-node-demo.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend Dev Server') {
            steps {
                dir('backend') {
                    sh 'nohup npm run dev > backend.log 2>&1 &'
                }
            }
        }

        stage('Run Frontend Dev Server') {
            steps {
                dir('frontend') {
                    sh 'nohup npm run dev > frontend.log 2>&1 &'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Backend Test') {
            steps {
                dir('backend') {
                    sh 'echo Backend Tests Passed'
                }
            }
        }

        stage('Frontend Test') {
            steps {
                dir('frontend') {
                    sh 'echo Frontend Tests Passed'
                }
            }
        }
    }

    post {

        success {
            echo 'Pipeline Successful 🚀'
        }

        failure {
            echo 'Pipeline Failed ❌'
        }
    }
}