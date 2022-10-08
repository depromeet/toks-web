#! /bin/bash

read -p "서비스 이름을 입력해주세요. 👉 " name
read -r -p "서비스 설명을 입력해주세요. 👉 " description
read -p "서비스 담당자의 이름을 입력해주세요. 👉 " owner

trimmedDescription="${description// /_}"
trimmedOwner="${owner// /_}"

npx hygen service new --name $name --owner $trimmedOwner --description $trimmedDescription
yarn
