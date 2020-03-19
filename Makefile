# Project
.PHONY: docker-up
docker-up:
	docker-compose up --build -d

.PHONY: docker-down
docker-down:
	docker-compose down

# APP
.PHONY: up
up:
	make docker-up

.PHONY: down
down:
	make docker-down