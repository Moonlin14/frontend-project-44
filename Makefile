install:
	npm ci

brain-games: 
	node bin/brain-games.js


publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

brain-cacl:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gsd:
	node bin/brain-gsd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js