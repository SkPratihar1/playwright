FROM node:18
FROM mcr.microsoft.com/playwright:v1.42.1-jammy
RUN mkdir /e2e-tests
WORKDIR /e2e-tests
COPY . .

# Install dependencies
RUN npm install
# RUN npx playwright install-deps chromium
# RUN npx playwright install

CMD ["sh ./bin/run.sh"]
#CMD ["npm", "run", "test-cucumber"]
