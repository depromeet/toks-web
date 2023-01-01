read -p "서비스 이름을 입력해주세요. 👉 " service

echo "##################${service} 배포를 시작합니다.##################"

git checkout master
git pull

cd services/${service}/

echo "##################의존성 설치##################"

yarn

echo "##################빌드를 시작합니다##################"

yarn build

echo "##################빌드 끝##################"

echo "@@배포를 시작합니다@@"

ip=""
instance=""

case $service in 
    "login" ) 
    ip="52.23.167.1"
    instance="ec2-52-23-167-1.compute-1.amazonaws.com"
    ;; 
    "home" ) 
    ip="3.87.30.27"
    instance="ec2-3-87-30-27.compute-1.amazonaws.com"
    ;; 
    "quiz" ) 
    ip="54.161.93.155"
    instance="ec2-54-161-93-155.compute-1.amazonaws.com"
    ;; 
    "onboarding" ) 
    ip="44.203.4.105"
    instance="ec2-44-203-4-105.compute-1.amazonaws.com"
    ;;
    *)  
    echo "일치하는 서비스가 없습니다." 
    exit  
    ;;
esac

echo "${ip}, ${instance}"

curl http://${ip}:8080/init/${service}

mkdir -p ./builds/

tar -czv .next > ./builds/.next.tar.gz

scp -r -i ../../../frontend-key.pem ./builds/.next.tar.gz ubuntu@${instance}:/home/ubuntu/builds/${service}/.next.tar.gz

curl http://${ip}:8080/deploy/${service}