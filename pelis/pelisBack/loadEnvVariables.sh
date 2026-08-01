#!/bin/bash

#postgresql://neondb_owner:npg_laL0SXp4dJnv@ep-lively-salad-ayg69gm7-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require

JWT_SECRET="mikis"
URL_DB="host=ep-lively-salad-ayg69gm7-pooler.c-5.us-east-2.aws.neon.tech user=neondb_owner password=npg_laL0SXp4dJnv dbname=neondb"

export JWT_SECRET=$JWT_SECRET
export URL_DB=$URL_DB

jwt=$(echo $JWT_SECRET)
db=$(echo $URL_DB)

echo "Variables creadas"
echo  "Jwt secret: ${jwt}"
echo  "UrlDb : ${db}"

