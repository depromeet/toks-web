echo "################## 개발서버 배포를 시작합니다.##################"

git checkout feat/cd
git pull origin feat/cd

echo "##################의존성 설치##################"

yarn

echo "##################빌드를 시작합니다##################"

yarn build

echo "##################빌드 끝##################"

echo "@@배포를 시작합니다@@"

ip="44.202.49.226"
instance="ec2-44-202-49-226.compute-1.amazonaws.com"
echo "${ip}, ${instance}"

curl http://${ip}:8080/init

mkdir -p ./builds/

tar -czv .next > ./builds/.next.tar.gz

scp -r -i ../frontend-key.pem ./builds/.next.tar.gz ubuntu@${instance}:/home/ubuntu/builds/.next.tar.gz

curl http://${ip}:8080/deploy