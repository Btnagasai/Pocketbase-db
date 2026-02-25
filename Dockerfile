FROM alpine:3.18

WORKDIR /app

COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
COPY pb_migrations /app/pb_migrations

EXPOSE 10000

CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]