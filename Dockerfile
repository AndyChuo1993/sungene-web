# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Install dependencies (clean, reproducible)
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Next.js for production
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Ensure unprivileged user
RUN addgroup -S nodegrp && adduser -S nodeusr -G nodegrp
# Copy runtime essentials only
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/data ./data
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
# Cloud Run uses $PORT
ENV PORT=8080
EXPOSE 8080
USER nodeusr
# Use next start, binding to $PORT
CMD ["sh","-c","node node_modules/next/dist/bin/next start -p ${PORT:-8080}"]
