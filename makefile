pushdb:
	npx prisma db push

run: pushdb
	npm run dev

pris:
	npx prisma studio

add:
	npx solidui-cli add


build: 
	docker build -t solidstart-app .

docker-run:
	docker run -p 3000:3000 solidstart-app

remove-orphaned:
	docker system prune -f

