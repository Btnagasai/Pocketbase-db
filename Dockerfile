FROM alpine:3.18

WORKDIR /app

# Install SQLite dependencies for PocketBase
RUN apk add --no-cache sqlite

COPY pocketbase /app/pocketbase
COPY pb_migrations /app/pb_migrations

# Create pb_data directory (PocketBase will initialize it on first run)
RUN mkdir -p /app/pb_data

EXPOSE 10000

CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
