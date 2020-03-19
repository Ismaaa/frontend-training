# Project
.PHONY: docker-up
docker-up:
	docker-compose up --build -d

.PHONY: docker-down
docker-down:
	docker-compose down

.PHONY: logs
logs:
	docker-compose logs -f

# APP
.PHONY: up
up:
	make docker-up
	make logs

.PHONY: down
down:
	make docker-down

.PHONY: restart
restart:
	make docker-down
	make docker-up