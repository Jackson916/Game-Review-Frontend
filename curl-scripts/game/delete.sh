# ID="626157dd345e3647f060009f"

API="http://localhost:4741"
URL_PATH="/games"


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo