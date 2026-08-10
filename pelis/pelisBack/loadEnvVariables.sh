#!/bin/bash




jwt=$(echo $JWT_SECRET)
db=$(echo $URL_DB)

echo "Variables creadas"
echo  "Jwt secret: ${jwt}"
echo  "UrlDb : ${db}"

