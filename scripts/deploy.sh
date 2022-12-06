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

curl http://54.175.148.212:8080/init/${service}

mkdir -p ./builds/

tar -czv .next > ./builds/.next.tar.gz

scp -r -i ../../../frontend-key.pem ./builds/.next.tar.gz ubuntu@ec2-54-175-148-212.compute-1.amazonaws.com:/home/ubuntu/builds/${service}/.next.tar.gz

curl http://54.175.148.212:8080/deploy/${service}