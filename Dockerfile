########################################################################################################################
#                                                      DOCKER FILE                                                     #
########################################################################################################################

# 1. Use Alpine image with Node.js 23.
# 2. Set the working directory to app.
# 3. Copy the markdownlint configuration file to the container.
# 4. Install markdownlint-cli2 globally.
# 5. Update cross-spawn.
# 6. Update OpenSSL to the latest version using APK.
# 7. Create a non-root user and group.
# 8. Switch to the non-root user (node).
# 9. Start a shell when the container is run.

# Use Alpine image with Node.js 23

FROM node:23-alpine

# Set the working directory to app

WORKDIR /app

# Copy the markdownlint configuration file to the container

COPY .config/.markdownlint-cli2.jsonc /app/.config/.markdownlint-cli2.jsonc

# Copy the markdownlint custom rule file(s) to the container

COPY .config/custom-markdownlint-rules/capitalised-headings.js /app/.config/custom-markdownlint-rules/capitalised-headings.js

# Install markdownlint-cli2 globally

RUN npm install -g markdownlint-cli2

# Update cross-spawn

RUN mkdir -p /usr/local/etc && \
    echo '{ "overrides": { "cross-spawn": "7.0.6" } }' > /usr/local/etc/npmrc && \
    npm config set globalconfig /usr/local/etc/npmrc && \
    npm install -g npm

# Update OpenSSL to the latest version using APK

RUN apk update && \
    apk add --no-cache openssl && \
    apk upgrade openssl

# Lodash fix

RUN npm install -g lodash@4.17.21

# Create a non-root user and group

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to the non-root user (appuser)

USER node

# Start a shell when the container is run

CMD ["/bin/sh"]
