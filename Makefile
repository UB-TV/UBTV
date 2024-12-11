include .env

cleanup:
	@php artisan cache:clear
	@php artisan config:clear
	@php artisan event:clear
	@php artisan optimize:clear

run:
	@php artisan serve

devdb:
	@docker run --name postgres --detach \
		--publish 127.0.0.1:${DB_PORT}:5432 \
		--env POSTGRES_USER=${DB_USERNAME} \
		--env POSTGRES_PASSWORD=${DB_PASSWORD} \
		postgres:17.1-alpine3.20

.PHONY: cleanup run devdb
