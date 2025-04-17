# Stage 1: Builder - Instala dependencias y construye la aplicación
FROM node:20.11-alpine AS builder

WORKDIR /app

# Copiar los archivos de configuración de paquetes primero para aprovechar la caché de Docker
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instalar las dependencias usando el gestor de paquetes preferido (aquí usamos npm como ejemplo)
RUN npm install --frozen-lockfile

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run build

# Stage 2: Runner - Solo lo necesario para producción
FROM node:20.11-alpine AS runner
WORKDIR /app

# No necesitamos el paquete npm en producción
ENV NODE_ENV production
RUN npm install --global pm2

# Copiar los archivos necesarios del builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8000

ENV PORT 8000

ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]