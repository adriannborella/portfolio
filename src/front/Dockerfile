# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY src/package.json /app/package.json
RUN yarn install --frozen-lockfile

# Copy the Next.js app source code
COPY ./src /app/.

# Build the Next.js app
RUN yarn build

# Stage 2: Run the Next.js app
FROM node:18-alpine

WORKDIR /home/app

# Copy only the built files from the builder stage
COPY --from=builder /app/ /home/app/

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose the port Next.js listens on
EXPOSE 3000

# Run Next.js
CMD ["yarn", "start"]
