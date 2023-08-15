#!/bin/bash

# dependabot が作成したブランチはデプロイしない
echo "📝 VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
if [[ `echo "$VERCEL_GIT_COMMIT_REF" | grep "dependabot/"` ]]; then
  exit 0;
fi

# dependabot が作成したブランチがマージされた時はデプロイしない
echo "📝 VERCEL_GIT_COMMIT_AUTHOR_LOGIN: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"
if [[ `echo "$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" | grep "dependabot"` ]]; then
  exit 0;
fi
exit 1;
