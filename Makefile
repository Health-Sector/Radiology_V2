up:
	docker-compose up --build

down:
	docker-compose down -v

logs:
	docker-compose logs -f

restart:
	docker-compose down -v && docker-compose up --build

rebuild:
	docker-compose build --no-cache

ps:
	docker-compose ps

stop:
	docker-compose stop
