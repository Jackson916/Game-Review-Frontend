
API="http://localhost:4741"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "games": {
      "title": "'"${TITLE}"'",
      "body": "'"${BODY}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo

