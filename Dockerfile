# Cypress version must match "cypress" in package.json
ARG CYPRESS_VERSION=13.15.0              

# 1. Base image: Node + Cypress + Chrome, Firefox, Edge
FROM cypress/included:${CYPRESS_VERSION}

# 2. All following commands run in /e2e
WORKDIR /e2e

# 3. Dependencies first, so this layer is cached
COPY package.json package-lock.json ./
ENV CI=1
RUN npm ci

# 4. Now the test code (changes often)
COPY . .

# 5. Fail the build early if Cypress is broken
RUN npx cypress verify

# Base image ENTRYPOINT is "cypress run"; these are default args
CMD ["--browser", "chrome"]
